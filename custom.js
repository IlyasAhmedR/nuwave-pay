
var multipleCardCarousel = document.querySelector("#carouselExampleControls");

if (window.matchMedia("(min-width: 576px)").matches) {
    var carousel = new bootstrap.Carousel(multipleCardCarousel, {
        interval: false
    });

    var carouselWidth = $(".carousel-inner")[0].scrollWidth;
    var cardWidth = $(".carousel-item").width();
    var scrollPosition = 0;

    // Handle the sliding to the next item
    $("#carouselExampleControls").on("slide.bs.carousel", function () {
        if (scrollPosition < carouselWidth - cardWidth * 2) {
            scrollPosition += cardWidth;
        } else {
            scrollPosition = 0;
        }
        $("#carouselExampleControls .carousel-inner").animate(
            { scrollLeft: scrollPosition },
            600
        );
    });

    // Handle the sliding to the previous item
    $("#carouselExampleControls .carousel-control-prev").on("click", function () {
        if (scrollPosition > 0) {
            scrollPosition -= cardWidth;
        } else {
            scrollPosition = carouselWidth - cardWidth * 2;
        }
        $("#carouselExampleControls .carousel-inner").animate(
            { scrollLeft: scrollPosition },
            600
        );
    });
} else {
    $(multipleCardCarousel).addClass("slide");
}



    function calculateRate() {
        var sales = parseFloat(document.getElementById("number1").value) || 0;
        var fees = parseFloat(document.getElementById("number2").value) || 0;

        var rate = (fees / sales) * 100;

        document.getElementById("rateResult").innerText = rate.toFixed(1) + "%";
        document.getElementById("monthlySavings").innerText = "$" + fees.toFixed(2);
        document.getElementById("yearlySavings").innerText = "$" + (fees * 12).toFixed(2);
        document.getElementById("fiveYearSavings").innerText = "$" + (fees * 12 * 5).toFixed(2);
    }
