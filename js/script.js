$(document).ready(function() {

    // carousel
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    // end

    $("html").scroll(function(){
        if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 132 && window_width >= 1025){
			$(".header_fixed").addClass("head_fixed");
		} else {
			$(".header_fixed").removeClass("head_fixed");
		}
    });

    
});