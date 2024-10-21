import { useState } from "react";
import './ClickCounter.css';

interface ClickCounterProps {
    title: string;
    on10Click?: string;
    onMouseOver?: string;
}

const ClickCounter = ({title,on10Click = "You are a master in the art of clicking !",onMouseOver='Click on me now !'}: ClickCounterProps) => {
    const [count, setCount] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const handleClick = () => {
        setCount(count + 1);
    };


    return (
        <div className="card">
            <h2>{title}</h2>
            
            <button onClick={handleClick} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                count is {count}
                {isHovered ? <p>{onMouseOver}</p> : null}
            </button>
            {count >= 10 ? <p>{on10Click}</p> : null}

        </div>
    )
}
export default ClickCounter;


