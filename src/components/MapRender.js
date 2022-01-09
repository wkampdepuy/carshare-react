import React from "react";
import Wrapper, {Status} from './Wrapper'
import calculateAndDisplayRoute from './MapRoute'
import MapAutoComplete from "./MapAutoComplete";


const render = (status) => {
    if (status === Status.LOADING) return <p>Loading...</p>;
    if (status === Status.FAILURE) return <p>Error...</p>;
    return null;
};

export const MyMapComponent = () => {
    // console.log()
    const directionsService = new window.google.maps.DirectionsService();
    const directionsRenderer = new window.google.maps.DirectionsRenderer();

    const map = new window.google.maps.Map(document.getElementById("map"), {
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        center: {lat: 52.3676, lng: 4.9041},
        zoom: 8
    });

    directionsRenderer.setMap(map); // necessary?

    calculateAndDisplayRoute(directionsService, directionsRenderer)

    // initialize search autocomplete
    MapAutoComplete(map)

    return null;
};


const MapWrapper = () => {
    return (
        <Wrapper apiKey={process.env.REACT_APP_GOOGLE_MAPS_KEY} render={render}>
            <MyMapComponent/>
        </Wrapper>)
};

export default MapWrapper;
