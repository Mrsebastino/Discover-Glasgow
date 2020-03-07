const locations = [
    {
        lat: 55.87751, lng: -4.2914007,
        name: "Cail Bruich",
        category: "restaurant",
        website: "https://www.cailbruich.co.uk/"
    },

    {
        lat: 55.8706124, lng: -4.3181257,
        name: "Basta Pizza",
        category: "restaurant",
        website: "https://www.bastapizza.com/ "
    },

    {
        lat: 55.8723885, lng: -4.2847306,
        name: "Catch Fish & Chips",
        category: "restaurant",
        website: "https://catchfishandchips.co.uk/"
    },

    {
        lat: 55.8682991, lng: -4.2933792,
        name: "Brew Dog West End",
        category: "pub",
        website: "https://brewdog.com.co.uk/"
    },

    {
        lat: 55.8708818, lng: -4.2987629,
        name: "Lismore",
        category: "pub",
        website: "https://www.facebook.com/LismoreBar/?rf=118642888189238/"
    },

    {
        lat: 55.8609006, lng: -4.2585135,
        name: " The Horseshoe Bar",
        category: "pub",
        website: "https://www.thehorseshoebarglasgow.co.uk/"
    },

    {
        lat: 55.8685921, lng: -4.2927926,
        name: "The Kelvingrove Gallery",
        category: "culture",
        website: "https://www.glasgowlife.org.uk/museums/venues/kelvingrove-art-gallery-and-museum/"
    },

    {
        lat: 55.865106, lng: -4.3083949,
        name: "The Transport Museum",
        category: "culture",
        website: "https://www.glasgowlife.org.uk/museums/venues/riverside-museum/"
    },

    {
        lat: 55.8601344, lng: -4.2543698,
        name: "Gallery of Modern Art",
        category: "culture",
        website: "https://www.glasgowlife.org.uk/museums/venues/gallery-of-modern-art-goma/"
    },
];

// this section load the map
// taken from google developers
function initMap() {
    let infowindow = new google.maps.InfoWindow();
    let options = {
        center: new google.maps.LatLng(55.860916, -4.251433),
        zoom: 12
    };

    // this section of code is for the search bar
    // from the google maps developers 
    map = new google.maps.Map(document.getElementById("map"), options);
    let input = document.getElementById("search");
    let searchBox = new google.maps.places.SearchBox(input);

    //making sure searches are local
    map.addListener("bounds_changed", function () {
        searchBox.setBounds(map.getBounds());
    });

    //to see our search on the map
    let markers = [];

    searchBox.addListener("places_changed", function () {
        let places = searchBox.getPlaces();

        if (places.lenght === 0)
            return;

        // to clear any markers from previous search
        markers.forEach(function (marker) { marker.setMap(null); });
        markers = [];

        let bounds = new google.maps.LatLngBounds();

        // checking that places have a geometry to put on the map
        places.forEach(function (place) {
            if (!place.geometry)
                return;

            markers.push(new google.maps.Marker({
                map: map,
                title: place.name,
                position: place.geometry.location,
            }));

            if (place.geometry.viewport)
                bounds.union(place.geometry.viewport);
            else
                bounds.extend(place.geometry.location);
        });
        map.fitBounds(bounds);
    });

    //pass every location to place marker
    //locations.forEach(placeMarker);
    google.maps.event.addDomListener(window, 'load', initMap);

}

//show three choices from dropdown menu
function showChoices() {
    document.getElementById("myDropdown").classList.toggle("show");
}

//this section target my markers
function showMarkers(first, second, third) {
    let infowindow = new google.maps.InfoWindow();
    let marker1 = new google.maps.Marker({
        position: locations[first],
        animation: google.maps.Animation.DROP,
        map: map
    });

    google.maps.event.addListener(marker1, "click", function () {
        infowindow.setContent(`<div id="infowindow">${locations[first].name} <a href=${locations[first].website} target="_blank">Website</a></div >`);
        infowindow.open(map, marker1);
    });

    let marker2 = new google.maps.Marker({
        position: locations[second],
        animation: google.maps.Animation.DROP,
        map: map
    });

    google.maps.event.addListener(marker2, "click", function () {
        infowindow.setContent(`<div id="infowindow">${locations[second].name} <a href=${locations[second].website} target="_blank">Website</a></div >`);
        infowindow.open(map, marker2);
    });

    let marker3 = new google.maps.Marker({
        position: locations[third],
        animation: google.maps.Animation.DROP,
        map: map
    });

    google.maps.event.addListener(marker3, "click", function () {
        infowindow.setContent(`<div id="infowindow">${locations[third].name} <a href=${locations[third].website} target="_blank">Website</a></div >`);
        infowindow.open(map, marker3);
    });
}

