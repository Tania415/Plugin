 $(document).ready(function(){
     $('.photo-section').slick({

      autoplayspeed: 100,
      arrows: true,
      autoplay: true,
      cssEase: 'ease',
      dots: true,
      dotsClass: 'slick-dots',
      easing: 'linear',
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 2,
      speed: 3000,

      responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
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
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
  
  });

  

        var owl = $('.owl-carousel');
        owl.owlCarousel({
        loop:true,
        nav:true,
        margin:10,
        responsive:{
            0:{
               items:1
            },
            600:{
                items:3
            },            
            960:{
                items:4
            },
            1200:{
                items:5
            }
        }
    });
owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});

lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
});



var typed = new Typed('.txt', {
    /**
     * @property {array} strings strings to be typed
     * @property {string} stringsElement ID of element containing string children
     */
    strings: [
       '1. Cry in fear of Allah',
       '2. Remembrance of death',
       '3. Make dua to Allah frequently',
       '4. Always do good deeds',
       '5. Adopt the fear of Allah in our hearts'
    ],
    stringsElement: null,
    typeSpeed: 100, 
    startDelay: 0,
    backSpeed: 100,
    smartBackspace: true,
    shuffle: false,
    backDelay: 2000,
    fadeOut: false,
    fadeOutClass: 'typed-fade-out',
    fadeOutDelay: 2000,
    loop: true,
    loopCount: Infinity,

    showCursor: true,
    cursorChar: ' ',
    autoInsertCss: true,

    
    attr: null,

    
    bindInputFocusEvents: false,

    
    contentType: 'html'
});
