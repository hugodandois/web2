import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Header from "./Header";

const App = () => {
  return (
    <div className="App">
      <Header urlLogo="dlkjfdkjdlkjd">
        <h1>bonjour</h1>
      <Navbar />
      </Header>
      <Outlet />
      <Footer urlLogo="" >
        <p></p>

      </Footer>
    </div>
  );
}

export default App;