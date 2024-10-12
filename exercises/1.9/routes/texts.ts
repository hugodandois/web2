import { Router } from "express";

import { NewText } from "../types";

import { containsOnlyExpectedKeys } from "../utils/validate";

import { createOne, deleteOne, readAll, readOne, updateOne, textExists } from "../services/texts";

const router = Router();

const expectedKeys = ["content", "level"];

const expectedLevels = ["easy", "medium", "hard"];

router.get("/", (req, res) =>{
    const level = "level" in req.query ? (req.query.level as string) : undefined;

    if (level !== undefined && !expectedLevels.includes(level)) {
        return res.status(400).send("Invalid level");
    }

    const filteredTexts = readAll(level);

    return res.send(filteredTexts);
});

router.get("/:id", (req, res) => {
    const id = req.params.id as string;

    const text = readOne(id);
    if (!text) {
        return res.sendStatus(404);
    }
    return res.json(text);
});

router.post("/", (req, res) => {
    const body: unknown = req.body;
    if (
        !body ||
        typeof body !== "object" ||
        !("content" in body) ||
        !("level" in body) ||
        typeof body.content !== "string" ||
        typeof body.level !== "string" ||
        !body.content.trim() ||
        !body.level.trim() ||
        !expectedLevels.includes(body.level)


    ) {
        return res.sendStatus(400);
    }

    if (!containsOnlyExpectedKeys(body, expectedKeys)) {
        return res.sendStatus(400);
    }

    const NewText = body as NewText;

    if (textExists(NewText)) {
        return res.status(409).send("Text already exists");
    }

    const addedText = createOne(NewText);

    if (!addedText) {
        return res.sendStatus(500);
    }
    return res.json(addedText);

});

router.delete("/:id", (req, res) => {
    const id = req.params.id as string;

    if (!id) {
        return res.sendStatus(400);
    }
    const deletedText = deleteOne(id);

    if (!deletedText) {
        return res.sendStatus(404);
    }
    return res.send(deletedText);
});

router.put("/:id", (req, res) => {

    const body: unknown = req.body;

    if (
        !body ||
        typeof body !== "object" ||
        !("content" in body) ||
        !("level" in body) ||
        typeof body.content !== "string" ||
        typeof body.level !== "string" ||
        !body.content.trim() ||
        !body.level.trim() ||
        !expectedLevels.includes(body.level)
    ) {
        return res.sendStatus(400);
    }

    if (!containsOnlyExpectedKeys(body, expectedKeys)) {
        return res.sendStatus(400);
    }

    const id = req.params.id as string;

    if (!id) {
        return res.sendStatus(400);
    }

    const createdOrUpdatedText = updateOne(id, body as NewText);

    if (!createdOrUpdatedText) {
        return res.sendStatus(500);
    }

    return res.json(createdOrUpdatedText);
});



export default router;