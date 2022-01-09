import CalcTable from "./CalcTable";
import {useState} from "react";

function SubmitForm(event) {

    const [table, setTable] = useState([
        {
            "Service": "Sixt",
            "Subscription": "Free",
            "Plan": "Minute rate",
            "Car type": "variable",
            "Kilometer fee": "-",
            "Minute fee": 18,
            "Fixed rate": "-",
            "Overtime fee": "-",
            "Overmilage fee": "-",
            "Package fee": "-",
            "Monthly cost": "-",
            "Discount": "-",
            "Total cost": 18
        },
        {
            "Service": "Sixt",
            "Subscription": "Free",
            "Plan": "3 hours",
            "Car type": "xs",
            "Kilometer fee": "-",
            "Minute fee": "-",
            "Fixed rate": 19,
            "Overtime fee": "-",
            "Overmilage fee": "-",
            "Package fee": "-",
            "Monthly cost": "-",
            "Discount": "-",
            "Total cost": 19
        },
        {
            "Service": "SHARE NOW",
            "Subscription": "Free",
            "Plan": "Minute rate",
            "Car type": "xs",
            "Kilometer fee": "-",
            "Minute fee": 19.8,
            "Fixed rate": "-",
            "Overtime fee": "-",
            "Overmilage fee": "-",
            "Package fee": "-",
            "Monthly cost": "-",
            "Discount": "-",
            "Total cost": 19.8
        },
        {
            "Service": "SHARE NOW",
            "Subscription": "Free",
            "Plan": "Minute rate",
            "Car type": "s",
            "Kilometer fee": "-",
            "Minute fee": 21.6,
            "Fixed rate": "-",
            "Overtime fee": "-",
            "Overmilage fee": "-",
            "Package fee": "-",
            "Monthly cost": "-",
            "Discount": "-",
            "Total cost": 21.6
        },
        {
            "Service": "SHARE NOW",
            "Subscription": "Free",
            "Plan": "Minute rate",
            "Car type": "m",
            "Kilometer fee": "-",
            "Minute fee": 25.8,
            "Fixed rate": 0.99,
            "Overtime fee": "-",
            "Overmilage fee": "-",
            "Package fee": "-",
            "Monthly cost": "-",
            "Discount": "-",
            "Total cost": 26.79
        }
    ])
    if (event.length > 0) {
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
                console.log(table)
                setTable(JSON.parse(data['table_json']))
            });
        });

    }
    // document.getElementById('output_table').value = table


    return (<div><CalcTable json_table={table}/></div>)
}

export default SubmitForm