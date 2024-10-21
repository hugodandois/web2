import { useState } from "react";

interface ClickCounterProps {
    title: string;
    on10Click?: string;
}

const ClickCounter = ({title,on10Click = "You are a master in the art of clicking !"}: ClickCounterProps) => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div className="card">
            <h2>{title}</h2>
            <button onClick={handleClick}>
                count is {count}
            </button>
            {count >= 10 ? <p>{on10Click}</p> : null}

        </div>
    )
}
export default ClickCounter;


