import path from "node:path";
import { v4 as uuidv4 } from "uuid";

import { Text, NewText } from "../types";

import { serialize, parse } from "../utils/json";

const jsonDbPath = path.join(__dirname, "/../data/texts.json");

const defaultTexts: Text[] = [];

const readAll = (level: string | undefined = undefined): Text[] => {
    const texts = parse(jsonDbPath, defaultTexts);
    return level ? texts.filter((text) => text.level === level) : texts;
};

const readOne = (id: string): Text | undefined => {
    const texts = parse(jsonDbPath, defaultTexts);
    return texts.find((text) => text.id === id);
};

const createOne = (newText: NewText): Text | undefined => {
    const texts = parse(jsonDbPath, defaultTexts);

    const matchingText = texts.find((text) => text.content.toLowerCase() === newText.content.toLowerCase());

    if (matchingText) {
        return undefined;
    }

    const text: Text = {
        id: uuidv4(),
        ...newText,
    };
    texts.push(text);
    serialize(jsonDbPath, texts);

    return text;
};

const deleteOne = (id: string): Text | undefined => {
    const texts = parse(jsonDbPath, defaultTexts);

    const index = texts.findIndex((text) => text.id === id);

    if (index === -1) {
        return undefined;
    }

    const [text] = texts.splice(index, 1);
    serialize(jsonDbPath, texts);

    return text;
};

const updateOne = (id: string, updatedText: NewText): Text | undefined => {
    const texts = parse(jsonDbPath, defaultTexts);

    const index = texts.findIndex((text) => text.id === id);

    if (index === -1) {
        return undefined;
    }

    const text = { ...texts[index], ...updatedText };

    texts[index] = text;
    serialize(jsonDbPath, texts);

    return text;


   
};

const textExists = (newText: NewText): boolean => {
    const texts = parse(jsonDbPath, defaultTexts);
    return texts.some((text) => text.content.toLowerCase() === newText.content.toLowerCase());
};

export { readAll, readOne, createOne , deleteOne, updateOne, textExists };



