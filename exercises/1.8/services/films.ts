import path from "node:path";
import { Film, NewFilm } from "../types";
import { parse, serialize } from "../utils/json";
const jsonDbPath = path.join(__dirname, "/../data/films.json");

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

function readAllFilms(minimumDuration: number): Film[] {
    const films = parse(jsonDbPath, defaultFilms);
    if (!minimumDuration) {
        return films;
    }

    const minimumDurationNumber = Number(minimumDuration);

    const filteredFilms = films.filter((film) => {
        return film.duration >= minimumDurationNumber;
    });
    return filteredFilms;
}

function readOneFilm(id: number): Film | undefined {
    const films = parse(jsonDbPath, defaultFilms);
    const film = films.find((film) => film.id === id);
    if (!film) {
        return undefined;
    }
    return film;

}

function createOneFilm(newFilm: NewFilm): Film {
    const films = parse(jsonDbPath, defaultFilms);

    const nextId =
        films.reduce((maxId, film) => (film.id > maxId ? film.id : maxId), 0) +
        1;

    const createdFilm = {
        id: nextId,
        ...newFilm,
    };

    films.push(createdFilm);
    serialize(jsonDbPath, films);

    return createdFilm;
}

function deleteOneFilm(filmId: number): Film | undefined {
    const films = parse(jsonDbPath, defaultFilms);
    const index = films.findIndex((film) => film.id === filmId);
    if (index === -1) {
        return undefined;
    }

    const deletedElements = films.splice(index, 1);
    serialize(jsonDbPath, films);
    return deletedElements[0];
}

function updateOneFilm(
    filmId: number,
    newFilm: Partial<NewFilm>
): Film | undefined {
    const films = parse(jsonDbPath, defaultFilms);
    const film = films.find((film) => film.id === filmId);
    if (!film) {
        return undefined;
    }

    if (newFilm.title !== undefined) {
        film.title = newFilm.title;
    }
    if (newFilm.director !== undefined) {
        film.director = newFilm.director;
    }
    if (newFilm.duration !== undefined) {
        film.duration = newFilm.duration;
    }
    if (newFilm.budget !== undefined) {
        film.budget = newFilm.budget;
    }
    if (newFilm.description !== undefined) {
        film.description = newFilm.description;
    }

    serialize(jsonDbPath, films);
    return film;
}

function filmExistsByTitleAndDirector(title: string, director: string): boolean {
    const films = parse(jsonDbPath, defaultFilms);
    return films.some(film => 
        film.title.toLowerCase() === title.toLowerCase() && 
        film.director.toLowerCase() === director.toLowerCase()
    );
}

const updateOrCreateOne = (
    id: number,
    updatedFilm: NewFilm
  ): Film | undefined => {
    const films = parse(jsonDbPath, defaultFilms);
  
    const index = films.findIndex((film) => film.id === id);
  
    if (index === -1) {
      return createOneFilm(updatedFilm);
    }
  
    const film = { ...films[index], ...updatedFilm };
  
    films[index] = film;
    serialize(jsonDbPath, films);
  
    return film;
  };
  
export { readAllFilms, readOneFilm, createOneFilm, deleteOneFilm, updateOneFilm, filmExistsByTitleAndDirector, updateOrCreateOne };