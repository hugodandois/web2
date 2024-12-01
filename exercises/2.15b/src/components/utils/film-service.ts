import { Movie , NewMovie } from "../../types";

const fetchMovies = async (): Promise<Movie[]> => {
    try {
        const response = await fetch("/api/films");

       if (!response.ok) {
        throw new Error("Failed to fetch movies : " + response.statusText);
       }
       const data = await response.json();
       if (!data || !Array.isArray(data)) {
        throw new Error("invalid data");
       }
       return data;
        
    } catch (err) {
        console.error("fetchMovies::error: ", err);
        throw err;
    }
};

const addMovie = async (newMovie: NewMovie): Promise<Movie> => {
    try {
        const options = {
            method: "POST",
            body: JSON.stringify(newMovie),
            headers: {
                "Content-Type": "application/json",
            },
        };

        const response = await fetch("/api/films", options);

        if (!response.ok) {
            throw new Error("Failed to add movie : " + response.statusText);
        }
        const data = await response.json();
        return data;
    } catch (err) {
        console.error("addMovie::error: ", err);
        throw err;
    }
};

const deleteMovie = async (movie: Movie): Promise<void> => {
    try {
       

        const response = await fetch(`/api/films/${movie.id}`, {
            method: "DELETE",
        }
        );

        if (!response.ok) {
            throw new Error("Failed to delete movie : " + response.statusText);
        }
    } catch (err) {
        console.error("deleteMovie::error: ", err);
        throw err;
    }
};

export { fetchMovies, addMovie, deleteMovie };