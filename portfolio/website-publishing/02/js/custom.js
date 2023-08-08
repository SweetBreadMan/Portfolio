$(function(){
  /* Scroll Events */
  $(window).scroll(function(){
    if($(window).scrollTop() > 90){
      $('header').addClass('active');
      $('.gototop').fadeIn();
    } else {
      $('header').removeClass('active');
      $('.gototop').fadeOut();
    }
  })

  /* Accordion */
  $('.accordion-title').eq(0).addClass('active');
  $('.accordion-content').eq(0).show();

  $('.accordion-title').click(function(){
    $(this).addClass('active');
    $(this).siblings('.accordion-title').removeClass('active');
    $(this).next().slideDown();
    $(this).siblings('.accordion-title').next().slideUp();
  })

  /* Mouse Follow Circle */
  $('.process-list-items').mousemove(function(e){
    const $cursor = $('.cursor');

    $cursor.css({
      'visibility': 'visible',
      'opacity': 1,
      'top': e.clientY - 15,
      'left': e.clientX - 15
    })
    $('.process-list-items').mouseleave(function(e){
      $cursor.css({
      'visibility': 'hidden',
      'opacity': 0,
      'top': e.clientY - 15,
      'left': e.clientX - 15
      })
    })
  })

  /* Go To Top */
  $('.gototop').click(function(){
    $('html, body').animate({scrollTop: 0}, 500)
  })

  /* Mobile jQuery */
  /* Side Nav */
  $('.btn-trigger').click(function(){
    $('body').addClass('active');
    $('.nav').addClass('active');
    $('.overlay').fadeIn();
  })
  $('.overlay, .btn-close').click(function(){
    $('body').removeClass('active');
    $('.nav').removeClass('active');
    $('.overlay').fadeOut();
  })

})