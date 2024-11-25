import RandomDog from "./RandomDog";
import "./App.css";

const App = () => {
  const handleReload = () => {
    window.location.reload();
  }

  return (
    <div className="container">
      <h1>Random Dog</h1>
      <button onClick={handleReload} >Reload</button>
      <RandomDog />
      <RandomDog />
      <RandomDog />

    </div>
  );
}

export default App;