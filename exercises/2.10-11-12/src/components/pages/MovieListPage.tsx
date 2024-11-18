import { useState } from "react";
import AddMovieForm from "../AddMovieForm";
import MovieListView from "../MovieListView";
import PageTitle from "../PageTitle";
import { Movie } from "../../types";

const MovieListPage = () => {
    const defaultMovies: Movie[] = [
        {
            title: "Inception",
            director: "Christopher Nolan",
            duration: 148,
            
        },
        {
            title: "Interstellar",
            director: "Christopher Nolan",
            duration: 169,
            
        },
        {
            title: "The Dark Knight",
            director: "Christopher Nolan",
            duration: 152,
            
        },
        {
            title: "The Shawshank Redemption",
            director: "Frank Darabont",
            duration: 142,
            
        },
        {
            title: "The Godfather",
            director: "Francis Ford Coppola",
            duration: 175,
        }
    ];

    const [movies, setMovies] = useState(defaultMovies);

    const onAddMovie = (newMovie: Movie) => {
        setMovies([...movies, newMovie]);
    };
    return (
        <div>
            <PageTitle title="My favorite movies" />

            <MovieListView movies={movies} />

            <AddMovieForm onAddMovie={onAddMovie} />

            <br />
            <br />
            <br />
            <br />
        </div>
    )
}
       
export default MovieListPage;