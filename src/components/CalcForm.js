import {useState} from "react";
import CalcTable from './CalcTable.js'
import Button from 'react-bootstrap/Button';
import FormGroup from 'react-bootstrap/FormGroup';
import Form from 'react-bootstrap/Form'
import SubmitForm from './CalcFormSubmit'
import {Row, Col} from "react-bootstrap";
import {InputGroup} from "react-bootstrap";
import {FormControl} from "react-bootstrap";


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
                console.log(JSON.parse(data['table_json']))
                setTable(JSON.parse(data['table_json']))
            });
        });
    }

    // function handleSubmit(event) {
    //     event.preventDefault()
    //     // console.log(event)
    //     SubmitForm(event)
    // }


    return (
        <div>
            <Form onSubmit={submitForm} id='CalcForm'>

                <FormGroup as={Row} className="mx-5 mb-3">
                    <Form.Label column sm={2}>Distance (kilometers)</Form.Label>
                    <Col>
                        <FormControl min='1' id='kilometers' type="number" defaultValue="100"
                                     onChange={e => setKilometers(e.target.value)}/>
                    </Col>

                </FormGroup>

                <FormGroup as={Row} className="mx-5 mb-3">
                    <Form.Label column sm={2}>Duration (minutes)</Form.Label>
                    <Col>
                        <Form.Control min='1' id='minutes' type="number" defaultValue="60"
                                      onChange={e => setMinutes(e.target.value)}/>
                    </Col>
                </FormGroup>

                <FormGroup as={Row} className="mx-5 mb-3">
                    <Form.Label column sm={2}>Frequency (per month)</Form.Label>
                    <Col>
                        <Form.Control min='1' id='frequency' type="number" value={frequency}
                                      onChange={e => setFrequency(e.target.value)}/>
                    </Col>
                </FormGroup>

                <FormGroup as={Row} className="mx-5 mb-3">
                    <Form.Label column sm={2}>Retour?</Form.Label>
                    <Col>
                        <Form.Check id='retour' type="switch"
                                    onChange={e => setRetour(e.currentTarget.checked)}/>
                    </Col>
                </FormGroup>

                <FormGroup as={Row} className="mx-5">
                    <Col sm={{span: 10, offset: 2}}>
                        <Button className="xl" variant="primary" id='CalcFormSubmit' type="submit" value="Submit">Submit</Button>
                    </Col>
                </FormGroup>
            </Form>
            <CalcTable json_table={table}/>
        </div>
    )
}

export default CalcForm;