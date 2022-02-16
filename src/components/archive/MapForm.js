import React, {useState} from "react";
import {MyMapComponent} from '../MapRender'
import MapDistCalc from "../MapDistCalc";
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
        <FormGroup className="input-group p-3">
            <span className="input-group-addon" id="basic-addon1">Start</span>
            <Form.Control name="start" id="start" className="form-control search_box" value={start}
                          onChange={e => setStart(e.target.value)}/>
        </FormGroup>
        <FormGroup className="input-group px-3 pb-4">
            <span className="input-group-addon" id="basic-addon1">End</span>
            <Form.Control name="end" id="end" className="form-control search_box"
                          value={end} onChange={e => setEnd(e.target.value)}/>
        </FormGroup>

        <Button variant="primary" type="submit" value="Submit" className='d-none'></Button>
    </Form>)
}

export default MapForm