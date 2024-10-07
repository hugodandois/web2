import  { Router } from "express";

import { NewFilm } from "../types";
import { 
    createOneFilm,
    deleteOneFilm,
    filmExistsByTitleAndDirector,
    readAllFilms,
    readOneFilm, updateOneFilm, 
    updateOrCreateOne} from "../services/films";

import { containsOnlyExpectedKeys } from "../utils/validate";



const router = Router();

const expectedKeys = ["title", "director", "duration", "budget", "description"];

router.get("/", (req, res) => {
    const minimumDuration = Number(req.query["minimum-duration"]);
    const films = readAllFilms(minimumDuration);
    return res.json(films);
});

router.get("/:id", (req, res) => {
    const id = Number(req.params.id);
    const film = readOneFilm(id);
    if (!film) {
        return res.sendStatus(404);
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

    if (!containsOnlyExpectedKeys(body, expectedKeys)) {
        return res.sendStatus(400);
    }

    const newFilm = body as NewFilm;

    if (filmExistsByTitleAndDirector(newFilm.title, newFilm.director)) {
        return res.sendStatus(409);
    }
    const addedFilm = createOneFilm(newFilm);

    if (!addedFilm) {
        return res.sendStatus(500);
    }
    return res.json(addedFilm);
});

router.delete("/:id", (req, res) => {
    const id = Number(req.params.id);


    if (isNaN(id)) {
        return res.sendStatus(400);
    }

    const deletedFilm = deleteOneFilm(id);

    if (!deletedFilm) {
        return res.sendStatus(404);
    }

    return res.send(deletedFilm);
});

router.patch("/:id", (req, res) => {
    const id = Number(req.params.id);

    if (isNaN(id)) {
        return res.sendStatus(400);
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

    const uptoDateFilm = updateOneFilm(id, body);

    if (!uptoDateFilm) {
        return res.sendStatus(404);
    }

    return res.send(uptoDateFilm);

});

router.put("/:id", (req, res) => {

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

    if (!containsOnlyExpectedKeys(body, expectedKeys)) {
        return res.sendStatus(400);
    }

    const id = Number(req.params.id);

    if (isNaN(id)) {
        return res.sendStatus(400);
    }

    const createdOrUpdatedFilm = updateOrCreateOne(id, body as NewFilm);

    if (!createdOrUpdatedFilm) {
        return res.sendStatus(500);
    }

    return res.json(createdOrUpdatedFilm);

    
});



export default router;