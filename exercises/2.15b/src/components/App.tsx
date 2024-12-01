import { Outlet, useNavigate } from "react-router-dom";
import "./App.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Header from "./Header";
import { Movie, MovieContext, NewMovie } from "../types";
import { useState, useEffect } from "react";
import { fetchMovies, addMovie, deleteMovie } from "./utils/film-service";



const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const navigate = useNavigate();

  const initMovies = async () => {
    try {
      const movies = await fetchMovies();
      setMovies(movies);
    } catch (err) {
      console.error("App::error: ", err);
    }
  }

  useEffect(() => {
    initMovies();
  }, []);

  const onAddMovie = async (newMovie: NewMovie) => {
    try {
      const movieToBeAdded = await addMovie(newMovie);
      console.log("Movie added : ", movieToBeAdded);
      await initMovies();
      navigate("/movie-list");
    }catch(err){
      console.error("App::error: ", err);
    }
      
  }

  const onDeleteMovie = async (movie: Movie) => {
    try {
      await deleteMovie(movie);
      await initMovies();
    } catch (err) {
      console.error("App::error: ", err);
    }
  }

  const movieContext: MovieContext = {
    movies,
    onAddMovie,
    onDeleteMovie
  }

  return (
    <div className="page-content">
      <Header urlLogo="https://media.istockphoto.com/id/1429764305/fr/vectoriel/bande-de-film-vierge-isol%C3%A9e-sur-le-fond-blanc.jpg?s=1024x1024&w=is&k=20&c=is5Y6cun0NC8PxJd51p4YnUoLUpyb758Bdigh4Bqn48=">
        <h1>Tous sur les films</h1>
        <Navbar />
      </Header>

      <main>
        <Outlet context={movieContext}/>
      </main>
      <Footer urlLogo="https://media.istockphoto.com/id/1202770152/fr/photo/bobine-de-film-disolement-sur-le-fond-jaune-lumineux-dans-les-couleurs-pastel.jpg?s=1024x1024&w=is&k=20&c=2yKBrC8oyimPdW-5IxFWN_zxFPVK3KWYL9OE2gVmVX4=" >
        <p>@ myMovies</p>

      </Footer>
    </div>
  );
}

export default App;