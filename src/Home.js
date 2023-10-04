import { useState } from 'react';

const Home = () => {

    // let name = "Zoe";
    const [name, setName] = useState("Mario");
    const [age, setAge] = useState(25);

    const handleClick = () => {
        setName("Luigi");
        setAge(30);
    }

    const handleClickAgain = (name) => {
        console.log("hello " + name);
    };

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name } is { age } years old</p>
            <button onClick={handleClick}>Click me</button>
            <button onClick={() => handleClickAgain("Zoe")}>Click me again</button>
        </div>
     );
}
 
export default Home;