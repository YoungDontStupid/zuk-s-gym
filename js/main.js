const swiper = new Swiper(".swiper", {
    // эффект перелистывания
    effect: "fade",
    pagination: {
        el: ".swiper-pagination",
    },
    // перелистывание каждые 3 секунды
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    }
});