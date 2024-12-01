import { Movie } from '../types';
import './MovieCard.css';

interface MovieCardProps {
    movie: Movie;
    onDeleteMovie: (movie: Movie) => void;
}

const MovieCard = ({ movie, onDeleteMovie }: MovieCardProps) => {
    return (
       <div className="card">
        <div className="card-body">
            <h3 className='card-title'>{movie.title}</h3>
            {movie.imageURL && (
            <img src={movie.imageURL} className='card-img-top' alt={movie.title}  />
            )}
            <p className='card-text'>
                <strong>Réalisateur :</strong>{movie.director}
            </p>
            <p className='card-text'>
                <strong>Durée :</strong>{movie.duration} minutes
            </p>
            {movie.budget && (
            <p className='card-text'>
                <strong>Budget :</strong>{movie.budget}$
            </p>
            )}
            {movie.description && (
            <p className='card-text'>
                <strong>Description :</strong>{movie.description}
            </p>
            )}
            <button className='btn btn-danger' onClick={() => onDeleteMovie(movie)}>Supprimer</button>
        </div>
       </div>
    );
};

export default MovieCard;