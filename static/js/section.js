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
                $("#section2 #slide2 .person1").addClass("animated slideInDown").show()
                $("#section2 #slide2 .person2").addClass("animated slideInUp").show()
                $("#section2 #slide2 .name").addClass("animated slideInUp").show()
            }
            if (index == 2 && slideIndex == 2) {
                $("#section2 #slide3 .person1").addClass("animated slideInDown").show()
                $("#section2 #slide3 .person2").addClass("animated slideInUp").show()
                $("#section2 #slide3 .name").addClass("animated slideInUp").show()
            }
            if (index == 2 && slideIndex == 3) {
                $("#section2 #slide4 .person1").addClass("animated slideInDown").show()
                $("#section2 #slide4 .person2").addClass("animated slideInUp").show()
                $("#section2 #slide4 .name").addClass("animated slideInUp").show()
            }
            if (index == 2 && slideIndex == 4) {
                $("#section2 #slide5 .person1").addClass("animated slideInDown").show()
                $("#section2 #slide5 .person2").addClass("animated slideInUp").show()
                $("#section2 #slide5 .name").addClass("animated slideInUp").show()
            }
            if (index == 2 && slideIndex == 5) {
                $("#section2 #slide6 .person1").addClass("animated slideInDown").show()
                $("#section2 #slide6 .person2").addClass("animated slideInUp").show()
                $("#section2 #slide6 .name").addClass("animated slideInUp").show()
            }
        }
    });

    setTimeout(function() {
        $(".hand").hide();
        $("#section1").append('<img class="animated bounceInDown board" src="static/img/section/section1/section1-board.png" />')

    }, 2000)
})