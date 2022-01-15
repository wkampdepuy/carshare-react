import {useState} from "react";
import CalcTable from './CalcTable.js'
import Button from 'react-bootstrap/Button';
import FormGroup from 'react-bootstrap/FormGroup';
import Form from 'react-bootstrap/Form'
import SubmitForm from './CalcFormSubmit'
import {Row, Col} from "react-bootstrap";
import {InputGroup} from "react-bootstrap";
import {FormControl} from "react-bootstrap";
import CalcCards from "./CalcCards";

const CalcForm = () => {
    const [kilometers, setKilometers] = useState(78)
    const [minutes, setMinutes] = useState(61)
    const [frequency, setFrequency] = useState(1)
    const [retour, setRetour] = useState()
    const [table, setTable] = useState([])

    const submitForm = (event) => {
        event.preventDefault()
        const data = {
            kilometers: event.target.elements.kilometers.value,
            minutes: event.target.elements.minutes.value,
            frequency: event.target.elements.frequency.value,
            retour: event.target.elements.retour.checked
        };

        const response = fetch("/contact", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((response) => {
            response.json().then((data) => {
                console.log(JSON.parse(data['table_json']))
                setTable(JSON.parse(data['table_json']))
            });
        });
    }


    return (
        <div>
            <Form onSubmit={submitForm} >


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

                    <Button className="switch xl" variant="primary" id='CalcFormSubmit' type="submit"
                            value="Submit">Calculate</Button>

                </FormGroup>

            </Form>
            <div>
                {/*<CalcTable json_table={table}/>*/}
                <CalcCards json_table={table}/>
            </div>
        </div>
    )
}

export default CalcForm;