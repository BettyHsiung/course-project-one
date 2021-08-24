// -- Detect Browser
function isMobile() {
  try { document.createEvent('TouchEvent'); return true; }
  catch (e) { return false; }
}
if (!isMobile()) {
  let explorer = navigator.userAgent
  console.log(navigator.userAgent)
  if (explorer.indexOf('Firefox') >= 0) {
    $('body').append('<script async src="js/smooth-scrolling-chrome.js"></script>')
  } else if (explorer.indexOf('Chrome') >= 0) {
    $('body').append('<script async src="js/smooth-scrolling-chrome.js"></script>')
  } else if (explorer.indexOf('Safari') >= 0) {
    $('body').append('<script async src="js/smooth-scrolling-safari.js"></script>')
  }
}

// -- Hover Mobile
$(function () {
  if (isMobile()) {
    $('.u-hover-mobile').css({
      display: "block"
    })
  } else {
    $('.u-hover-mobile').css({
      display: "none"
    })
  }
})

// -- burger
$(function() {
  let isOpened = false
  $('.o-burger').click(function() {
    if (isOpened === false) {
      $(this).addClass('is-opened')
      $('.c-navbar').addClass('is-opened')
      isOpened = true
    } else if (isOpened === true) {
      $(this).removeClass('is-opened')
      $('.c-navbar').removeClass('is-opened')
      isOpened = false
    }
  })
})


// -- navbar
$(function() {
  // ! 表示否定
  if (!$('#app').hasClass('is-home')) {
    $('.c-navbar').addClass('is-fixed')
  }
})

// 滾動至 about
$(function() {
  $(window).scroll(function() {
    if ($('.l-about__bg')[0] !== undefined) {
      let $about = $('.l-about__bg')
      let aboutTop = $about.offset().top - 300
      let aboutBottom = $about.offset().top + $about.outerHeight()
      if (this.scrollY > aboutTop && this.scrollY < aboutBottom) {
        $('body').addClass('is-about-active')
      } else {
        $('body').removeClass('is-about-active')
      }
    }
  })
})

// 滾動至 contact
$(function() {
  $(window).scroll(function() {
    if ($('.l-contact')[0] !== undefined) {
      let $contact = $('.l-contact')
      let contactTop = $contact.offset().top - 30
      let contactBottom = $contact.offset().top + $contact.outerHeight() / 2
      if (this.scrollY > contactTop && this.scrollY < contactBottom) {
        $('body').addClass('is-contact-active')
      } else {
        $('body').removeClass('is-contact-active')
      }
    }
  })
})


// go top
$(function() {
  let gotop = false
  $('.o-gotop').click(function() {
    if (gotop === false) {
      $('html, body').animate({
        scrollTop: 0
      }, 300)
      gotop = true
      setTimeout(function() {
        gotop = false
      }, 1000);
    }
  })
})


$(function() {

  // swiper
  if (new Swiper() !== undefined) {
    let newsSwiper = new Swiper('.l-popular__swiper', {
      freeMode : true,
      loop: true,
      speed: 2000,
      slidesPerView : 1.5,
      autoplay: {
        delay: 0,
        stopOnLastSlide: false,
        disableOnInteraction: false,
      },
      spaceBetween: 30,
      breakpoints: {
        992: {
          slidesPerView: 4,
          spaceBetween: 30
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 30
        }
      },
    })
  }
})

// -- Parallax
$(function() {
  let jsParallax = []
  $('.js-parallax').each(function() {
    jsParallax.push(
      new Parallax(this, {
        hoverOnly: true,
        relativeInput: true
      })
    )
  })
})

