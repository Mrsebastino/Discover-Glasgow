const locations = [
    {
        lat: 55.87751, lng: -4.2914007,
        name: "Cail Bruich",
        website: "https://www.cailbruich.co.uk/"
    },

    {
        lat: 55.8706124, lng: -4.3181257,
        name: "Basta Pizza",
        website: "https://www.bastapizza.com/ "
    },

    {
        lat: 55.8723885, lng: -4.2847306,
        name: "Catch Fish & Chips",
        website: "https://catchfishandchips.co.uk/"
    },
];

function initMap() {
    let infowindow = new google.maps.InfoWindow();
    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: new google.maps.LatLng(55.860916, -4.251433)
    });

    function placeMarker(location) {
        let marker = new google.maps.Marker({
            position: new google.maps.LatLng(location.lat, location.lng),
            map: map
        });

        google.maps.event.addListener(marker, "click", function () {
            infowindow.setContent(`<div id="infowindow">${location.name}<a href=${location.website} target="_blank">Website</a></div >`);
            infowindow.open(map, marker);
        });
    }


    /* pass every location to place marker*/
    locations.forEach(placeMarker);

    google.maps.event.addDomListener(window, 'load', initMap);
};
/*allow us to zoom to the location on the map
function goToLocation(locationIndex) {
    let location = locations[locationIndex];
    document.getElementById("mapBasta").addEventListener("click", function () {
        return location[1];
    });*/
/*let infowindow = new google.maps.InfoWindow();
document.getElementById("mapBasta"),
infowindow.open(map, location, [1]);*/


