// =====================================================
//      Detail slider
// =====================================================

var detailSlider = new Swiper('.detail-slider', {
    slidesPerView: 3,
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    breakpoints: {
        991: {
            slidesPerView: 4
        },
        565: {
            slidesPerView: 3
        }
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

var bookingDetailSlider = new Swiper('.booking-detail-slider', {
    slidesPerView: 2,
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// =====================================================
//      Init swipers automatically
// =====================================================

$('.swiper-init').each(function () {

    var slider = $(this),
        configuration = JSON.parse($(this).attr('data-swiper'));

    new Swiper(slider, configuration);
});

// =====================================================
//      Items slider
// =====================================================

var itemsSlider = new Swiper('.items-slider', {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    roundLengths: true,
    breakpoints: { 
        1200: {
            slidesPerView: 3
        },
        991: {
            slidesPerView: 2
        },
        565: {
            slidesPerView: 1
        }
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },
});



var itemsSliderFull = new Swiper('.items-slider-full', {
    slidesPerView: 6,
    spaceBetween: 20,
    loop: true,
    roundLengths: true,
    breakpoints: {
        1600: {
            slidesPerView: 5
        },
        1400: {
            slidesPerView: 4
        },
        1200: {
            slidesPerView: 3
        },
        991: {
            slidesPerView: 2
        },
        565: {
            slidesPerView: 1
        }
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },
});

var guidesSlider = new Swiper('.guides-slider', {
    slidesPerView: 5,
    spaceBetween: 15,
    loop: true,
    roundLengths: true,
    breakpoints: {
        1200: {
            slidesPerView: 4
        },
        991: {
            slidesPerView: 3
        },
        768: {
            slidesPerView: 2
        },
        400: {
            slidesPerView: 1
        }
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },
});

var brandsSlider = new Swiper('.brands-slider', {
    slidesPerView: 6,
    spaceBetween: 15,
    loop: true,
    roundLengths: true,
    breakpoints: {
        1200: {
            slidesPerView: 4
        },
        991: {
            slidesPerView: 3
        },
        768: {
            slidesPerView: 2
        }
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },
});

var swiper = new Swiper('.hero-slider', {
    effect: 'fade',
    speed: 2000,
    allowTouchMove: false,
    autoplay: {
        delay: 10000,
    },
});

var instagramSlider = new Swiper('.instagram-slider', {
    slidesPerView: 12,
    breakpoints: {
        1500: {
            slidesPerView: 10
        },
        1200: {
            slidesPerView: 8
        },
        991: {
            slidesPerView: 6
        },
        768: {
            slidesPerView: 5
        },
        576: {
            slidesPerView: 4
        }
    }
});

var testimonialsSlider = new Swiper('.testimonials-slider', {
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
    roundLengths: true,
    breakpoints: {
        1200: {
            slidesPerView: 3,
            spaceBetween: 0
        },
        991: {
            slidesPerView: 2,
            spaceBetween: 0
        },
        565: {
            slidesPerView: 1
        }
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },
});
