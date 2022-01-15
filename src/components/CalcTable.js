import Table from 'react-bootstrap/Table';

const CalcTable = (json_table) => {

    const array = json_table.json_table
    return (
        <div>
            <Table striped borderless hover responsive="sm" size="sm">
                <thead>
                <tr>
                    <th>Service</th>
                    <th>Plan</th>
                    <th>Subscription</th>
                    <th>Car type</th>
                    <th>Total cost</th>
                </tr>
                </thead>
                <tbody>
                {array.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td>{item['Service']}</td>
                            <td>{item['Plan']}</td>
                            <td>{item['Subscription']}</td>
                            <td>{item['Car type']}</td>
                            <td>{item['Total cost']}</td>
                        </tr>
                    );
                })}
                </tbody>
            </Table>
        </div>
    )
}

export default CalcTable;