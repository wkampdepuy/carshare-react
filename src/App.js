import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from "react";


function App() {
    const [currentTime, setCurrentTime] = useState(5);

    useEffect(() => {
        fetch('/time').then(res => res.json())
            .then(data => setCurrentTime(data)).catch(error => console.log(error));
    }, []);

    return (
        <div className="App">
            <header className="App-header">

                ... no changes in this part ...

                <p>The current time is {currentTime}.</p>
            </header>
        </div>
    );
}

export default App;
