/*global $*/
$('.information .info-lest li').click(function () {
    "use strict";
    $(this).addClass('active').siblings('li').removeClass('active');
    $('.info-content div').hide();
    $('.' + $(this).data('class')).fadeIn();
   
});