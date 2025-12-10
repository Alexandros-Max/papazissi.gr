(function ($) {
    "use strict"
    // WOW INIT
    if ($('.wow').length) {
    new WOW().init();
    }



    /*== Product Image Zoom ==*/
    function isTouchEnabled() { return !!document.createTouch; }
    if ($('.zoom-image-hover').length && (isTouchEnabled) && ($(window).outerWidth() > 1199)) {
        $('.zoom-image-hover').zoom();
    }


   


    // Hero Slider INIT
    var swiper = new Swiper(".hero-section-1 .hero-swiper", {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      navigation: {
        nextEl: ".hero-next",
        prevEl: ".hero-prev",
      },
    });

    




    
    // Author Slider INIT
    var swiper = new Swiper(".photo-gallery", {
      slidesPerView: 4,
      spaceBetween: 32,
      navigation: {
        nextEl: ".gallery-next",
        prevEl: ".gallery-prev",
      },
      breakpoints: {
          0: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          992: {
            slidesPerView: 4,
          },
      },
    });


    // Search Filters INIT
    var swiper = new Swiper(".search-filters .swiper", {
      slidesPerView: "auto",
      spaceBetween: 10,
      navigation: {
        nextEl: ".search-next",
        prevEl: ".search-prev",
      },
    });


    // Product Single Gallery
    const ProductThumb = new Swiper(".product-single-thumb .swiper", {
      spaceBetween: 16,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
      // Breakpoints
      breakpoints: {
          0: {
              spaceBetween: 8,
          },
          768: {
              spaceBetween: 16,
          },
      },
    });
    const ProductSingle = new Swiper(".product-single-slide .swiper", {
      spaceBetween: 20,
      navigation: {
          nextEl: ".product-single-thumb .swiper-button-next",
          prevEl: ".product-single-thumb .swiper-button-prev",
      },

      thumbs: {
          swiper: ProductThumb,
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
            1400: {
              slidesPerView: 4,
            },
            1400: {
              slidesPerView: 5,
            },
          }
        });	
      })
    }
    window.addEventListener('load', prodSlider);


    


    // Author Slider INIT
    const AuthorThumb = new Swiper(".author-vitrina-thumb-swiper", {
      spaceBetween: 32,
      slidesPerView: 1,
      loop: true,
    });
    
    const AuthorSingle = new Swiper(".author-vitrina", {
      effect: "cards",
      grabCursor: true,
      speed: 500,
      cardsEffect:{
        rotate: true,
        perSlideRotate: 5,
        slideShadows: true,
      },
      mousewheel: {
        invert: false,
      },
      navigation: {
        nextEl: ".author-next",
        prevEl: ".author-prev",
      },
      thumbs: {
          swiper: AuthorThumb,
      },
    });


    // Author Slider INIT
    var swiper = new Swiper(".author-vitrina-signle-swiper", {
      slidesPerView: 2.4,
      spaceBetween: 32,
      navigation: {
        nextEl: ".author2-next",
        prevEl: ".author2-prev",
      },
    });


})(jQuery);