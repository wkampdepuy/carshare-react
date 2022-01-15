import {Accordion} from "react-bootstrap";
import {Card} from "react-bootstrap";
import {useAccordionButton, Row, Col, Container} from "react-bootstrap";


function CustomToggle({children, eventKey}) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
        console.log('totally custom!'),
    );

    return (
        <button
            type="button"
            // style={{width: 100, height: 100}}
            onClick={decoratedOnClick}
            className='Card.Header container-fluid p-0 border-0'
        >
            {children}
        </button>
    );
}

export default function Example() {
    return (
        <Accordion defaultActiveKey="0">
            <Card className='mb-3'>
                {/*<Card.Header className='p-0'>*/}
                <CustomToggle eventKey="0">
                    <Row>
                        <Col className='my-auto'>
                            Sixt
                        </Col>
                        <Col>
                            <div className='mx-auto my-auto'>Car type</div>
                            <div className='mx-auto my-auto'>xs</div>
                        </Col>
                        <Col>
                            <div className='mx-auto my-auto'>Subscription</div>
                            <div className='mx-auto my-auto'>Free</div>
                        </Col>
                        <Col>
                            <div className='mx-auto my-auto'>Rate</div>
                            <div className='mx-auto my-auto'>Fixed</div>
                        </Col>
                        <Col className='my-auto'>
                            <b>€35,00</b>
                        </Col>
                    </Row>
                </CustomToggle>
                {/*</Card.Header>*/}
                <Accordion.Collapse eventKey="0">
                    <Card.Body>Hello! I'm the body</Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    );
}

