import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from "react";
import Mapform from "./components/Mapform"


function App() {
    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
        fetch('http://localhost:5000/time').then(res => res.json()).then(data => {
            setCurrentTime(data.time);
        });
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
