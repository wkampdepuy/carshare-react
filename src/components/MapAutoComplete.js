function MapAutoComplete(map) {
    document.querySelectorAll('.search_box').forEach(item => {

        // Create the search box and link it to the UI element.
        const searchBox = new window.google.maps.places.SearchBox(item);

        let markers = [];

        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        item.addEventListener("places_changed", () => {
            const places = searchBox.getPlaces();

            if (places.length == 0) {
                return;
            }

            // Clear out the old markers.
            markers.forEach((marker) => {
                marker.setMap(null);
            });
            markers = [];

            // For each place, get the icon, name and location.
            const bounds = new window.google.maps.LatLngBounds();

            places.forEach((place) => {
                if (!place.geometry || !place.geometry.location) {
                    console.log("Returned place contains no geometry");
                    return;
                }

                const icon = {
                    url: place.icon,
                    size: new window.google.maps.Size(71, 71),
                    origin: new window.google.maps.Point(0, 0),
                    anchor: new window.google.maps.Point(17, 34),
                    scaledSize: new window.google.maps.Size(25, 25),
                };

                // Create a marker for each place.
                markers.push(new window.google.maps.Marker({
                    map, icon, title: place.name, position: place.geometry.location,
                }));
                if (place.geometry.viewport) {
                    // Only geocodes have viewport.
                    bounds.union(place.geometry.viewport);
                } else {
                    bounds.extend(place.geometry.location);
                }
            });
            map.fitBounds(bounds);
        });
    })
}


export default MapAutoComplete