$(document).ready(function () {

    $(".restaurant-container").click(function () {
        $(".restaurantDetails,.recommendedRestaurant").toggle();
    });
    $(".pub-container").click(function () {
        $(".pub-details").toggle();
    });
    $(".culture-container").click(function () {
        $(".culture-details").toggle();
    });

});
