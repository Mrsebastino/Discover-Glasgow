$(document).ready(function () {

    $(".restaurant-container").click(function () {
        $(".restaurantDetails,.recommendedRestaurant").toggle();
    });
    $(".pub-container").click(function () {
        $(".pubDetails, .recommendedPubs").toggle();
    });
    $(".culture-container").click(function () {
        $(".cultureDetails, recommendedPubs").toggle();
    });

});
