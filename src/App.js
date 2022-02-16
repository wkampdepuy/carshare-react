import './App.css';
import './bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import React, {useState} from "react";
import MapWrapper from "./components/MapRender";
import {Row, Col, Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import car from './img/car.svg'
import CompleteForm from "./components/CompleteForm";

function App() {
    return (<div className="App">
        <Navbar bg="light" expand="sm">
            <Container className='justify-content-center'>
                <Navbar.Brand href='#' className='p-1 '>
                    <a className="p-0 h-100">
                        <img src={car} className="h-100" alt=""/>
                    </a>
                </Navbar.Brand>
                <Navbar.Brand href='#' className='m-1'>Car Share Calculator</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <div>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Container>
        </Navbar>

        <Container fluid="xxl">
            <Row>
                <Col sm={8} lg={4} className='shadow-lg mapform'>
                    <Row>
                        <CompleteForm/>
                    </Row>
                </Col>
                <Col sm={8} lg={8}>
                    <MapWrapper/>
                    <div style={{height: "80vh"}} id="map" className="map"></div>
                </Col>
            </Row>

        </Container>

    </div>);
}

export default App;
