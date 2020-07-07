
$(document).ready(function () {

    $('.parent-dropdown').mouseenter(function () {
        if ($('.inline-menu.active').css('flex-direction') != 'column') {
            $(this).children('div').show();
        }
    });

    $('.parent-dropdown').mouseleave(function () {
        if ($('.inline-menu.active').css('flex-direction') != 'column') {
            $(this).children('div').hide();
            $('.parent-dropdown').removeClass('active');
        }
    });

    $('.parent-dropdown > a').click(function () {

        if ($('.inline-menu.active').css('flex-direction') == 'column') {
            $('.parent-dropdown > a').next('div').slideUp();
            $('.parent-dropdown .fas').removeClass('rotate180');

            if ($(this).hasClass('active')) {
                $('.parent-dropdown a').removeClass('active');
                $(this).next('div').slideUp();
            } else {
                $('.parent-dropdown a').removeClass('active');
                $(this).addClass('active')
                $(this).next('div').slideDown();
                $('.parent-dropdown a.active .fas').toggleClass('rotate180');
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
