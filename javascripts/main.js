$(document).ready(function () {
    $('.see_player').mouseover(function () {
        $('.long_button').removeClass('long_btn').addClass('long_btn_1');
    }).mouseout(function () {
        $('.long_button').removeClass('long_btn_1').addClass('long_btn');
    });
    $('.fan_packages').mouseover(function () {
        $('.long_button').removeClass('long_btn').addClass('long_btn_2');
    }).mouseout(function () {
        $('.long_button').removeClass('long_btn_2').addClass('long_btn');
    });
});