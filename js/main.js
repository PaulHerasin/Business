$(document).ready(function () {
    var mySwiper = new Swiper('.swiper-container', {
        slidesPerView: 2,
        spaceBetween: 40,
        slidesPerGroup: 2,
        speed: 500,
        loop: true,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        breakpoints: {

            1200: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 20,
            },
        },

    })
});

$(document).ready(function () {
    $('.main-btn-link').click(function () {
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({
                scrollTop: $(scroll_el).offset().top
            }, 1000);
        }
        return false;
    });
});


$('.js-button-campaign').click(function () {
    $(".js-popup-campaign").fadeToggle(100);
});

$('.js-close-campaign').click(function () {
    $('.js-popup-campaign').fadeOut();
});



$(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
        $('.top-header').addClass('scroll');
    } else {
        $('.top-header').removeClass('scroll')
    }
});
