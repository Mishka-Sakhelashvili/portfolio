$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });


  // esc button
  $(document).keyup(function (e) {
    if (e.which == 27) {
      $("html").animate({ scrollTop: 0 });
      $("html").css("scrollBehavior", "auto");
    };
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn").toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: ["Front Developer", "Back Developer", "Mobile Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });

  var swiperConfig = {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 30,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows: true,
    },
    initialSlide: 2,
    loop: true,
    autoplay: {
      delay: 6000,
      disableOnInterraction: false,
    },
  };

  var swiper = new Swiper("#FrontEnd", swiperConfig);

  var swiper = new Swiper("#FullStack", swiperConfig);

  var swiper = new Swiper("#Mobile", swiperConfig);

  $("#year").text(new Date().getFullYear());

  if (window.innerWidth > 800) {
    VanillaTilt.init(document.querySelectorAll(".skills .card"), {
      max: 25,
      speed: 400
    });
  }

  

  $('#services .option').click(function () {
    $('#services .option').removeClass('activeServ');
    $(this).addClass('activeServ');
  });
});


