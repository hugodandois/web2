interface User {
    name: string;
    age: number;
}

const UsersCard = (props: User) => {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>{props.age}</p>
        </div>
    );
}

export default UsersCard;