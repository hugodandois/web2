import PageTitle from "../PageTitle.tsx";
import Cinema from "../Cinema.tsx";
import { Movie } from "../../../../types.ts";
import Footer from "../Footer/index.tsx";
import Header from "../Header/index.tsx";
import "./App.css";



const App = () => {
  const pageTitle = "Informations sur les films dans les cinémas";

  const cinema1Name = "UGC DeBrouckère";

  const moviesCinema1: Movie[] = [
  {
    title: "HAIKYU-THE DUMPSTER BATTLE",
    director: "Susumu Mitsunaka",
  },
  {
    title: "GOODBYE JULIA",
    director: "Mohamed Kordofani",
  },
  {
    title: "INCEPTION",
    director: "Christopher Nolan",
  },
  {
    title: "PARASITE",
    director: "Bong Joon-ho",
  },
];

const cinema2Name = "UGC Toison d'Or";

const moviesCinema2: Movie[] = [
  {
    title: "THE WATCHERS",
    director: "Ishana Night Shyamalan",
  },
  {
    title: "BAD BOYS: RIDE OR DIE",
    director: "Adil El Arbi, Bilall Fallah",
  },
  {
    title: "TENET",
    director: "Christopher Nolan",
  },
  {
    title: "THE IRISHMAN",
    director: "Martin Scorsese",
  },
]; 

  
  return (
    <div>
      <Header urlLogo="https://media.istockphoto.com/id/1816633997/fr/photo/main-dune-personne-non-identifi%C3%A9e-tenant-un-seau-de-pop-corn-dans-une-salle-de-cin%C3%A9ma.jpg?s=1024x1024&w=is&k=20&c=k7L92wdTwkq9OTiFmHKQczIvEyEOjL7nqVf0sEamI2g=">
        <h1>Tous sur les films</h1>
      </Header>
      <main className="page-content">
        <PageTitle title={pageTitle} />

        <Cinema name={cinema1Name} movies={moviesCinema1} />

        <Cinema name={cinema2Name} movies={moviesCinema2} />
      </main>

      <Footer urlLogo="https://media.istockphoto.com/id/1503900500/fr/photo/the-end-%C3%A9crit-sur-un-tableau-de-clapet-de-film.jpg?s=1024x1024&w=is&k=20&c=stbjD6Rmhek3oBicnlBEXQ1Xw8r3Q3f7RYegB-9Ww98=">
        <p>2021 UGC Cinémas</p>
      </Footer>
    </div>
  );
};

export default App;