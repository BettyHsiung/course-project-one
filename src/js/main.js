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

$(function() {
  let balls = []
  let gradients = [
    'radial-gradient(circle at 50% 50%, rgba(255, 249, 212, 0.5), rgba(255, 251, 227, 0) 61%)',
    'radial-gradient(circle at 50% 50%, rgba(255, 249, 212, 0.5), rgba(255, 251, 227, 0) 75%)',
    'radial-gradient(circle at 50% 50%, rgba(250, 241, 185, 0.5), rgba(255, 251, 227, 0) 70%)'
  ]
  let Ball = function(el, options) {
    this.setting = {
      minSpeed: null,
      maxSpeed: null
    }
    this.setting = $.extend(this.settings, options)
    this.el = el
    this.div = document.createElement('div')
    this.div.className = 'moving-ball';
    this.randomWidth = this.random(400, 800)
    this.div.style.width = this.randomWidth + 'px'
    this.div.style.height = this.randomWidth + 'px'
    this.div.style.backgroundImage = gradients[Math.floor(Math.random() * gradients.length)]
    this.speedX = this.random(this.setting.minSpeed, this.setting.maxSpeed);
    this.speedY = this.random(this.setting.minSpeed, this.setting.maxSpeed);
    this.x = this.random(0, $(window).innerWidth())
    this.y = this.random(0, this.el.height())
  }
  Ball.prototype.random = function (min, max) {
    return Math.random() * (max - min) + min
  }
  Ball.prototype.draw = function () {
    this.div.style.left = this.x + 'px'
    this.div.style.top = this.y + 'px'
  }
  Ball.prototype.update = function () {
    this.x += this.speedX
    this.y += this.speedY
    if (this.x < 0 - this.randomWidth/2) {
      this.x = 0 - this.randomWidth/2;
      this.speedX *= -1
    }
    if (this.y < 0 - this.randomWidth/2) {
      this.y = 0 - this.randomWidth/2;
      this.speedY *= -1
    }
    if (this.x > $(window).innerWidth() - this.randomWidth/2) {
      this.x = $(window).innerWidth() - this.randomWidth/2
      this.speedX *= -1
    }
    if (this.y > this.el.height() - this.randomWidth/2) {
      this.y = this.el.height() - this.randomWidth/2
      this.speedY *= -1
    }
  }
  let BallMoving = function(el, options) {
    this.setting = {
      num: 4,
      minSpeed: 2,
      maxSpeed: 6
    }
    this.el = el
    this.setting = $.extend(this.settings, options)
    this.createBall()
    this.start()
  }
  BallMoving.prototype.createBall = function() {
    for(let i = 0; i< this.setting.num; i++) {
      let ball = new Ball(this.el, {
        minSpeed: this.setting.minSpeed,
        maxSpeed: this.setting.maxSpeed
      });
      this.el.append(ball.div);
      balls.push(ball);
    }
  }
  BallMoving.prototype.start = function() {
    for (let i = 0; i < balls.length; i++) {
      balls[i].draw()
      balls[i].update()
    }
    requestAnimationFrame(this.start.bind(this))
  }
  new BallMoving($('header#header'), {
    num: 8,
    minSpeed: 2,
    maxSpeed: 6
  })
})

// 滾動至 about
$(function() {
  $(window).scroll(function() {
    if ($('.l-about')[0] !== undefined) {
      let $about = $('.l-about')
      let aboutTop = $about.offset().top - 300
      let aboutBottom = $about.offset().top + $about.outerHeight() / 2
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
      let contactTop = $contact.offset().top - 300
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
      loopslides: 20,
      speed: 5000,
      slidesPerView : 1.5,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
      breakpoints: {
        992: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 3,
        },
        576: {
          slidesPerView: 3,
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

