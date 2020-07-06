
$(document).ready(function () {
    $('.parent-dropdown').mouseenter(function () {
        $(this).children('div').show();
    });

    $('.parent-dropdown').mouseleave(function () {
        $(this).children('div').hide();
    });

});
