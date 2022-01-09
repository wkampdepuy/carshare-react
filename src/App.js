import './App.css';
import './bootstrap.min.css';
import React, {useState, useEffect} from "react";
import CalcForm from './components/CalcForm.js';
import MapsWrapper from "./components/MapRender";
import MapWrapper from "./components/MapRender";
import MyMapComponent from "./components/MapRender"
import MapForm from "./components/MapForm";

function App() {
    return (
        <div className="App">
            <div>
                <CalcForm/>
                <MapForm/>
                <MapWrapper/>
                <div style={{height: "300px"}} id="map"></div>

            </div>
        </div>
    );
}

export default App;
