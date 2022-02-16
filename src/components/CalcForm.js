import React, {useEffect, useState} from "react";
import Button from 'react-bootstrap/Button';
import FormGroup from 'react-bootstrap/FormGroup';
import Form from 'react-bootstrap/Form'
import {FormControl} from "react-bootstrap";
import CalcCards from "./CalcCards";

const CalcForm = () => {
    const [kilometers, setKilometers] = useState(78)
    const [minutes, setMinutes] = useState(61)
    const [frequency, setFrequency] = useState(1)
    const [retour, setRetour] = useState()
    const [table, setTable] = useState([])
    // const [show, setShow] = useState(false);

    useEffect(() => {
        const data = {
            kilometers: {kilometers}['kilometers'],
            minutes: {minutes}['minutes'],
            frequency: {frequency}['frequency'],
            retour: {retour}['retour']
        };


        const resp = fetch("/contact", {
            method: "POST", headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify(data)
        }).then((response) => {
            response.json().then((data) => {
                setTable(JSON.parse(data['table_json']))
            });
        });

        ; // This is be executed when `loading` state changes
    }, [kilometers, minutes, frequency, retour])

    const submitForm = (event) => {
        event.preventDefault()
        const data = {
            kilometers: event.target.elements.kilometers.value,
            minutes: event.target.elements.minutes.value,
            frequency: event.target.elements.frequency.value,
            retour: event.target.elements.retour.checked
        };

        const response = fetch("/contact", {
            method: "POST", headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify(data)
        }).then((response) => {
            response.json().then((data) => {
                setTable(JSON.parse(data['table_json']))
            });
        });
    }


    return (<div>


        <Form onSubmit={submitForm}>

            <FormGroup className="input-group p-3">
                <span className="input-group-addon" id="basic-addon1">Distance</span>
                <FormControl min='1' id='kilometers' type="number" defaultValue="78"
                             onChange={e => setKilometers(e.target.value)}/>
                <span className="input-group-addon" id="basic-addon1">kilometers</span>
            </FormGroup>

            <FormGroup className="input-group px-3 pb-3">
                <span className="input-group-addon" id="basic-addon1">Duration</span>
                <Form.Control min='1' id='minutes' type="number" defaultValue="61"
                              onChange={e => setMinutes(e.target.value)}/>
                <span className="input-group-addon" id="basic-addon1">minutes</span>
            </FormGroup>

            <FormGroup className="input-group px-3 pb-3">
                <span className="input-group-addon" id="basic-addon1">Frequency</span>
                <Form.Control min='1' id='frequency' type="number" value={frequency}
                              onChange={e => setFrequency(e.target.value)}/>
                <span className="input-group-addon" id="basic-addon1">per month</span>
            </FormGroup>

            <FormGroup className="d-flex justify-content-around align-items-center mx-5 mb-1">
                <Form.Label className="d-inline-flex">Return</Form.Label>

                <Form.Check id='retour' type="switch"
                            onChange={e => setRetour(e.currentTarget.checked)}/>

                <Button className="switch xl d-none" variant="primary" id='CalcFormSubmit' type="submit"
                        value="Submit">Calculate</Button>

            </FormGroup>

        </Form>
        <div className='border-top px-3'>
            {/*<CalcTable json_table={table}/>*/}
            <CalcCards json_table={table}/>
        </div>
    </div>)
}

export default CalcForm;