$(function () {
  // Search-bar Show & Hide
  $('.search').click(function () {
    $('.xbox-logo, .header-top-nav, .header-top-right').hide();
    $('.search-bar').show();
  })

  $('.cancel-button').click(function () {
    $('.xbox-logo, .header-top-nav, .header-top-right').show();
    $('.search-bar').hide();
  })
  // 메뉴 이외의 공간 클릭시 메뉴 닫힘
  $(document).mouseup(function (e) {
    if ($('.search-bar').has(e.target).length === 0) {
      $('.search-bar').hide();
      $('.xbox-logo, .header-top-nav, .header-top-right').show();
    }
  })

  // Lnb Show & Hide
  $('.header-top-title').click(function () {
    if ($(this).siblings('.header-top-lnb').css('visibility') == 'visible') {
      $(this).siblings('.header-top-lnb').css({
        'visibility': 'hidden',
        'opacity': '0'
      });
      $(this).css('background-color', 'transparent');
    } else {
      $(this).siblings('.header-top-lnb').css({
        'visibility': 'visible',
        'opacity': '1'
      });
      $(this).parent('li').siblings('li').children('.header-top-lnb').css({
        'visibility': 'hidden',
        'opacity': '0'
      });
      $(this).parent('li').siblings('li').children('.header-top-title').css('background-color', 'transparent');
      $(this).css('background-color', '#1a1a1a');
    }
  })
  // 메뉴 이외의 공간 클릭시 메뉴 닫힘
  $(document).mouseup(function (e) {
    if ($('.header-top.lnb, .header-top-gnb').has(e.target).length === 0) {
      $('.header-top-lnb').css({
        'visibility': 'hidden',
        'opacity': '0'
      });
      $('.header-top-title').css('background-color', 'transparent');
    }
  })

  $('.all-button-gnb').children('li').children('span').click(function () {
    if ($('.all-button-lnb').is(':visible')) {
      $('.all-button-lnb').hide();
      $('.all-button-title').css('background-color', 'transparent');
    } else {
      $('.all-button-lnb').show();
      $('.all-button-title').css('background-color', '#1a1a1a');
    }
  })
  // 메뉴 이외의 공간 클릭시 메뉴 닫힘
  $(document).mouseup(function (e) {
    if ($('.all-button-lnb, .all-button-gnb').has(e.target).length === 0) {
      $('.all-button-lnb').hide();
      $('.all-button-title').css('background-color', 'transparent');
    }
  })

  // Header bottom fixed
  $(window).scroll(function () {
    if ($(window).scrollTop() > 60) {
      $('.header-bottom').addClass('fixed');
    } else {
      $('.header-bottom').removeClass('fixed');
    }
  })

  // Slick.js game list slider
  $('.about-game-slider').slick({
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    dots: false,
    arrows: true,
    autoplay: false,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });

  // Video control
  var video = $('.sample').get(0);
  var video_button = $('.video').children('button');
  var video_button_icon = $('.video').children('button').children('i');

  video_button.click(function () {
    if (video_button_icon.hasClass('fa-regular fa-pause')) {
      video_button_icon.attr('class', 'fa-regular fa-play');
      video.pause();
    } else {
      video_button_icon.attr('class', 'fa-regular fa-pause');
      video.play();
    }
  })

  // Slick.js benefit slider
  $('.benefit-slider').slick({
    centerMode: true,
    centerPadding: '400px',
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true
  })

  $('.res-benefit-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    fade: true,
    dots: false,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  })

  // FAQ menu hide / show
  $('.faq-item-button').click(function () {
    $(this).siblings('div').toggleClass('faq-active');
    $(this).toggleClass('down');
  })


  // ################## Responsive ######################

  // Responsive hamburger trigger
  $('.hamburger-button').click(function () {
    $(this).toggleClass('active');
    $('.res-header-top-nav').toggleClass('active');
    $('.res-header-mid-nav').removeClass('active');
    $('.res-header-mid-logo').removeClass('up');
    $('.res-header-bottom-gnb').removeClass('active');
    // when hamburger close remove res-header-top class
    $('.res-header-top-lnb').removeClass('active');
    $('.res-header-top-menu').children('span').removeClass('up');
  })

  // Responsive header nav show & hide
  $('.res-header-mid-logo').click(function () {
    $(this).toggleClass('up');
    $('.res-header-mid-nav').toggleClass('active');
    $('.res-header-mid-menu').children('span').removeClass('up');
    $('.res-header-mid-lnb').removeClass('active');
    $('.res-header-mid-lnb').children('ul').removeClass('active');
    $('.lnb-sub').removeClass('up');
    $('.res-header-bottom-gnb').removeClass('active');
  })

  $('.res-header-menu').click(function () {
    $(this).next('.res-header-lnb').toggleClass('active');
    $(this).children('span').toggleClass('up');
  })

  $('.res-header-mid-lnb').children('li').click(function () {
    $(this).next('ul').toggleClass('active');
    $(this).toggleClass('up');
  })

  $('.res-header-bottom-nav').children('span').click(function () {
    $('.res-header-bottom-gnb').toggle();
  })

  $(document).mouseup(function (e) {
    if ($('.hamburger-button, .res-header-top-nav').has(e.target).length === 0) {
      $('.hamburger-button').removeClass('active');
      $('.res-header-top-nav').removeClass('active');
    }
    if ($('.res-header-mid-logo, .res-header-mid-nav').has(e.target).length === 0) {
      $('.res-header-mid-nav').removeClass('active');
      $('.res-header-mid-logo').removeClass('up');
    }
    if ($('.res-header-bottom-nav > span, .res-header-bottom-gnb').has(e.target).length === 0) {
      $('.res-header-bottom-gnb').removeClass('active');
    }
  })

  $(window).scroll(function () {
    if ($(window).scrollTop() > 159) {
      $('.res-header-bottom').addClass('fixed');
    } else {
      $('.res-header-bottom').removeClass('fixed');
    }
  })
})