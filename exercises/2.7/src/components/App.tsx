import "./App.css";
import { Movie } from "../types";
import MovieListView from "./MovieListView";
import AddMovieForm from "./AddMovieForm";
import Footer from "./Footer";
import Header from "./Header";
import PageTitle from "./PageTitle";
import { useState } from "react";

function App() {

  const defaultMovies: Movie[] = [
    {
      title: "The Shawshank Redemption",
      director: "Frank Darabont",
      duration: 142,
      imageURL: "https://www.imdb.com/title/tt0111161/mediaviewer/rm10105600/",
      description: "Two imprisoned",
    
    },
    {
      title: "The Godfather",
      director: "Francis Ford Coppola",
      duration: 175,
      imageURL: "https://www.imdb.com/title/tt0068646/mediaviewer/rm10105600/",
      description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    },
    {
      title: "The Dark Knight",
      director: "Christopher Nolan",
      duration: 152,
      imageURL: "https://www.imdb.com/title/tt0468569/mediaviewer/rm10105600/",
      description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    },
    {
      title: "The Dark Knight",
      director: "Christopher Nolan",
      duration: 152,
      imageURL: "https://www.imdb.com/title/tt0468569/mediaviewer/rm10105600/",
      description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",

    }
  ];

  const [movies, setMovies] = useState(defaultMovies);

  const onMovieAdded = (newMovie: Movie) => {
    console.log(newMovie);
    setMovies([...movies, newMovie]);
  };

  

  return (
    <div>
      <Header urlLogo="dkdkjdj" >
        <h1>Tous sur les films</h1>
      </Header>

      <main>
        <PageTitle title="My favorite movies" />
        <MovieListView movies={movies} />
        <AddMovieForm onAddMovie={onMovieAdded} />

        <br /><br /><br /><br />
      </main>

      <Footer urlLogo="dljdkdd">
        <p>&copy; 2021</p>
      </Footer>
       
    </div>
  )
}

export default App
