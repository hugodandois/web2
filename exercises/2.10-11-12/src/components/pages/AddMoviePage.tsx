import AddMovieForm from "../AddMovieForm";
import PageTitle from "../PageTitle";
import { useOutletContext } from "react-router-dom";
import { MovieContext } from "../../types";

const AddMoviePage = () => {

    const { onAddMovie }: MovieContext = useOutletContext();
    return (
        <div>
            <PageTitle title="Add a movie" />
            <AddMovieForm onAddMovie={onAddMovie} />
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}

export default AddMoviePage;