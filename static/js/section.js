$(document).ready(function() {
    $('#fullpage').fullpage({
        verticalCentered: false,
        scrollOverflow: true,
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {
            var loadedSlide = $(this);

            //first slide of the second section
            if (index == 2 && slideIndex == 1) {
                alert("First slide loaded");
            }

            //second slide of the second section (supposing #secondSlide is the
            //anchor for the second slide
            // if(index == 2 && slideIndex == 'secondSlide'){
            //     alert("Second slide loaded");
            // }
        }
    });

    setTimeout(function() {
        $(".hand").hide();
        $("#section1").append('<img class="animated bounceInDown board" src="static/img/section/section1/section1-board.png" />')

    }, 3000)
})