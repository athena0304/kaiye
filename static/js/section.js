$(document).ready(function() {
    $('#fullpage').fullpage({
        verticalCentered: false,
        scrollOverflow: true,
        afterLoad: function(anchorLink, index){
            if(index == 2){
                $("#section2 #slide1 .person1").addClass("animated slideInDown").show()
                $("#section2 #slide1 .person2").addClass("animated slideInUp").show()
                $("#section2 #slide1 .name").addClass("animated slideInUp").show()
            }
        },

        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {
            var loadedSlide = $(this);

            //first slide of the second section
            if (index == 2 && slideIndex == 1) {
                console.log("asdasdasdasd")
                $("#section2 #slide2 .person1").addClass("animated slideInDown").show()
                $("#section2 #slide2 .person2").addClass("animated slideInUp").show()
                $("#section2 #slide2 .name").addClass("animated slideInUp").show()

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

    }, 2000)
})