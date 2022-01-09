import './App.css';
import './bootstrap.min.css';
import React, {useState, useEffect} from "react";
import CalcForm from './components/CalcForm.js';
import MapWrapper from "./components/MapRender";
import MapForm from "./components/MapForm";
import {Row, Col, Container} from "react-bootstrap";

function App() {
    return (
        <div className="App">
            <Container>
                <Row>
                    <Col>
                        <Row>
                            <div className="bg-light border rounded text-dark">
                                <MapForm/>
                            </div>
                        </Row>
                        <Row>
                            <MapWrapper/>

                            <div style={{height: "300px"}} id="map"></div>
                        </Row>
                    </Col>

                    <Col>
                        <CalcForm/>
                    </Col>
                </Row>

            </Container>
        </div>
    );
}

export default App;
