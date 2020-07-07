
$(document).ready(function () {

    $('.parent-dropdown').mouseenter(function () {
        if (!$('.inline-menu').hasClass('active')) {
            $(this).children('div').show();
        }
    });

    $('.parent-dropdown').mouseleave(function () {
        if (!$('.inline-menu').hasClass('active')) {
            $(this).children('div').hide();
        }
    });

    $('.parent-dropdown').click(function () {
        if ($('.inline-menu').hasClass('active')) {
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
        $('.hamburger .fas').toggleClass('fa-bars fa-times');

        $('.jumbo').toggleClass('hidden-xs');
        $('.logo').toggleClass('hidden-xs');

        // Apparire
        $('nav .inline-menu').toggleClass('active');
        $('header').toggleClass('hidden-xs');

        $('.parent-dropdown').toggleClass('hidden-xs');
    });


});
