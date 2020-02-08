$(document).ready(function () {
    //this is to have more information displayed when we click on button
    // one is general info and one is a top 3
    // the if/else acted as the media queries for mobile view
    $("#more-food").click(function () {
        let rest_cont_detail = window.matchMedia("(min-width:768px)");
        if (window.matchMedia("(min-width:768px)").matches) {
            $(".restaurantDetails,.recommendedRestaurant").toggle(1000);
        } else {
            $(".recommendedRestaurant").toggle(1000);
        };
    });
    $(".pub-container").click(function () {
        let pub_cont_detail = window.matchMedia("(min-width:768px)");
        if (window.matchMedia("(min-width:768px)").matches) {
            $(".pubDetails, .recommendedPubs").toggle(1000);
        } else {
            $(".recommendedPubs").toggle(1000);
        };
    });
    $(".culture-container").click(function () {
        let cult_cont_detail = window.matchMedia("(min-width:768px)");
        if (window.matchMedia("(min-width:768px)").matches) {
            $(".cultureDetails, .recommendedCulture").toggle(1000);
        } else {
            $(".recommendedCulture").toggle(1000);
        };
    });

    $("#mapBasta").click(function () {

    });

});


