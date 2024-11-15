import "./App.css";
import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";
import { useState } from "react";

function App() {
  const [actionToBePerformed, setActionToBePerformed] = useState(false);

  const handleHeaderClick = () => {
    setActionToBePerformed(true);
  }

  const clearActionToBePerformed = () => {
    setActionToBePerformed(false);
  }

  return (
    <div className="page">
      <Header title="We  love pizza" version={0+1} handleHeaderClick={handleHeaderClick} />
      <Main actionToBePerformed={actionToBePerformed} clearActionToBePerformed={clearActionToBePerformed} />
      <Footer />
    </div>
  );
}








export default App;
