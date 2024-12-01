import MovieCard from "./MovieCard";
import { Movie } from "../types";
import "./MovieListView.css";

interface MovieListViewProps {
  movies: Movie[];
  onDeleteMovie: (movie: Movie) => void;
}

const MovieListView = ({ movies, onDeleteMovie }: MovieListViewProps) => {
    return (
        <div>
            <ul className="movie-list-view">
                {movies.map((movie) => (
                    <MovieCard key={movie.title} movie={movie} onDeleteMovie={onDeleteMovie} />
                ))}
            </ul>
        
        </div>
    );
}

export default MovieListView;