import  { Router } from "express";
import path from "node:path";
import { Film, NewFilm } from "../types";
import { parse, serialize } from "../utils/json";
const jsonDbPath = path.join(__dirname, "/../data/films.json");

import { containsOnlyExpectedKeys } from "../utils/validate";

const defaultFilms: Film[] = [
    {
        id: 1,
        title: "The Shawshank Redemption",
        director: "Frank Darabont",
        duration: 142,
        budget: 25000000,
        description: "Two imprisoned"
    },
    {
        id: 2,
        title: "The Godfather",
        director: "Francis Ford Coppola",
        duration: 175,
        budget: 6000000,
        description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
    },
    {
        id: 3,
        title: "The Dark Knight",
        director: "Christopher Nolan",
        duration: 152,
        budget: 185000000,
        description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice."
    }
];
   

const router = Router();

const expectedKeys = ["title", "director", "duration", "budget", "description"];

router.get("/", (req, res) => {
    const films = parse(jsonDbPath, defaultFilms);
    if (!req.query["minimum-duration"]) {
        return res.json(films);
    }
    const minimumDuration = Number(req.query["minimum-duration"]);
    if (minimumDuration <= 0) {
        return res.sendStatus(400);
    }
    const filterFilms = films.filter((film) => {
        return film.duration >= minimumDuration;
    })

    return res.json(filterFilms);
});

router.get("/:id", (req, res) => {
    const id = Number(req.params.id);
    const films = parse(jsonDbPath, defaultFilms);
    const film = films.find((film) => film.id === id);
    if (!film) {
        return res.status(404).json({ message: "Film not found" });
    }
    return res.json(film);
});

const filmExists = (title: string): boolean => {
    const films = parse(jsonDbPath, defaultFilms);
    return films.some(film => film.title.toLowerCase() === title.toLowerCase());
};
const directorExists = (director: string): boolean => {
    const films = parse(jsonDbPath, defaultFilms);
    return films.some(film => film.director.toLowerCase() === director.toLowerCase());
}

router.post("/", (req, res) => {
    const body: unknown = req.body;
    if (
        !body ||
        typeof body !== "object" ||
        !("title" in body) ||
        !("director" in body) ||
        !("duration" in body) ||
        !("budget" in body) ||
        !("description" in body) ||
        typeof body.title !== "string" ||
        typeof body.director !== "string" ||
        typeof body.duration !== "number" ||
        typeof body.budget !== "number" ||
        typeof body.description !== "string" ||
        !body.title.trim() ||
        !body.director.trim() ||
        body.duration <= 0 ||
        body.budget <= 0 ||
        !body.description.trim()
    ) {
        return res.sendStatus(400);
    }

    if (filmExists(body.title)) {
        return res.sendStatus(409);
    }
    if (directorExists(body.director)) {
        return res.sendStatus(409);
    }

    const { title, director, duration, budget, description } = body as Film;

    const films = parse(jsonDbPath, defaultFilms);

    const nextId =
        films.reduce((maxId, film) => (film.id > maxId ? film.id : maxId), 0) +
        1;

    const newFilm: Film = {
        id: nextId,
        title,
        director,
        duration,
        budget,
        description
    };

    films.push(newFilm);
    serialize(jsonDbPath, films);
    return res.json(newFilm);
});

router.delete("/:id", (req, res) => {
    const id = Number(req.params.id);

    const films = parse(jsonDbPath, defaultFilms);

    if (isNaN(id)) {
        return res.sendStatus(400);
    }

    const index = films.findIndex((film) => film.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Film not found" });
    }

    const deletedFilm = films[index];

    films.splice(index, 1);
    serialize(jsonDbPath, films);

    return res.send(deletedFilm);
});

router.patch("/:id", (req, res) => {
    const id = Number(req.params.id);
    const films = parse(jsonDbPath, defaultFilms);

    if (isNaN(id)) {
        return res.sendStatus(400);
    }

    const filmToUpdate = films.find((film) => film.id === id);

    if (filmToUpdate === undefined) {
        return res.status(404).json({ message: "Film not found" });
    }

    const body: unknown = req.body;

    if (
        !body ||
        typeof body !== "object" ||
        Object.keys(body).length === 0 ||
        ("title" in body && (typeof body.title !== "string" || !body.title.trim())) ||
        ("director" in body && (typeof body.director !== "string" || !body.director.trim())) ||
        ("duration" in body && (typeof body.duration !== "number" || body.duration <= 0)) ||
        ("budget" in body && (typeof body.budget !== "number" || body.budget <= 0)) ||
        ("description" in body && (typeof body.description !== "string" || !body.description.trim()))
    ) {
        return res.sendStatus(400);
    }

    if (!containsOnlyExpectedKeys(body, expectedKeys)) {
        return res.sendStatus(400);
    }

    const uptoDateFilm = { ...filmToUpdate, ...body };

    films[films.indexOf(filmToUpdate)] = uptoDateFilm;

    serialize(jsonDbPath, films);

    return res.send(uptoDateFilm);

});

router.put("/:id", (req, res) => {

    const body: unknown = req.body;
    const films = parse(jsonDbPath, defaultFilms);

    if (
        !body ||
        typeof body !== "object" ||
        !("title" in body) ||
        !("director" in body) ||
        !("duration" in body) ||
        !("budget" in body) ||
        !("description" in body) ||
        typeof body.title !== "string" ||
        typeof body.director !== "string" ||
        typeof body.duration !== "number" ||
        typeof body.budget !== "number" ||
        typeof body.description !== "string" ||
        !body.title.trim() ||
        !body.director.trim() ||
        body.duration <= 0 ||
        body.budget <= 0 ||
        !body.description.trim()
    ) {
        return res.sendStatus(400);
    }

    if (!containsOnlyExpectedKeys(body, expectedKeys)) {
        return res.sendStatus(400);
    }

    const id = Number(req.params.id);

    if (isNaN(id)) {
        return res.sendStatus(400);
    }

    const indexOffFilmToUpdate = films.findIndex((film) => film.id === id);

    if (indexOffFilmToUpdate < 0) {
        const newFilm = body as NewFilm;

        const existingFilm = films.find(
            (film) => film.title.toLowerCase() === newFilm.title.toLowerCase() &&
                film.director.toLowerCase() === newFilm.director.toLowerCase()
        );
        
        if (existingFilm) {
            return res.sendStatus(409);
        }

    

    const nextId =
        films.reduce((acc, film) => (film.id > acc ? film.id : acc), 0) + 1;
    
    const addedFilm = { id: nextId, ...newFilm };

    films.push(addedFilm);

    return res.json(addedFilm);
    }

    const updatedFilm = { ...films[indexOffFilmToUpdate], ...body } as Film;

    films[indexOffFilmToUpdate] = updatedFilm;

    serialize(jsonDbPath, films);

    return res.send(updatedFilm);

    
});



export default router;