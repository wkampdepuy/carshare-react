import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/FormGroup";
import Button from "react-bootstrap/Button";


const showForm = () => {
    return (
        <div>
            <Form onSubmit={submitForm} id='CalcForm'>
                <FormGroup>
                    <Form.Label>Enter distance (kilometers)</Form.Label>
                    <Form.Control id='kilometers' type="number" defaultValue="100"
                                  onChange={e => setKilometers(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Form.Label>Enter duration (minutes)</Form.Label>
                    <Form.Control id='minutes' type="number" defaultValue="60"
                                  onChange={e => setMinutes(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Form.Label>Enter frequency (per month)</Form.Label>
                    <Form.Control id='frequency' type="number" value={frequency}
                                  onChange={e => setFrequency(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Form.Label>Retour?</Form.Label>
                    <Form.Check id='retour' type="checkbox" onChange={e => setRetour(e.currentTarget.checked)}/>
                </FormGroup>

                <Button variant="primary" id='CalcFormSubmit' type="submit" value="Submit">Submit</Button>

            </Form>
            {/*<CalcTable json_table={table}/>*/}
        </div>
    )
}

export default showForm