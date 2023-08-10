$(function(){
  /* Header Color Change & Go To Top Button Fade */
  $(window).scroll(function(){
    if ($(window).scrollTop() > 70) {
      $('header, .logo h4, .btn-trigger span').addClass('change');
      $('.gototop').fadeIn();
    } else {
      $('header, .logo h4, .btn-trigger span').removeClass('change');
      $('.gototop').fadeOut();
    }
  })

  /* Btn Trigger */
  $('.btn-trigger').click(function(){
    $(this).toggleClass('active');
    $('body, header, .overlay').toggleClass('active');
  })

  /* Anchor */
  $('.gnb a, .btn-view-project, .btn-down').click(function (e) {
    const linkLocation = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(linkLocation).offset().top
    }, 500);
    e.preventDefault();
    $('body, header, .btn-trigger, .overlay').removeClass('active');
  })
  $('.gototop').click(function(){
    $('html, body').animate({scrollTop: 0}, 500)
  })
})