function initMap() {
    let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: {
            lat: 55.860916,
            lng: -4.251433,
        }
    });
    let labels = "ABCDEFGHIJKLMNOPQRSTUVWYXZ";

    let locations = [
        { lat: 55.87751, lng: -4.2914007 },
        { lat: 55.8706124, lng: -4.3181257 },
        { lat: 55.8723885, lng: -4.2847306 }
    ];
    //the function below can take 3 arguments, need to find out what third argument can be
    let markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });
    let markerCluster = new MarkerClusterer(map, markers,
        { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}