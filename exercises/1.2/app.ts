import express, { ErrorRequestHandler } from "express";




import usersRouter from "./routes/users";
import filmsRouter from "./routes/films";


const app = express();

app.use((_req, _res, next) => {
    console.log(
      "Time:",
      new Date().toLocaleString("fr-FR", { timeZone: "Europe/Brussels" })
    );
    next();
});
let  i=0;
app.use((_req, _res, next) => {
    if (_req.method === "GET") {
        i++;
    }
    console.log("GET counter : ", i);
    next();
});
  

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/users", usersRouter);
app.use("/films", filmsRouter);

const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
    console.error(err.stack);
    return res.status(500).send("Something broke!");
};
  
app.use(errorHandler);


export default app;
