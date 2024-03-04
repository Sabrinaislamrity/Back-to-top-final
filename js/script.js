


//==== Back-to-top button
$(window).on('scroll', function(event) {
  if($(this).scrollTop() > 600){
      $('.back').fadeIn(200)
  } else{
      $('.back').fadeOut(200)
  }
});
//==== Animate the scroll to top
$('.back').on('click', function(event) {
  event.preventDefault();

  $('html, body').animate({
      scrollTop: 0,
  }, 2000);
});