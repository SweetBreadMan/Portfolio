$(function(){
  /* Include & Include HTML jQuery Apply*/
  function headerControl() {
    $('.btn-trigger').click(function(){
      $(this).toggleClass('active');
      $('.gnb-outer-mobile').stop().slideToggle(300);
      $('.gnb-outer-mobile .dropdown').stop().slideUp();
    });
    $('.gnb-outer-mobile .gnb li > a').click(function(e){
      $(this).siblings('.dropdown').stop().slideToggle(300);
    });
    $('section').click(function(){
      $('.btn-trigger').removeClass('active');
      $('.gnb-outer-mobile').stop().slideUp(300);
      $('.gnb-outer-mobile .dropdown').stop().slideUp();
    })
  }
  $('.header-include').load('../include/header.html',function(){
    headerControl();
  })
  headerControl();
  $('.footer-include').load('../include/footer.html');

  /* Scroll Events */
  $(window).scroll(function(){
    if($(window).scrollTop() > 95){
      $('header').css({'box-shadow' : '0 0 5px rgba(0, 0, 0, 0.2)'});
      $('.gototop').fadeIn();
    } else {
      $('header').css({'box-shadow' : 'none'});
      $('.gototop').fadeOut();
    }
  });

  /* License Lightbox */
  var $imgSrc = $('.license-item a');
  var $overlay = $('.lightbox-overlay');
  var $overlayImg = $overlay.find('img');

  $imgSrc.click(function(e){
    var $zoomSrc = $(this).attr('href');
    $overlay.addClass('active');
    $overlayImg.attr('src', $zoomSrc);

    e.preventDefault();
  });
  $overlay.click(function(){
    $(this).removeClass('active');
  });

  /* Go To Top */
  $('.btn-gototop').click(function(){
    $('html, body').animate({scrollTop: 0}, 500);
  });

  // Place the code below at the bottom
  /* AOS JS Init */
  AOS.init();

  /* Main-Slider Slick Slider PC */
  $('.main-slider-items').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    useTransform: false,
    dots: false,
    arrows: true
  });

  /* AOS JS Refresh */
  AOS.refresh();
})