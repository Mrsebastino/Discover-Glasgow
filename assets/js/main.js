
$(document).ready(function () {
    //this is to have more information displayed when we click on the button
    // the if/else acted as the media queries for mobile view inpired from w3 school
    $("#moreFoodButton").click(function () {
        let rest_cont_detail = window.matchMedia("(min-width:768px)");
        if (window.matchMedia("(min-width:768px)").matches) {
            $(".restaurantDetails,.recommendedRestaurant").toggle(1000);
        } else {
            $(".restaurantDetails,.recommendedRestaurant").toggle(1000);
        };
    });
    $("#moreDrinkButton").click(function () {
        let pub_cont_detail = window.matchMedia("(min-width:768px)");
        if (window.matchMedia("(min-width:768px)").matches) {
            $(".pubDetails, .recommendedPubs").toggle(1000);
        } else {
            $(".pubDetails,.recommendedPubs").toggle(1000);
        };
    });
    $("#moreArtButton").click(function () {
        let cult_cont_detail = window.matchMedia("(min-width:768px)");
        if (window.matchMedia("(min-width:768px)").matches) {
            $(".cultureDetails, .recommendedCulture").toggle(1000);
        } else {
            $(".cultureDetails,.recommendedCulture").toggle(1000);
        };
    });

    // allow us to view better on small screen
    // the navbar was hiding the button of each section
    $('.navbar-collapse a').click(function () {
        $(".navbar-collapse").collapse('hide');
    });

})

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
















