import { useMatch, useOutletContext } from "react-router-dom";
import { MovieContext } from "../../types";
import MovieCard from "../MovieCard";

const MoviePage = () => {
    const { movies, onDeleteMovie }: MovieContext = useOutletContext();

    const match = useMatch("/movies/:id");
    const movieId = Number(match?.params.id);
    if (isNaN(movieId)) {
        return <div>Invalid movie ID</div>;
    }

    const movieFound = movies.find((movie) => movie.id === movieId);

    if (!movieFound) {
        return <div>Movie not found</div>;
    }

    return (
        <div>
            <MovieCard movie={movieFound} onDeleteMovie={onDeleteMovie}/>
        </div>
    );
}

export default MoviePage;