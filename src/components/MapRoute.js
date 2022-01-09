function calculateAndDisplayRoute(directionsService, directionsRenderer) {

    directionsService.route({
        origin: {
            query: document.getElementById("start").value,
        }, destination: {
            query: document.getElementById("end").value,
        }, travelMode: window.google.maps.TravelMode.DRIVING,
    })
        .then((response) => {
            directionsRenderer.setDirections(response);
        })
        .catch((e) => window.alert("Directions request failed due to "));
}

export default calculateAndDisplayRoute;