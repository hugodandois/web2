interface Movie {
    id: number;
    title: string;
    director: string;
    duration: number;
    imageURL?: string;
    description?: string;
    budget?: number;
}

interface MovieContext {
    movies: Movie[];
    onAddMovie: (newMovie: Movie) => void;
}

type NewMovie = Omit<Movie, "id">;

export type { Movie, MovieContext, NewMovie };