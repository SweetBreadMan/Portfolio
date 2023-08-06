$(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 60) {
            $('header').addClass('fixed');
            $('.up-btn').addClass('fixed');
        } else {
            $('header').removeClass('fixed');
            $('.up-btn').removeClass('fixed');
        }
    })
    $('.hamburger-btn').click(function(){
        $('.fa-bars').toggle();
        $('.fa-xmark').toggle();
        $('nav').toggle();
    })
})