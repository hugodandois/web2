import { useState } from "react";
import './ColorBox.css';

const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'brown', 'black', 'white'];

const ColorBox = () => {
    const [colorIndex, setColorIndex] = useState(0);

    const handleClick = () => {
        setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    };

    return (
        <div className="container">
            <div 
            className="colorBox" 
            style={{ backgroundColor: colors[colorIndex] }}
            onClick={handleClick}
            >
                <div>Couleur : {colors[colorIndex]}  </div>
                <div>Couleur suivante : {colors[colorIndex+1]} </div>
            </div>
        </div>
    );
};

export default ColorBox;