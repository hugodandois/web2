import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => (
    <div className="container">
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/cinemas">Cinemas</Link>
            <Link to="/movie-list">My favorite movies</Link>
            <Link to="/add-movie">Add a movie</Link>
        </nav>
    </div>
);

export default Navbar;
