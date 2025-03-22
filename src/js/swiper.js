(function () {
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        spaceBetween: 20,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 800,
        effect: "fade",
        fadeEffect: {
            crossFade: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },
    });
})();

