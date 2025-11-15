(function ($) {
    "use strict"

    
    /*== Page Content ==*/
    $(window).on("load", function () {
        if ($(".page-content").height() < $(window).height()) {
            $(".page-content").css("min-height", $(window).height() - $("header").height() - $("footer").height())
        }
    });


    // Header Sticky
    $(window).bind('scroll', function () {
        if (($('body').outerHeight()) > ($(window).outerHeight() + 150)){
            if ($(window).scrollTop() > 130) {
                $('.navibar').addClass('is-sticky');
            } else {
                $('.navibar').removeClass('is-sticky');
            }
        } else {
            $('.navibar').removeClass('is-sticky');
        }
    });

    // Overlays activation
    let $overlayActive = '';
    $(".overlay-btn").on("click", function () {
        if (($(this).attr('rel') == 'overlaySearch') && ($(window).outerWidth() > 1599)) {
            $('.header-search').toggleClass('active-desk-search');
            $(this).toggleClass('active-desk-search')
        } else {
            $overlayActive = $(this).attr('rel');
            $("#" + $overlayActive).addClass('show');
            $(".overlay-bg").addClass('show');
            $('html,body').addClass('overflow-hidden');
        }
    })
    $(".overlay-close, .overlay-bg").on("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        $("#" + $overlayActive).removeClass('show')
        $(".overlay-bg").removeClass('show');
        $('html,body').removeClass('overflow-hidden');
        $overlayActive = '';
    })


    // Password input - show/hide password
    $('.pass-icon').click(function(){
        $(this).toggleClass("show-pass");
        var type = $(this).hasClass("show-pass") ? "text" : "password";
        $(".pass-input input").attr("type", type);

    });

    // Register Form company info input - show/hide
    if ($('.user-type-selector').length){
        $('.user-type-selector').change(function(){
            if ($("#user_company").is(':checked')){
                $('.company-info').removeClass('d-none');
            } else {
                $('.company-info').addClass('d-none');
            }
    
        });
    }


    
    // Form input helper - show/hide
    $('.form-note').click(function(){
        $(this).toggleClass("active");
    });



    // Overlay menu
    function OverlayrMenu() {
        // Mobile menu
        $( ".menu-item" ).on("click", function() {
            var desiredHeight = $(window).height() - 100;
            if (!($(this).hasClass('level-3-menu'))){
                $(this).addClass('active-menu');
                $('.submenu').animate({
                    scrollTop: $('.submenu').offset().top - desiredHeight
                }, 0);
                console.log($('.submenu').offset().top - 100);
                $(this).parent().addClass('overflow-hidden');
            } 
        });
        $(".submenu-title").click(function(e) {
            e.preventDefault();
            e.stopPropagation();
            $(this).closest('.menu-item').removeClass('active-menu');
            $(this).parent().parent().parent().removeClass('overflow-hidden');
        });
        $( ".overlay-close, .overlay-bg" ).on("click", function() {
            $('.menu-item').each(function(){
                if ($(this).hasClass('active-menu')) {
                    $(this).removeClass('active-menu');
                    $('.submenu').removeClass('overflow-hidden');
                }
            });
        });
    }
    $(document).ready(OverlayrMenu);





    // Product quantity
    const productQuantity = (selector) => {
        $(selector).each(function() {
            const $element = $(this);
            const $quantityInput = $element.find(".quantity-input");
            $element.find(".quantity-input").on("click", (e) => {
                e.preventDefault();
            });
            $element.find(".increase").on("click", (e) => {
                e.preventDefault();
                $quantityInput.val((i, val) => +val + 1);
            });
    
            $element.find(".decrease").on("click", (e) => {
                e.preventDefault();
                $quantityInput.val((i, val) => (val > 1 ? val - 1 : val));
            });
        });
    };
    
    if($(".product-quantity").length) productQuantity(".product-quantity");
    
    
    
})(jQuery);