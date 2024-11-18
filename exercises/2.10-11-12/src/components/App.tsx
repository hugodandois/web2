import { Outlet, useNavigate } from "react-router-dom";
import "./App.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Header from "./Header";
import { Movie, MovieContext, NewMovie } from "../types";
import { useState } from "react";

const defaultMovies: Movie[] = [
  {
      id: 1,
      title: "Inception",
      director: "Christopher Nolan",
      duration: 148,
      
  },
  {
    id: 2,
      title: "Interstellar",
      director: "Christopher Nolan",
      duration: 169,
      
  },
  {
    id: 3,
      title: "The Dark Knight",
      director: "Christopher Nolan",
      duration: 152,
      
  },
  {
      id: 12,
      title: "The Shawshank Redemption",
      director: "Frank Darabont",
      duration: 142,
      
  },
  {
      id: 5,
      title: "The Godfather",
      director: "Francis Ford Coppola",
      duration: 175,
  }
];

const App = () => {
  const [movies, setMovies] = useState(defaultMovies);
  const navigate = useNavigate();

  const onAddMovie = (newMovie: NewMovie) => {
      const nextId = Math.max(...movies.map((movie) => movie.id)) + 1;
      const movieToBeAdded = { id: nextId, ...newMovie}
      setMovies([...movies, movieToBeAdded]);
      navigate("/movie-list");
  }

  const movieContext: MovieContext = {
    movies,
    onAddMovie,
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