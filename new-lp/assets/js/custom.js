$(window).width() <= 992 && 0 != ".portfolio-slider".length && 
($(".portfolio-slider").addClass("owl-carousel owl-theme"), 
$(".portfolio-slider").owlCarousel({
    loop:false,
    margin:0,
    nav:false,
    dots:false,
    slideTransition: 'linear',
    responsive:{
        0: {
            items:1,
            dots:true
        },
        400: {
            items:2,
            dots:true
        },
        576: {
            items: 2,
            dots:true
            
        }
    }
}));

$('.pricing-cards').owlCarousel({
    loop:false,
    margin:30,
    nav:false,
    dots:true,
    slideTransition: 'linear',
    responsive:{
        0: {
            items: 1
        },
        576: {
            items: 1,
            dots:true
            
        },
        768: {
            items: 2,
            dots:true
            
        },
        992: {
            items: 2,
            dots:true
            
        },
        1200: {
            items: 3,
            dots:true
        },
        1400: {
            items:3,
            dots:true
        }

    }
});


$('.awards-slider').owlCarousel({
    loop:false,
    margin:0,
    nav:false,
    dots:false,
    slideTransition: 'linear',
    responsive:{
        0: {
            items: 1,
            dots:true
        },
        576: {
            items: 3,
            dots:true
            
        },
        768: {
            items: 4,
            dots:true
            
        },
        992: {
            items: 5,
            dots:true
            
        },
        1200: {
            items: 6
        },
        1400: {
            items:6
        }

    }
});


$('.offer-slider').owlCarousel({
    loop:false,
    margin:30,
    nav:false,
    dots:false,
    slideTransition: 'linear',
    responsive:{
        0: {
            items: 1,
            dots:true
        },
        576: {
            items: 2,
            dots:true
            
        },
        768: {
            items: 3,
            dots:true
            
        },
        992: {
            items: 3,
            dots:true
            
        },
        1200: {
            items: 4
        },
        1400: {
            items:4
        }

    }
});


$(window).width() <= 992 && 0 != ".box-slider".length && 
($(".box-slider").addClass("owl-carousel owl-theme"), 
$(".box-slider").owlCarousel({
    loop:false,
    margin:0,
    nav:false,
    dots:false,
    slideTransition: 'linear',
    responsive:{
        0: {
            items:2,
            dots:true
        },
        400: {
            items:3,
            dots:true
            
        },
        576: {
            items: 3,
            dots:true
            
        },
        768: {
            items: 4
            
            
        }
    }
}));