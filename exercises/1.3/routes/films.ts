import { Router } from "express";
import { Film } from "../types";

const films: Film[] = [
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

router.get("/", (req, res) => {
    if (!req.query["minimum-duration"]) {
        return res.json(films);
    }
    const minimumDuration = Number(req.query["minimum-duration"]);
    const filterFilms = films.filter((film) => {
        return film.duration >= minimumDuration;
    })

    return res.json(filterFilms);
});

router.get("/:id", (req, res) => {
    const id = Number(req.params.id);
    const film = films.find((film) => film.id === id);
    if (!film) {
        return res.status(404).json({ message: "Film not found" });
    }
    return res.json(film);
});

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

    const { title, director, duration, budget, description } = body as Film;

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
    return res.json(newFilm);
});




export default router;