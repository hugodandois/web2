import "./User.css";

interface UserProps {
    nom: string;
    age: number;
    isOnline: boolean;
}

const User = (props: UserProps) => {
    return (
        <div className="user_card">
            <h2>Nom: {props.nom}</h2>
            <p>Age: {props.age}</p>
            <p className={props.isOnline ? "user_online" : "user_offline"}>{props.isOnline ? "En ligne" : "Hors ligne"}</p>
        </div>
    )
}

export default User;