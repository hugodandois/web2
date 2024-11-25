import { useEffect , useState} from "react";
import "./App.css";

interface Joke {
  joke: string;
  category: string;
}

const App = () => {
  const [joke, setJoke] = useState<Joke | null>(null);

  useEffect(() => {
    fetch("https://v2.jokeapi.dev/joke/Any?type=single")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`fetch error: ${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then((joke) => setJoke(joke))
      .catch((error) => {
        console.error("fetch error:", error);
      });
  }, []);

  if (!joke) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h4>{joke.category}</h4>
      <blockquote cite="https://www.huxley.net/bnw/four.html">
      
        <p>{joke.joke}</p>
      </blockquote>
      <p>
        <cite>https://v2.jokeapi.dev/joke.category</cite>
      </p>
    </div>
  );
}

export default App;
