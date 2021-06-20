$('.venobox').venobox(); 
$('.banner-slider').slick({
    fade:true,
    prevArrow: '<i class="fa fa-arrow-left prevrt"></i>',
    nextArrow: '<i class="fa fa-arrow-right nextr"></i>',
}); 
$('.service-slider').slick({
    Infinity: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    centerMode: true,
    centerPadding: "0",
    prevArrow: '<i class="fas fa-chevron-up prev"></i>',
    nextArrow: '<i class="fas fa-chevron-down next"></i>',
    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical:false,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical:false,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical:false,
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
}); 
$('.img-slider').slick({
    Infinity: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    centerMode: true,
    centerPadding: "0",
    prevArrow: '<i class="fas fa-chevron-up prev"></i>',
    nextArrow: '<i class="fas fa-chevron-down next"></i>',
    asNavFor:(".details-slider"),
    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            vertical:false,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            vertical:false,

          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical:false,
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
}); 
$(".details-slider").slick({
    nextArrow:false,
    prevArrow:false,
    fade:true,
    asNavFor:('.img-slider'),

})
$('.count').counterUp({
    delay: 10,
    time: 2000,
});
$('.member').venobox(); 

$('.sponsor-slider').slick({
    Infinity: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    prevArrow: false,
    nextArrow: false,
    autoPlay: true,
    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical:false,
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
}); 
$('.img-slider').slick({
    Infinity: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    centerMode: true,
    centerPadding: "0",
    prevArrow: '<i class="fas fa-chevron-up prev"></i>',
    nextArrow: '<i class="fas fa-chevron-down next"></i>',
    asNavFor:(".details-slider"),
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
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical:false,
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
});