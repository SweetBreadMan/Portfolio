$(function(){
  /* GNB All Button */
  $('.btn-gnb').click(function(){
    $('.gnb-all').show();
  })
  $('.btn-close').click(function(){
    $('.gnb-all').hide();
  })
  $('section').click(function(){
    $('.gnb-all').hide();
  })

  /* Navigation Scroll Fixed */
  $(window).scroll(function(){
    if($(window).scrollTop() > 625){
      $('nav').addClass('fixed');
      $('body').css({'padding-top': '65px'});
      $('.lnb-wrapper').hide();
      $('.btn-gnb').css({'width':'100%'});
      $('.btn-gnb h4').hide();
      $('.logo-scrolled').show();
      $('.wing-menu').addClass('fixed');
    } else {
      $('nav').removeClass('fixed');
      $('body').css({'padding-top': '0'});
      $('.lnb-wrapper').show();
      $('.btn-gnb').css({'width':'195px'});
      $('.btn-gnb h4').show();
      $('.logo-scrolled').hide();
      $('.wing-menu').removeClass('fixed');
    }
  })

  /* Intro Main Slider */
  $('.intro-slider-items').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    arrows: false,
    fade: true,
    cssEase: 'linear'
  });

  /* Heart */
  $('.heart').click(function(){
    $(this).toggleClass('active');
  })

  /* Hot Time Countdown */
  $('.timer').countdown("2023/09/01", function(e){
    $(this).text(e.strftime('%D일 %H시간 %M분 %S초'));
  })

  /* Hot Items Slider */
  $('.hot-items-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
  });

  /* Category Tab */
  $('.btn-tab').click(function(){
    const activeTab = $(this).attr('data-tab');
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    $('.category-tab').removeClass('active');
    $('#' + activeTab).addClass('active');
  })

  /* Go To Top */
  $('.btn-top').click(function(){
    $('html, body').animate({scrollTop: 0}, 500)
  })
})