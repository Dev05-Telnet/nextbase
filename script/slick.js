$(function(){
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed:2000,
        prevArrow: '<span class="prev_arrow"> < </span>',
        nextArrow: '<span class="next_arrow"> > </span>',
      });
});
