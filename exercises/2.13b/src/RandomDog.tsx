import { useEffect, useState } from "react";
import "./RandomDog.css";

interface Dog {
    image: string;
}

const RandomDog = () => {
    const [dog, setDog] = useState<Dog | null>(null);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`fetch error: ${response.status} ${response.statusText}`);
                }
                return response.json();
            })
            .then((data) => {
                setDog({ image: data.message });
            })
            .catch((error) => {
                console.error("fetch error:", error);
            });
    }, []);

    if (!dog) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container">
            <img src={dog.image} alt="Random dog" />
        </div>
    );
}

export default RandomDog;