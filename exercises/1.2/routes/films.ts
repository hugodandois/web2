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

router.get("/", (_req, res) => {
    return res.json(films);
});


export default router;