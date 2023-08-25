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
const timer = document.querySelectorAll('.timer');

function day() {
  const saleMs = new Date('2023-10-25T00:00:00').getTime();
  const currentMs = new Date().getTime();
  const diffTime = saleMs - currentMs;
  const dDay = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const dDayHours = String(Math.floor((diffTime / (1000 * 60 * 60)) % 24)).padStart(2, '0');
  const dDayMin = String(Math.floor((diffTime / (1000 * 60)) % 60)).padStart(2, '0');
  const dDaySec = String(Math.floor((diffTime / 1000 % 60))).padStart(2, '0');
  
  for(let item of timer) {
    item.innerText = `${dDay}일 ${dDayHours}시간 ${dDayMin}분 ${dDaySec}초`;
  }
}
day();
setInterval(day, 1000);

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