import User from "./User";



const App = () => {
    return (
        <>
            <User nom="Jhon" age={34} isOnline={true}/>
            <User nom="Sarah" age={23} isOnline={false}/>
            <User nom="bebou" age={40} isOnline={true}/>
        
        </>
    )
};

export default App;