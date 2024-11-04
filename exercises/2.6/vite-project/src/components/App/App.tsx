import PageTitle from "../PageTitle.tsx";
import Cinema from "../Cinema.tsx";
import { Movie } from "../../../../types.ts";
import Footer from "../Footer/index.tsx";
import Header from "../Header/index.tsx";
import "./App.css";



const App = () => {
  const pageTitle = "Informations sur les films dans les cinémas";

  const cinema1Name = "UGC De Brouckère";

  const moviesCinema1: Movie[] = [
    {
      title: "HAIKYU-THE DUMPSTER BATTLE",
      director: "Susumu Mitsunaka",
      description:
        "A high-energy sports anime movie focusing on the intense volleyball rivalry between Karasuno High and their fierce competitors.",
    },
    {
      title: "GOODBYE JULIA",
      director: "Mohamed Kordofani",
      description:
        "A poignant drama that explores themes of love, loss, and the complex dynamics of human relationships in a deeply emotional narrative.",
    },
    {
      title: "INCEPTION",
      director: "Christopher Nolan",
      description:
        "A mind-bending sci-fi thriller where a skilled thief, who enters people's dreams to steal secrets, is given a chance to have his criminal record erased if he can implant an idea into a target's subconscious.",
    },
    {
      title: "PARASITE",
      director: "Bong Joon-ho",
      description:
        "An Oscar-winning dark comedy thriller that examines class disparities through the story of two families — one wealthy, the other destitute — and their increasingly complicated relationship.",
    },
  ];

  const cinema2Name = "UGC Toison d'Or";

  const moviesCinema2: Movie[] = [
    {
      title: "THE WATCHERS",
      director: "Ishana Night Shyamalan",
      description:
        "A suspenseful thriller that follows a group of people who are under constant surveillance, leading them to uncover dark secrets about their observers and themselves.",
    },
    {
      title: "BAD BOYS: RIDE OR DIE",
      director: "Adil El Arbi, Bilall Fallah",
      description:
        "The latest installment in the action-packed Bad Boys franchise, featuring detectives Mike Lowrey and Marcus Burnett as they take on their most dangerous case yet.",
    },
    {
      title: "TENET",
      director: "Christopher Nolan",
      description:
        "A complex and visually stunning sci-fi action film where a protagonist embarks on a time-bending mission to prevent World War III, navigating through a world of temporal inversion.",
    },
    {
      title: "THE IRISHMAN",
      director: "Martin Scorsese",
      description:
        "An epic crime drama that chronicles the life of Frank Sheeran, a mob hitman, as he reflects on his involvement with the Bufalino crime family and the mysterious disappearance of his friend, Jimmy Hoffa.",
    },
  ];
  //... the following does not change


  
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