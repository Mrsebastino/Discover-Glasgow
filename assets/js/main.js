$(document).ready(function () {
    //this is to have more information displayed when we click on button
    // one is general info and one is a top 3
    $(".restaurant-container").click(function () {
        $(".restaurantDetails,.recommendedRestaurant").toggle();
    });
    $(".pub-container").click(function () {
        $(".pubDetails, .recommendedPubs").toggle();
    });
    $(".culture-container").click(function () {
        $(".cultureDetails, .recommendedCulture").toggle();
    });

    $("#mapBasta").click(function () {
        $("#mapBasta").css("background-color", "pink");
    });
});

