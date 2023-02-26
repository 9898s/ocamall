$(() => {
    let notice = new Swiper(".header_box_03_inner", {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
    });

    let banner = new Swiper(".main_banner", {
        effect: "fade",
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
    });

    let focus = new Swiper(".focus_on_inner", {
        loop: true,
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 35,
        pagination: {
            clickable: true
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
    });

    let photo = new Swiper(".photo_review_inner", {
        loop: true,
        slidesPerView: 5,
        slidesPerGroup: 5,
        spaceBetween: 25,
        pagination: {
            clickable: true
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
    });

    $('.swiper-slide').hover(function () {
        banner.autoplay.stop();
        focus.autoplay.stop();
        photo.autoplay.stop();
    }, function () {
        banner.autoplay.start();
        focus.autoplay.start();
        photo.autoplay.start();
    });
});