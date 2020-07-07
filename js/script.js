
$(document).ready(function () {

    // Clona il menu
    $('.parent-dropdown').clone().appendTo('.menu-xs');


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
            $('.parent-dropdown').children('div').slideUp();

            if ($(this).hasClass('active')) {
                $('.parent-dropdown').removeClass('active');
                $(this).children('div').slideUp();
            } else {
                $('.parent-dropdown').removeClass('active');
                $(this).addClass('active')
                $(this).children('div').slideDown();
            }

        }
    });


    $('.hamburger').click(function () {
        $('.hamburger').toggleClass('hidden-xs');
        $('main').hide();

        // Apparire
        $('.menu-xs').toggleClass('active');
        $('header').toggleClass('hidden-xs');
        // $('header .inline-menu.left').toggleClass('hidden-xs');

        $('.parent-dropdown').toggleClass('hidden-xs');
    });

    $('.close').click(function () {
        $('.menu-xs').toggleClass('active');
        $('header').toggleClass('hidden-xs');
        $('header .inline-menu.left').toggleClass('hidden-xs');

        // Apparire
        $('main').show();
        $('.parent-dropdown').toggleClass('hidden-xs');

        $('.hamburger').toggleClass('hidden-xs');
    });

});
