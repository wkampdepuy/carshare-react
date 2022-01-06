$(function () {
    $('[data-toggle="popover"]').popover()
    $('[data-toggle="tooltip"]').tooltip()
})

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

$('#contact-form-button').click(function (event) {
    submit_form()
});

function submit_form() {
    var form = $('#contact-form');
    var form_id = 'contact-form';
    var url = form.prop('action');
    var type = form.prop('method');
    var formData = getContactFormData(form_id);


    // submit form via AJAX
    send_form(form, form_id, url, type, modular_ajax, formData);
}


$('.search_box').change(function (event) {

    calcRoute()

    // setTimeout(function () {
    //
    //     document.getElementById('contact-form-button').click();
    //
    // }, 1000);
    var el = document.getElementById('kilometers')
    el.dispatchEvent(new Event('change'))

});


//
// $('.map').heading_changed(function (event) {
//
//     calcRoute()
//     var form = $('#contact-form');
//     var form_id = 'contact-form';
//     var url = form.prop('action');
//     var type = form.prop('method');
//     var formData = getContactFormData(form_id);
//
//     // console.log(formData)
//
//     // submit form via AJAX
//     send_form(form, form_id, url, type, modular_ajax, formData);
// });


function getContactFormData(form) {
    // creates a FormData object and adds chips text
    var formData = new FormData(document.getElementById(form));
//    for (var [key, value] of formData.entries()) { console.log('formData', key, value);}
    return formData
}

function send_form(form, form_id, url, type, inner_ajax, formData) {
    // form validation and sending of form items

    if (form[0].checkValidity() && isFormDataEmpty(formData) == false) { // checks if form is empty
        event.preventDefault();

        // inner AJAX call
        inner_ajax(url, type, formData);

    } else {
        // first, scan the page for labels, and assign a reference to the label from the actual form element:
        var labels = document.getElementsByTagName('LABEL');
        for (var i = 0; i < labels.length; i++) {
            if (labels[i].htmlFor != '') {
                var elem = document.getElementById(labels[i].htmlFor);
                if (elem) elem.label = labels[i];
            }
        }

        // then find all invalid input elements (form fields)
        var Form = document.getElementById(form_id);
        var invalidList = Form.querySelectorAll(':invalid');

        if (typeof invalidList !== 'undefined' && invalidList.length > 0) {
            // errors were found in the form (required fields not filled out)

            // for each invalid input element (form field) return error
            for (var item of invalidList) {
                // alert(item)
                // M.toast({html: "Please fill the " + item.label.innerHTML + "", classes: 'bg-danger text-white'});
            }
        } else {
            // alert("error")
            // M.toast({html: "Another error occured, please try again.", classes: 'bg-danger text-white'});
        }
    }
}


function isFormDataEmpty(formData) {
    // checks for all values in formData object if they are empty
    for (var [key, value] of formData.entries()) {
        if (key != 'csrf_token') {
            if (value != '' && value != []) {
                return false;
            }
        }
    }
    return true;
}


function modular_ajax(url, type, formData) {
    // Most simple modular AJAX building block
    $.ajax({
        url: url, type: type, data: formData, processData: false, contentType: false, beforeSend: function () {
            // show the preloader (progress bar)
            $('#form-response').html("<div class='progress'><div class='indeterminate'></div></div>");
        }, complete: function () {
            // hide the preloader (progress bar)
            $('#form-response').html("");
        }, success: function (data) {
            if (!$.trim(data.table_json)) { // response from Flask is empty
                toast_error_msg = "An empty response was returned.";
                toast_category = "danger";
            } else { // response from Flask contains elements
                // document.getElementById("result-table").innerHTML = data.table


                // let cheapest_option = JSON.parse(data.firstLine)
                //
                // document.getElementById("cheapest-service").innerHTML = cheapest_option.Service
                // document.getElementById("cheapest-sub").innerHTML = cheapest_option["Subscription"]
                // document.getElementById("cheapest-plan").innerHTML = cheapest_option["Plan"]
                // document.getElementById("cheapest-car").innerHTML = cheapest_option["Car type"]
                // document.getElementById("cheapest-cost").innerHTML = cheapest_option["Total cost"]
                //

                // document.getElementById("test").innerHTML = IsJsonString(data.table_json)
                //remove old table
                $("#testBody tr").remove();
                loadTableData(JSON.parse(data.table_json))

                // document.getElementById("test").innerHTML = data.table_json
            }
        }, error: function (xhr) {
            console.log("error. see details below.");
            console.log(xhr.status + ": " + xhr.responseText);
        },
    }).done(function () {
        // M.toast({html: 'errortoast', classes: 'bg-' + toast_category + ' text-white'});
    });
};


function loadTableData(items) {
    const table = document.getElementById("testBody");
    items.forEach(item => {
        let row = table.insertRow();
        let Service = row.insertCell(0);
        Service.innerHTML = item["Service"];
        let Subscription = row.insertCell(1);
        Subscription.innerHTML = item["Subscription"];
        let Plan = row.insertCell(2);
        Plan.innerHTML = item["Plan"];
        let car_type = row.insertCell(3);
        car_type.innerHTML = item["Car type"];
        let cost = row.insertCell(4);

        total_cost = new Intl.NumberFormat("en-US", {
            style: "currency", currency: "EUR", minimumFractionDigits: 2,
        }).format(item["Total cost"])

        cost.innerHTML = total_cost;
    });
}

function initMap() {
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    const map = new google.maps.Map(document.getElementById("map"), {
        mapId: "f52349dfd4255a78",
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        zoom: 8, center: {lat: 52.3676, lng: 4.9041},
    });

    directionsRenderer.setMap(map);

    initAutocomplete();


}

function calcRoute() {
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();

    const map = new google.maps.Map(document.getElementById("map"), {
        mapId: "f52349dfd4255a78",
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        zoom: 8, center: {lat: 52.3676, lng: 4.9041},
    });

    directionsRenderer.setMap(map);

    initAutocomplete();

    calculateAndDisplayRoute(directionsService, directionsRenderer);

    calcDist();

    map.addListener("tilesloaded", () => {
        document.getElementById('contact-form-button').click();
    });
}

//
function calculateAndDisplayRoute(directionsService, directionsRenderer) {
    directionsService
        .route({
            origin: {
                query: document.getElementById("start").value,
            }, destination: {
                query: document.getElementById("end").value,
            }, travelMode: google.maps.TravelMode.DRIVING,
        })
        .then((response) => {
            directionsRenderer.setDirections(response);
        })
        .catch((e) => window.alert("Directions request failed due to " + status));
}

function initAutocomplete() {
    document.querySelectorAll('.search_box').forEach(item => {
        // Create the search box and link it to the UI element.

        const searchBox = new google.maps.places.SearchBox(item);

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
            const bounds = new google.maps.LatLngBounds();

            places.forEach((place) => {
                if (!place.geometry || !place.geometry.location) {
                    console.log("Returned place contains no geometry");
                    return;
                }

                const icon = {
                    url: place.icon,
                    size: new google.maps.Size(71, 71),
                    origin: new google.maps.Point(0, 0),
                    anchor: new google.maps.Point(17, 34),
                    scaledSize: new google.maps.Size(25, 25),
                };

                // Create a marker for each place.
                markers.push(new google.maps.Marker({
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


function calcDist() {
    const service = new google.maps.DistanceMatrixService();
    // build request
    const request = {
        origins: [document.getElementById("start").value],
        destinations: [document.getElementById("end").value],
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.METRIC,
        avoidHighways: false,
        avoidTolls: false,
    };

    // get distance matrix response
    service.getDistanceMatrix(request).then((response) => {
        // put response
        document.getElementById("kilometers").value = JSON.stringify(Math.round(response["rows"][0]["elements"][0]["distance"]["value"] / 1000), "error", 2);
        document.getElementById("minutes").value = JSON.stringify(Math.round(response["rows"][0]["elements"][0]["duration"]["value"] / 60), "error", 2);
    });
}

