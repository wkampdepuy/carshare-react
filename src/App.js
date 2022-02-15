import './App.css';
import './bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import React, {useState} from "react";
import CalcForm from './components/CalcForm.js';
import MapWrapper from "./components/MapRender";
import MapForm from "./components/MapForm";
import {Row, Col, Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import car from './img/car.svg'
import {Card} from "react-bootstrap";
import RouteForm from "./components/RouteForm";
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

        {/*<Container>*/}
        {/*    <Row className='d-flex justify-content-center'>*/}

        {/*        <Col sm={8} lg={5} className="m-4">*/}
        {/*            <Card className='shadow-lg mapform'>*/}
        {/*                <Card.Header>Enter your destination</Card.Header>*/}
        {/*                <div className="p-2">*/}
        {/*                    <MapForm/>*/}
        {/*                </div>*/}

        {/*                <MapWrapper/>*/}
        {/*                <div style={{height: "400px"}} id="map" className="map"></div>*/}
        {/*            </Card>*/}
        {/*        </Col>*/}
        {/*        <Col sm={8} lg={5} className='m-4'>*/}
        {/*            <Card className="calcTile shadow-lg">*/}
        {/*                <Card.Header>Manually enter your trip details</Card.Header>*/}
        {/*                <Card.Body className='pt-2'>*/}
        {/*                    <CalcForm/>*/}
        {/*                </Card.Body>*/}

        {/*            </Card>*/}


        {/*        </Col>*/}
        {/*    </Row>*/}

        {/*</Container>*/}

        <Container fluid="xxl">
            <Row>
                <Col className='shadow-lg mapform'>

                    {/*<Row className='border-bottom'>*/}
                    {/*    <MapForm/>*/}
                    {/*</Row>*/}
                    <Row>
                        <CompleteForm/>
                    </Row>
                </Col>
                <Col>
                    <MapWrapper/>
                    <div style={{height: "80vh"}} id="map" className="map"></div>
                </Col>
            </Row>

        </Container>

    </div>);
}

export default App;
