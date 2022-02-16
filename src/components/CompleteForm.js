import CalcForm from "./CalcForm";
import RouteForm from "./RouteForm";
import React, {useState, useEffect} from "react";
import {Row, Col, Container} from "react-bootstrap";

function CompleteForm() {
    const [show, setShow] = useState(true)
    const text = "Enter manually"
    const [buttonText, setButtonText] = useState(text)

    useEffect(() => {
        if(show){
            setButtonText("Enter manually")
        } else {
            setButtonText("Calculate route")
        }

    }, [show])


    return (
        <Container fluid>
            <Row className='bg-light align-items-center'>
                <Col className='col-xs-6 py-3'>
                    Enter your journey information:
                </Col>
                <Col className='col-xs-6 py-3'>
                    <button className="btn btn-secondary" onClick={() => {
                        setShow(currentShow => !currentShow);
                    }}>
                        {buttonText}
                    </button>
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