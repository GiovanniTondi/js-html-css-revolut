
$(document).ready(function () {
    $('.parent-dropdown').mouseenter(function () {
        if (!$('.menu-xs').hasClass('active')) {
            $(this).children('div').show();
        }
    });

    $('.parent-dropdown').mouseleave(function () {
        if (!$('.menu-xs').hasClass('active')) {
            $(this).children('div').hide();
        }
    });

    $('.parent-dropdown').click(function () {
        if ($('.menu-xs').hasClass('active')) {
            $(this).children('div').toggle();
        }
    });


    $('.hamburger').click(function () {
        $('.hamburger').toggleClass('hidden-xs');


        $('.menu-xs').toggleClass('active');
        $('header').toggleClass('hidden-xs');
        $('header .inline-menu.left').toggleClass('hidden-xs');
    });

    $('.close').click(function () {
        $('.menu-xs').toggleClass('active');
        $('header').toggleClass('hidden-xs');
        $('header .inline-menu.left').toggleClass('hidden-xs');


        $('.hamburger').toggleClass('hidden-xs');
    });

});
