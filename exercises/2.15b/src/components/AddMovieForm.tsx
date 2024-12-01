import { SyntheticEvent, useState } from "react";
import { NewMovie } from "../types";
import "./AddMovieForm.css";

interface AddMovieFormProps {
  onAddMovie: (movie: NewMovie) => void;
}

const AddMovieForm = ({ onAddMovie }: AddMovieFormProps) => {
    const [title, setTitle] = useState("");
    const [director, setDirector] = useState("");
    const [duration, setDuration] = useState<number | undefined>(undefined);
    const [imageURL, setImageUrl] = useState<string | undefined>(undefined);
    const [description, setDescription] = useState<string | undefined>(undefined);
    const [budget, setBudget] = useState<number | undefined>(undefined);

    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
        onAddMovie({
             // or any other logic to generate a unique id
            title,
            director,
            duration: duration ?? 0,
            imageURL,
            description,
            budget,
        });
        
    };
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Titre :</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Réalisateur :</label>
                <input
                    type="text"
                    value={director}
                    onChange={(e) => setDirector(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Durée :</label>
                <input
                    type="number"
                    value={duration}
                    onChange={(e) => setDuration(Number(e.target.value))}
                    required
                />
            </div>
            <div>
                <label>Image URL :</label>
                <input
                    type="text"
                    value={imageURL}
                    onChange={(e) => setImageUrl(e.target.value)}
                />
            </div>
            <div>
                <label>Description :</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div>
                <label>Budget :</label>
                <input
                    type="number"
                    value={budget}
                    onChange={(e) => setBudget(Number(e.target.value))}
                />
            </div>
            <button type="submit">Ajouter</button>
        </form>
    )
}

export default AddMovieForm;