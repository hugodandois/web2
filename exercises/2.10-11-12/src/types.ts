interface Movie {
    title: string;
    director: string;
    duration: number;
    imageURL?: string;
    description?: string;
    budget?: number;
}

export type { Movie };