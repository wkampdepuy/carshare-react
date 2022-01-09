import React, {useState} from "react";
import {MyMapComponent} from './MapRender'
import MapDistCalc from "./MapDistCalc";
import Button from 'react-bootstrap/Button'
import FormGroup from 'react-bootstrap/FormGroup';
import Form from 'react-bootstrap/Form'

function MapForm() {
    const [start, setStart] = useState("Amsterdam")
    const [end, setEnd] = useState("Rotterdam")

    function handleSubmit(event) {
        event.preventDefault()
        // console.log({start})


        MyMapComponent()
        MapDistCalc()
    }

    return (<Form onSubmit={handleSubmit}>
        <FormGroup>
            <Form.Label>Start</Form.Label>
            <Form.Control name="start" id="start" className="search_box" value={start}
                          onChange={e => setStart(e.target.value)}/>
        </FormGroup>
        <FormGroup>
            <Form.Label>End</Form.Label>
            <Form.Control name="end" id="end" className="search_box"
                          value={end} onChange={e => setEnd(e.target.value)}/>
        </FormGroup>

        <Button variant="primary" type="submit" value="Submit">Submit</Button>
    </Form>)
}

export default MapForm