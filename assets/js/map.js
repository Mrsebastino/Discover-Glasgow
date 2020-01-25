function initMap() {
    let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: {
            lat: 55.860916,
            lng: -4.251433,
        }
    });
    /* code to have info window*/
    /* var contentString = '<div id="content">' +
         '<div id="siteNotice">' +
         '</div>' +
         '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
         '<div id="bodyContent">' +
         '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
         'sandstone rock formation in the southern part of the ' +
         'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) ' +
         'south west of the nearest large town, Alice Springs; 450&#160;km ' +
         '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major ' +
         'features of the Uluru - Kata Tjuta National Park. Uluru is ' +
         'sacred to the Pitjantjatjara and Yankunytjatjara, the ' +
         'Aboriginal people of the area. It has many springs, waterholes, ' +
         'rock caves and ancient paintings. Uluru is listed as a World ' +
         'Heritage Site.</p>' +
         '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
         'https://en.wikipedia.org/w/index.php?title=Uluru</a> ' +
         '(last visited June 22, 2009).</p>' +
         '</div>' +
         '</div>';
 
     var infowindow = new google.maps.InfoWindow({
         content: contentString
     });*/

    /* var marker = new google.maps.Marker({
         position: uluru,
         map: map,
         title: 'Uluru (Ayers Rock)'
     });*/

    let labels = "ABCDEFGHIJKLMNOPQRSTUVWYXZ";

    let locations = [
        { lat: 55.87751, lng: -4.2914007 },
        { lat: 55.8706124, lng: -4.3181257 },
        { lat: 55.8723885, lng: -4.2847306 },
        { lat: -25.3456562, lng: 131.0196362 }
    ];
    //the function below can take 3 arguments, need to find out what third argument can be
    let markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });

        /*marker.addListener('click', function () {
              infowindow.open(map, marker);
          }); part of the info window code*/

    });
    let markerCluster = new MarkerClusterer(map, markers,
        { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}