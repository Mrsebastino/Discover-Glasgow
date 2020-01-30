const locations = [
    { lat: 55.87751, lng: -4.2914007, name: "Cail Bruich", website: "https://www.cailbruich.co.uk/" },
    { lat: 55.8706124, lng: -4.3181257, name: "Basta Pizza", website: "https://www.bastapizza.com/ " },
    { lat: 55.8723885, lng: -4.2847306, name: "Catch Fish & Chips", website: "https://catchfishandchips.co.uk/" },
];

function initMap() {
    const infowindow = new google.maps.InfoWindow();
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: new google.maps.LatLng(55.860916, -4.251433)
    });

    function placeMarker(loc) {
        const marker = new google.maps.Marker({
            position: new google.maps.LatLng(loc.lat, loc.lng),
            map: map
        });

        google.maps.event.addListener(marker, 'click', function () {
            infowindow.close();
            infowindow.setContent(`<div id="infowindow">${loc.name}<a href=${loc.website} target="_blank">Website</a></div >`);
            infowindow.open(map, marker);
        });
    }

    locations.forEach(placeMarker);

    function goToLocation(locationIndex) {
        let location = locations[locationIndex];/*from here we zoom on location, and open the window, moved it init map*/
        alert(location)
    }

}

function goToLocation(locationIndex) {
    let location = locations[locationIndex];/*from here we zoom on location, and open the window, moved it init map*/
    alert(location)
}


/*google.maps.event.addDomListener(window, 'load', initMap);*/
