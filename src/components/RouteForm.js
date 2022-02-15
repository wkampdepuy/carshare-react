import React, {useState, useEffect} from "react";
import {MyMapComponent} from './MapRender'
import MapDistCalc from "./MapDistCalc";
import Button from 'react-bootstrap/Button'
import FormGroup from 'react-bootstrap/FormGroup';
import Form from 'react-bootstrap/Form'
import CalcCards from "./CalcCards";


const RouteForm = () => {
    const [start, setStart] = useState("Amsterdam")
    const [end, setEnd] = useState("Rotterdam")
    const [kilometers, setKilometers] = useState(78)
    const [minutes, setMinutes] = useState(61)
    const [frequency, setFrequency] = useState(1)
    const [retour, setRetour] = useState()
    const [table, setTable] = useState([])

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

    function HandleSubmit(event) {
        event.preventDefault()
        // console.log({start})


        MyMapComponent()

        const service = new window.google.maps.DistanceMatrixService();
        // build request
        const request = {
            origins: [document.getElementById("start").value],
            destinations: [document.getElementById("end").value],
            travelMode: window.google.maps.TravelMode.DRIVING,
            unitSystem: window.google.maps.UnitSystem.METRIC,
            avoidHighways: false,
            avoidTolls: false,
        };


        // get distance matrix response
        service.getDistanceMatrix(request).then((response) => {
            // put response
            setKilometers(Math.round(response['rows'][0]['elements'][0]['distance']['value'] / 1000))
            setMinutes(Math.round(response['rows'][0]['elements'][0]['duration']['value'] / 60))
            setFrequency(event.target.elements.frequency.value);
            setRetour(event.target.elements.retour.checked)
        });


        ;

        // const data = {
        //     kilometers: {kilometers}['kilometers'],
        //     minutes: {minutes}['minutes'],
        //     frequency: event.target.elements.frequency.value,
        //     retour: event.target.elements.retour.checked
        // };
        //
        //
        // const resp = fetch("/contact", {
        //     method: "POST", headers: {
        //         'Content-Type': 'application/json'
        //     }, body: JSON.stringify(data)
        // }).then((response) => {
        //     response.json().then((data) => {
        //         setTable(JSON.parse(data['table_json']))
        //     });
        // });

    }

    return (
        <div>

            <Form onSubmit={HandleSubmit}>
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
                <Button variant="primary" type="submit" value="Submit" className='d-none'></Button>
            </Form>

            <div className='border-top'>
                {/*<CalcTable json_table={table}/>*/}
                <CalcCards json_table={table}/>
            </div>
        </div>
    )
}

export default RouteForm