$(function(){
  /* Loaded */
  const headline = document.querySelector('.intro-headline');
  headline.classList.add('loaded');

  /* ######## Header Color Change & Go To Top Button Fade ######## */
  $(window).scroll(function(){
    const $aboutTop = $('#about').position().top;
    if ($(window).scrollTop() >= $aboutTop) {
      $('header, .logo h4, .btn-trigger span').addClass('change');
      $('.gototop').addClass('scroll');
    } else {
      $('header, .logo h4, .btn-trigger span').removeClass('change');
      $('.gototop').removeClass('scroll');
    }
  })

  /* ######## Intro Mouse Move Event ######## */
  const intro = document.querySelector('#intro');

  function backgroundRotate(e) {
    const ImgClientX = (e.clientX * -1 / 50);
    const ImgClientY = (e.clientY * -1 / 50);
    const rotateX = e.clientY / 100;
    const rotateY = e.clientX / 98;
    
    intro.style.backgroundPosition = `${ImgClientX}px ${ImgClientY}px`;
    headline.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY - 10}deg)`;
  }

  intro.addEventListener('mousemove', backgroundRotate);

  /* ######## Scroll Events ######## */
  const sections = document.querySelectorAll('section');

  // About Fade
  function aboutFade() {
    const aboutDetail = document.querySelector('.about-detail');
    const aboutPhoto = document.querySelector('.about-photo');
    aboutDetail.classList.add('fade-in-side');
    aboutPhoto.classList.add('fade-in-side');
  }

  // Skill Fade
  function skillFade() {
    const skillItems = document.querySelectorAll('.skill-items');
    skillItems.forEach((item, i) => {
      item.classList.add('fade-in');
      skillItems[0].classList.add('first-in');
      skillItems[1].classList.add('second-in');
      skillItems[2].classList.add('third-in');
    })
  }

  // Education Fade
  function eduFade() {
    const eduItems = document.querySelectorAll('.education-item');
    eduItems.forEach((item) => {
      item.classList.add('fade-in');
    })
  }

  const options = {
    // observer가 실행되기 위한 타겟의 가시성 백분율
    threshold: 0.3,
  }

  const io = new IntersectionObserver((sections) => {
    sections.forEach((section, i) => {
      const sectionId = section.target.id;
      
      if(section.isIntersecting) {
        if(sectionId === 'about') {
          aboutFade();
        } else if(sectionId === 'skill') {
          skillFade();
        } else if(sectionId === 'education') {
          eduFade();
        }
      }
    })
  }, options)

  
  sections.forEach((section) => {
    io.observe(section);
  })

  /* ######## Btn Trigger ######## */
  $('.btn-trigger').click(function(){
    $(this).toggleClass('active');
    $('body, header, .overlay, .logo h4').toggleClass('active');
  })

  /* ######## Anchor ######## */
  $('.gnb a, .btn-view-project, .btn-down').click(function (e) {
    const linkLocation = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(linkLocation).offset().top
    }, 500);
    e.preventDefault();
    $('body, header, .btn-trigger, .overlay, .logo h4').removeClass('active');
  })
  $('.gototop').click(function(){
    $('html, body').animate({scrollTop: 0}, 500)
  })
})