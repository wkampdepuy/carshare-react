import CalcForm from "./CalcForm";
import RouteForm from "./RouteForm";
import React, {useState} from "react";
import {Row, Col, Container} from "react-bootstrap";

function CompleteForm() {
    const [show, setShow] = useState(true)

    return (
        <Container fluid>
            <Row className='bg-light'>
                <Col className='col-xs-6'>
                    Enter your journey information:
                </Col>
                <Col className='col-xs-6'>
                    <button onClick={() => setShow(currentShow => !currentShow)}>Or enter manually</button>
                </Col>
            </Row>
            <Row>
                {show ? <RouteForm/> : null}
                {!show ? <CalcForm/> : null}
            </Row>
        </Container>


    )
}

export default CompleteForm;