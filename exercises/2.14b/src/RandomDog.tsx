import { useEffect, useState } from "react";
import "./RandomDog.css";

interface Dog {
    image: string;
}

const RandomDog = () => {
    const [dog, setDog] = useState<Dog | undefined>(undefined);
    const [isHovered, setIsHovered] = useState(false);
    
    const fetchDog = async () => {
        try {
            const response = await fetch("https://dog.ceo/api/breeds/image/random");
            const dog = await response.json();


            setDog({
                image: dog.message ?? "No dog found",
            });
        } catch (err) {
            console.error("RandomDog::error: ", err);
        }
    };

    useEffect(() => {
        fetchDog();
    
        const intervalId = setInterval(() => {
            if (!isHovered) {
                fetchDog();
            }
        }, 10000);

        return () => clearInterval(intervalId);
    }, [isHovered]);
    return (
        <div className="container">
            <img className="image" src={dog?.image} alt="A Random Dog" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} />
        </div>
    );
};

export default RandomDog;