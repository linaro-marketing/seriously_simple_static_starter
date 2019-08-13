$(function(){
    $(".scroll").click(
        function(){
            $("html,body").animate({
                scrollTop:0
            },"1000");
            return false
        }
    );
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.scrolltop:hidden').stop(true, true).fadeIn();
        } else {
            $('.scrolltop').stop(true, true).fadeOut();
        }
    });
    $(window).on('load', function() {
        // get all <code> elements
        var allCodeBlocksElements = $(".highlighter-rouge > div");
        allCodeBlocksElements.each(function(i) {
            // add different id for each code block
            // target
            var currentId = "codeblock" + (i + 1);
            $(this).attr('id', currentId);
            //trigger
            var clipButton = '<button data-toggle="tooltip" data-placement="left" title="Copied to Clipboard" class="btn" data-clipboard-target="#' + currentId + '"> <i aria-hidden="true" class="icon-clipboard"></i></button>';
                $(this).append(clipButton);
        });
        var cb = new Clipboard('.highlighter-rouge .btn');
        cb.on('success', function(e) {
            var codeBlockId = e.trigger.getAttribute("data-clipboard-target");
            $('button[data-clipboard-target="' + codeBlockId + '"]').tooltip("show");
        });
    });
});
$(document).ready(function () {
    $('.carousel').carousel({
        interval: 8000,
        pause: "hover"
    });
    var toggleAffix = function (affixElement, scrollElement, wrapper) {

        var height = affixElement.outerHeight(),
            top = wrapper.offset().top;

        if (scrollElement.scrollTop() >= 1) {
            affixElement.addClass("affix");
        }
        else {
            affixElement.removeClass("affix");
        }
    };

    $('[data-toggle="affix"]').each(function () {
        var ele = $(this),
            wrapper = $('#main_container');
        $(window).on('scroll resize', function () {
            toggleAffix(ele, $(this), wrapper);
        });
        // init
        toggleAffix(ele, $(window), wrapper);
    });
    // Slider Blocks from the flow layout
    if ($(".owl-carousel.slider-block").length > 0) {
        $(".owl-carousel.slider-block").each(function(index) {
            // Set Default values for the responsive items
            var xs_items = 1;
            var sm_items = 2;
            var xs_items = 3;
            var lg_items = 4;
            var seconds_per_slide = 5000;
            var dots = false;
            var nav = true;

            if (typeof $(this).data("xs-number") !== "undefined") {
            var xs_items = $(this).data("xs-number");
            }
            if (typeof $(this).data("sm-number") !== "undefined") {
            var sm_items = $(this).data("sm-number");
            }
            if (typeof $(this).data("md-number") !== "undefined") {
            var md_items = $(this).data("md-number");
            }
            if (typeof $(this).data("lg-number") !== "undefined") {
            var lg_items = $(this).data("lg-number");
            }
            if (typeof $(this).data("seconds-per-slide") !== "undefined") {
            var seconds_per_slide = $(this).data("seconds-per-slide") * 1000;
            }
            if (typeof $(this).data("dots") !== "undefined") {
            var dots = $(this).data("dots");
            }
            if (typeof $(this).data("nav") !== "undefined") {
            var nav = $(this).data("nav") * 1000;
            }

            $(this).owlCarousel({
                nav: nav,
                dots: dots,
                slideSpeed: 300,
                autoplayTimeout: seconds_per_slide,
                rewindSpeed: 500,
                rewind: true,
                autoplay: true,
                responsiveClass: true,
                lazyLoad: true,
                lazyLoadEager: 0,
                responsive: {
                    // breakpoint from 0 up
                    0: {
                    items: xs_items
                    },
                    // breakpoint from 480 up
                    1000: {
                    items: sm_items
                    },
                    // breakpoint from 768 up
                    1200: {
                    items: md_items
                    },
                    1400: {
                    items: lg_items
                    }
                }
            });
        });
    }
    // End Slider block instantiation
});
