import {Accordion} from "react-bootstrap";
import {Card} from "react-bootstrap";
import {useAccordionButton, Row, Col} from "react-bootstrap";
import NumberFormat from 'react-number-format';
import React from "react";
import sixt from '../img/sixt-vector-logo.svg'
import sharenow from '../img/share-now-logo-vector.svg'
import mywheels from '../img/mywheels.svg'
import greenwheels from '../img/greenwheels.svg'

function CustomToggle({children, eventKey}) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
        console.log('totally custom!'),
    );

    return (
        <button
            type="button"
            // style={{width: 100, height: 100}}
            onClick={decoratedOnClick}
            className='Card.Header container-fluid p-3 border-0'
        >
            {children}
        </button>
    );
}

export default function CalcCards(json_table) {
    const array = json_table.json_table

    const imgs = {
        'Sixt': sixt,
        'SHARE NOW': sharenow,
        'MyWheels': mywheels,
        'Greenwheels': greenwheels
    }
    return (
        <Accordion defaultActiveKey="0" className='mt-5'>
            {array.map((item, index) => {

                return (
                    <Card className='mb-3'>
                        <CustomToggle eventKey={index}>
                            <Row className='mx-auto'>

                                <Col className='my-auto'>
                                    <div className='mx-auto'>
                                        <img src={imgs[item['Service']]} alt={item['Service']} />
                                    </div>
                                        {/*{item['Service']}*/}
                                </Col>
                                <Col className='my-auto'>
                                    <div className='mx-auto my-auto dataHeader'>Car type</div>
                                    <div className='mx-auto my-auto dataContent'>{item['Car type']}</div>
                                </Col>
                                <Col className='my-auto'>
                                    <div className='mx-auto my-auto dataHeader'>Subscription</div>
                                    <div className='mx-auto my-auto dataContent'>{item['Subscription']}</div>
                                </Col>
                                <Col className='my-auto'>
                                    <div className='mx-auto my-auto dataHeader'>Rate</div>
                                    <div className='mx-auto my-auto dataContent'>{item['Plan']}</div>
                                </Col>
                                <Col className='my-auto h4'>
                                    {/*<b>{item['Total cost']}</b>*/}
                                    <b><NumberFormat value={item['Total cost']} displayType={'text'}
                                                     thousandSeparator={true} decimalScale={2} fixedDecimalScale={true}
                                                     prefix={'€ '}/></b>
                                </Col>
                            </Row>
                        </CustomToggle>

                        <Accordion.Collapse eventKey={index}>
                            <Card.Body>Hello! I'm the body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                );
            })}

        </Accordion>
    );
}
