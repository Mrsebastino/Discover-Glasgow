const locations = [
    {
        coords: { lat: 55.87751, lng: -4.2914007 },
        content: `<h6>Cail Bruich</h6>
        website: "https://www.cailbruich.co.uk/"`

    },

    {
        coords: { lat: 55.8706124, lng: -4.3181257 },
        content: `<h6>Basta Pizza</h6>`,
        locator: "#mapBasta",
        website: "https://www.bastapizza.com/ "
    },

    {
        coords: { lat: 55.8723885, lng: -4.2847306 },
        content: `<h6>Catch Fish and Chips</h6>`,
        website: "https://catchfishandchips.co.uk/"
    },

    {
        coords: { lat: 55.8682991, lng: -4.2933792 },
        content: `<h6>Brew Dog West End</h6>`,
        website: "https://brewdog.com.co.uk/"
    },

    {
        coords: { lat: 55.8708818, lng: -4.2987629 },
        content: `<h6>Lismore</h6>`,
        website: "https://www.facebook.com/LismoreBar/?rf=118642888189238/"
    },

    {
        coords: { lat: 55.8609006, lng: -4.2585135 },
        content: `<h6>The Horseshoe Bar</h6>`,
        website: "https://www.thehorseshoebarglasgow.co.uk/"
    },

    {
        coords: { lat: 55.8685921, lng: -4.2927926 },
        content: `<h6>The Kelvingrove Gallery</h6>`,
        website: "https://www.glasgowlife.org.uk/museums/venues/kelvingrove-art-gallery-and-museum/"
    },

    {
        coords: { lat: 55.865106, lng: -4.3083949 },
        content: `<h6>The Transport Museum</h6>`,
        website: "https://www.glasgowlife.org.uk/museums/venues/riverside-museum/"
    },

    {
        coords: { lat: 55.8601344, lng: -4.2543698 },
        content: `<h6>Gallery of Modern Art</h6>`,
        website: "https://www.glasgowlife.org.uk/museums/venues/gallery-of-modern-art-goma/"
    },
];

// load the map onto our page
function initMap() {
    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: new google.maps.LatLng(55.860916, -4.251433)
    });

    // loop through marker
    for (let i = 0; i < locations.length; i++) {
        // add marker
        placeMarker(locations[i]);
    }

    // define the marker
    function placeMarker(props) {
        let marker = new google.maps.Marker({
            position: props.coords,
            map: map
        });

        //Check content
        if (props.content) {
            let infowindow = new google.maps.InfoWindow({
                content: props.content
            });


            // event that display the infowindow
            marker.addListener("click", function () {
                infowindow.open(map, marker);
            });
        }

        /* add some info in infowindow   
        let infowindow = new google.maps.InfoWindow();
        google.maps.event.addListener(marker, "click", function () {
            infowindow.setContent(`<div id="infowindow">${locations.name} <a href=${locations.website} target="_blank">Website</a></div >`);
            infowindow.open(map, marker);
        });*/

        /*need to build an if statement to work with locator
        $("#mapBasta").click(function (e) {
            google.maps.event.trigger("#mapBasta", "click");
            infowindow.setContent(`<div id="infowindow">${locations.name} <a href=${locations.website} target="_blank">Website</a></div >`);
            infowindow.open(map, marker);
        });*/

    }


    google.maps.event.addDomListener(window, 'load', initMap);
}

setTimeout(function () {
    google.maps.event.trigger("#mapBasta", "click");
}, 1000);
