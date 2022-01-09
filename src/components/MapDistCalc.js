function triggerInput(enteredName, enteredValue) {
    const input = document.getElementById(enteredName);
    const lastValue = input.value;
    input.value = enteredValue;
    const event = new Event("input", {bubbles: true});
    const tracker = input._valueTracker;
    if (tracker) {
        tracker.setValue(lastValue);
    }
    input.dispatchEvent(event);
}

export default function MapDistCalc() {
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
        triggerInput('kilometers', Math.round(response['rows'][0]['elements'][0]['distance']['value'] / 1000))
        triggerInput('minutes', Math.round(response['rows'][0]['elements'][0]['duration']['value'] / 60))

        document.getElementById('CalcFormSubmit').click()
    });
}