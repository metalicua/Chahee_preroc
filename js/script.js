'use strict';

$('.js-tabs a').on('click', function () {
    var tab_class = $(this).attr('data-tab');

    $('.js-span').removeClass('isactive');
    $('.js-div-active').removeClass('js-div-active').addClass('js-div-notactive');
    $(this).addClass('list__link--active').siblings().removeClass('list__link--active');
    $(this).find('span').addClass('isactive').siblings().removeClass('isactive');
    $('.js-box').find( "." + tab_class ).addClass('js-div-active').siblings().removeClass('js-div-active');
})