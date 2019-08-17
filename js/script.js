/* =================================
        PRELOADER
==================================== */
$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});

/* =================================
             TEAM
==================================== */
$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            480: {
                items: 2
            }
        }
    });
});
/* =================================
        Responsive Tabs
==================================== */
$(function () {

    $("#sessions-tabs").responsiveTabs({
        animation: 'slide'
    });
});
/* =================================
        Responsive Tabs
==================================== */
$(function () {

    $("#gallery-items").magnificPopup({
        delegate: 'a', //child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

/* =================================
            Partners
==================================== */
$(function () {
    $("#partners-list").owlCarousel({
        items: 4,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 2
            },
            // breakpoint from 480 up
            480: {
                items: 3
            },
            // breakpoint from 768 up
            480: {
                items: 4
            }
        }
    });
});

/* =================================
          Navigation
==================================== */
$(function () {

    // show/hide nav on page load
    showHideNav();

    $(window).scroll(function () {

        // show/hide nav on window's load
        showHideNav();

    });

    function showHideNav() {
        if ($(window).scrollTop() > 50) {

            // Show white nav
            $("nav").addClass("white-nav-top");

            // Show back to top button
            $("#back-to-top").fadeIn();

        } else {

            // Hide white nav
            $("nav").removeClass("white-nav-top");

            // Hide back to top button
            $("#back-to-top").fadeOut();
        }

    }
});

// Smooth Scrolling
$(function () {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();

        //get section id like About, Sessions, Team,etc.
        var section_id = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(section_id).offset().top - 64
        }, 1250, "easeInOutExpo");
    });

});

/* =================================
          Animation
==================================== */
// animate on scroll
$(function () {
    new WOW().init();
});

$(window).on('load', function () {

    $("#home-heading-1").addClass("animated fadeInDown");
    $("#home-heading-2").addClass("animated fadeInLeft");
    $("#home-text").addClass("animated zoomIn");
    $("#home-btn").addClass("animated zoomIn");
    $("#arrow-down i").addClass("animated fadeInDown infinite");
});

/* =================================
          Mobile Menu
==================================== */
$(function () {

    // Show mobile nav
    $("#mobile-nav-open-btn").click(function () {
        $("#mobile-nav").css("height", "100%");
    });

    // Hide mobile nav
    $("#mobile-nav-close-btn, #mobile-nav a").click(function () {
        $("#mobile-nav").css("height", "0%");
    });
});