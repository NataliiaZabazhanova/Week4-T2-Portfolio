$(document).ready(function() {
  $('.slider').slick({
    arrows: false,
    dots: true,
    //when it is true - with adaptive for flex works bad
    adaptiveHeight: false,
    speed: 400,
    easing: 'ease',
   /* responsive: [
      {
        breakpoint: 1101,
        settings: {
          arrows: true,
          dots: false,
        }
      }
    ]*/
  });
})

//Add class active to tabs
$(document).ready(function() {
$('.tabs__item').click(function(event) {
  $('.tabs__item').toggleClass('active');
});