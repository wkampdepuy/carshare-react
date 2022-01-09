import {useState} from "react";
import CalcTable from './CalcTable.js'
import Button from 'react-bootstrap/Button';
import FormGroup from 'react-bootstrap/FormGroup';
import Form from 'react-bootstrap/Form'


const CalcForm = () => {
    const [kilometers, setKilometers] = useState(100)
    const [minutes, setMinutes] = useState(60)
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
                setTable(JSON.parse(data['table_json']))
            });
        });
    }

    return (
        <div>
            <Form onSubmit={submitForm} id='CalcForm'>
                <FormGroup>
                    <Form.Label>Enter distance (kilometers)</Form.Label>
                    <Form.Control id='kilometers' type="number" defaultValue="100" onChange={e => setKilometers(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Form.Label>Enter duration (minutes)</Form.Label>
                    <Form.Control id='minutes' type="number" defaultValue="60" onChange={e => setMinutes(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Form.Label>Enter frequency (per month)</Form.Label>
                    <Form.Control id='frequency' type="number" value={frequency} onChange={e => setFrequency(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Form.Label>Retour?</Form.Label>
                    <Form.Check id='retour' type="checkbox" onChange={e => setRetour(e.currentTarget.checked)}/>
                </FormGroup>

                <Button variant="primary" id='CalcFormSubmit' type="submit" value="Submit">Submit</Button>

            </Form>
            <CalcTable json_table={table}/>
        </div>
    )
}

export default CalcForm;