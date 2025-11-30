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

    
    // Price Range Filter
	var priceslider = function(){
		if($("#slider-tooltips").length > 0 ) {
			var tooltipSlider = document.getElementById('slider-tooltips');
			
			var formatForSlider = {
				from: function (formattedValue) {
					return Number(formattedValue);
				},
				to: function(numericValue) {
					return Math.round(numericValue);
				}
			};

			noUiSlider.create(tooltipSlider, {
				start: [0, 400],
				connect: true,
				format: formatForSlider,
				tooltips: [wNumb({decimals: 1}), true],
				range: {
					'min': 0,
					'max': 400
				}
			});
			var formatValues = [
				document.getElementById('slider-margin-value-min'),
				document.getElementById('slider-margin-value-max')
			];
			tooltipSlider.noUiSlider.on('update', function (values, handle, unencoded) {
				formatValues[0].innerHTML = "Από: " + values[0] + "€";
				formatValues[1].innerHTML = "Έως: " + values[1] + "€";
			});
		}
	}
    
    
    jQuery(document).ready(function() {
        priceslider();
    });

    
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



   // Series Filter
    var filterTab = function () {
        var $btnFilter = $('.btns-filter').click(function() {
        if (this.id == 'all') {
            $('#parent > div').show();
        } else {
            var $el = $('.' + this.id).show();
            $('#parent > div').not($el).hide();
        }
        $btnFilter.removeClass('is--active');
        $(this).addClass('is--active');
        })
    };
    filterTab();




    


    
    // scroll to top
    $(window).scroll(function () {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            $("#scroll-top").addClass('active');
        } else {
            $("#scroll-top").removeClass('active');
        }
    });

    $("#scroll-top").on('click', function () {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
    

    
    // Preloader
    $(window).on('load', function (event) {
        $('.loader-screen').delay(500).addClass('loaded');
      });
    
})(jQuery);