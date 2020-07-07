
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

    $('.parent-dropdown').click(function () {

        if ($('.inline-menu.active').css('flex-direction') == 'column') {
            $('.parent-dropdown').children('div').slideUp();
            $('.parent-dropdown .fas').removeClass('fa-chevron-up').addClass('fa-chevron-down');

            if ($(this).hasClass('active')) {
                $('.parent-dropdown').removeClass('active');
                $(this).children('div').slideUp();
            } else {
                $('.parent-dropdown').removeClass('active');
                $(this).addClass('active')
                $(this).children('div').slideDown();
                $('.parent-dropdown.active .fas').toggleClass('fa-chevron-down fa-chevron-up');
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
