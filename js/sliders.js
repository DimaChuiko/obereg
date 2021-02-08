$(document).ready(function() {
    $('.slider').slick({
        arrows: true,
        dots: false
    });
    $('.slider1').slick({
        dots: false
    });
    $(".slider1").on('afterChange', function(event, slick, currentSlide) {
        $("#cp").text(currentSlide + 1);
    });
    $('.slider2').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [{
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    });
    $('.slider3').slick({
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.slider4').slick({
        arrows: false,
        autoplay: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.slider5').slick({
        arrows: true,
        dots: false
    });
});