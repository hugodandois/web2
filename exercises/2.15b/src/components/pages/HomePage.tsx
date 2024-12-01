import PageTitle from "../PageTitle";
import { useOutletContext } from "react-router-dom";
import { MovieContext } from "../../types";
import MovieTitleList from "../MovieTitleList";


const HomePage = () => {
    const { movies }: MovieContext = useOutletContext();


    return (
        <div>
            <PageTitle title="Home" />
            <p>Welcome to our cinema website!</p>
            <h4>My favorite movies</h4>
            <MovieTitleList movies={movies} />
        </div>
    );
}

export default HomePage;