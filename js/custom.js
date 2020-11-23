$(document).ready(function () {
  // Mobile Nav-bar
  $('.the-toggler').click(function () {
    $('nav').toggle();
    $('.overlay').toggle();
    $(this).toggleClass('close-sign');
  });

  // Drop Down List
  $('.drop-down').click(function () {
    if (window.innerWidth < 1200) {
      $('.drop-down ul').fadeOut('fast');
      $(this).children('ul').slideToggle()
    }
  });

  // Hide Mobile Nav-bar When Resize
  $(window).resize(function () {
    if (window.innerWidth > 1199) {
      $('.drop-down ul').hide();
      $('.the-toggler').removeClass('close-sign');
      $(".overlay").hide();
      $("nav").show();
    }
    if (window.innerWidth < 1200) {
      $("nav").hide();
    }
  });

  // Show Go To Top Icon
  if ($(window).scrollTop() > 100) {
    $(".go-to-top").fadeIn();
  } else {
    $(".go-to-top").fadeOut();
  }
  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
      $(".go-to-top").fadeIn();
    } else {
      $(".go-to-top").fadeOut();
    }
  });
  // Clients Swiper
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    breakpoints: {
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 5,
      }
    },
    autoplay: {
      delay: 2000,
    }
  });

  // Portfolio Section
  $('.portfolio-box').hover(function () {
    $(this).find('.portfolio-box-text').animate({
      bottom: '40px'
    })
  }, function () {
    $(this).find('.portfolio-box-text').animate({
      bottom: '-100%'
    })
  });

  // Project Swiper
  var swiper = new Swiper('.swiper-container2', {
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // Count Numbers
  $(".count").each(function () {
    $(this).prop("Counter", 0).animate({
      Counter: $(this).text(),
    }, {
      duration: 1000,
      easing: "swing",
      step: function (now) {
        $(this).text(Math.ceil(now));
      },
    });
  });

  // Pricing Section
  $('.pricing-buttons a').click(function () {
    if ($(this).hasClass("monthly")) {
      $('.pricing-box-price .monthly').show().siblings().hide();
      $(this).addClass('active').siblings().removeClass('active');
    } else {
      $('.pricing-box-price .yearly').show().siblings().hide();
      $(this).addClass('active').siblings().removeClass('active');
    }
  });
  $(function(){
    AOS.init();
    window.addEventListener('load',AOS.refresh);
  })

});

// Show The Loader Overlay
$(window).on('load', function () {
  $(".loader").delay(500).fadeOut();
});