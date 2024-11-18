interface Movie {
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

export type { Movie, MovieContext };