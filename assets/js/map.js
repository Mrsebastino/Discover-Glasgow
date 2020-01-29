function initMap() {
    let mapOptions = {
        zoom: 8,
        center: new google.maps.LatLng(55.87751, -4.2914007),
        mapTypeId: 'roadmap'
    };
    let map = new google.maps.Map(document.getElementById('map'), mapOptions);

    let cailBruichPosition = { lat: 55.87751, lng: -4.2914007 };
    let marker = new google.maps.Marker({
        position: cailBruichPosition,
        map: map,
        title: 'Cail Bruich'
    });

    let contentString = `<div id="content"><h1>Cail Bruich</h1><p>Cail Bruich has been one thekbhhj hgjh 
     it stillmlm lkjlkl ihiooi</p></div>`;

    let infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });

}

/*function initMap() {
    let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: {
            lat: 55.860916,
            lng: -4.251433,
        }
    });

    let labels = "ABCDEFGHIJKLMNOPQRSTUVWYXZ";

    let locations = [
        { name: 'Cail Bruich', lat: 55.87751, lng: -4.2914007 },
        { lat:'Basta Pizza', 55.8706124, lng: -4.3181257 },
        { lat:'Catch of the Day',55.8723885, lng: -4.2847306, },
    ];

    //the function below can take 3 arguments, need to find out what third argument can be
    let markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length],
        });

    });
    let markerCluster = new MarkerClusterer(map, markers,
        { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });

}*/

