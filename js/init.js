(function ($) {
    "use strict"
    // WOW INIT
    if ($('.wow').length) {
    new WOW().init();
    }

    // EasyZoom INIT
    if ($('.easyzoom').length) {
        var $easyzoom = $('.easyzoom').easyZoom();
    }





    // Search Filters INIT
    var swiper = new Swiper(".search-filters .swiper", {
      slidesPerView: "auto",
      spaceBetween: 10,
      navigation: {
        nextEl: ".search-next",
        prevEl: ".search-prev",
      },
    });

    // Product/Blog Swiper Slider INIT
    const prodSlider = ()=>{
      let prodSliders = document.querySelectorAll('.vitrina-product')
      let prevArrow = document.querySelectorAll('.vitrina-prev')
      let nextArrow = document.querySelectorAll('.vitrina-next')
      prodSliders.forEach((slider, index)=>{
        const swiper = new Swiper(slider, {
          slidesPerView: 1.2,
          spaceBetween: 25,
          navigation: {
            // the 'index' bit below is just the order of the class in the queryselectorAll array, so the first one would be NextArrow[0] etc
            nextEl: nextArrow[index],
            prevEl: prevArrow[index],
          },
          breakpoints: {
            768: {
              slidesPerView: 3,
            },
            992: {
              slidesPerView: 4,
            },
            1200: {
              slidesPerView: 4,
            },
            1400: {
              slidesPerView: 5,
            },
            1400: {
              slidesPerView: 6,
            },
          }
        });	
      })
    }
    window.addEventListener('load', prodSlider)

})(jQuery);