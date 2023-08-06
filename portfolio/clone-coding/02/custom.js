$(function () {
  // Scroll Evnet
  $(window).scroll(function () {
    if ($(window).scrollTop() > 2700) {
      $('.callaction-img').addClass('active');
    } else if ($(window).scrollTop() > 300) {
      $('.download').addClass('active');
    } else {
      $('.download').removeClass('active');
    }
  })
  // Sitemap Slide
  $('.link-item-title').click(function () {
    $(this).next().slideToggle('fast');
    $(this).toggleClass('active');
  })
  // Mobile Side Menu Open
  $('.hamburger').click(function () {
    $('.overlay').show();
    $('.hamburger').addClass('active');
    $('body').css({overflow: 'hidden'});
  })
  $('.btn-close, .overlay').click(function () {
    $('.overlay').hide();
    $('.hamburger').removeClass('active');
    $('body').css({overflow: ''});
  })
  // Mobile Side Menu Dropdown
  $('.btn-dropdown').click(function () {
    $(this).toggleClass('active');
    $(this).next().slideToggle('fast');
    $(this).parent().siblings().children('.side-menu-dropdown').slideUp();
  })
})