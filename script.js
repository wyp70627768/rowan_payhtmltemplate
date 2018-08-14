$(() => {
  //test

  //ANIMATIONS
  $(document).on("scroll", function() {
    if($("#map").hasClass("hidden")){
      if($(document).scrollTop() > $("#section-about").offset().top + $("#section-about").height()/2){
        $("#map").fadeIn(2000)
      }
    }
  })

  // LINK SCROLLING
  $("#header-link").click(function() {
    $('html, body').animate({
        scrollTop: $("#header").offset().top
    }, 500)
  })
  $("#about-link").click(function() {
    $('html, body').animate({
        scrollTop: $("#section-about").offset().top
    }, 500)
  })
  $("#how-link").click(function() {
    $('html, body').animate({
        scrollTop: $("#section-how").offset().top
    }, 500)
  })
  $("#contact-link").click(function() {
    $('html, body').animate({
        scrollTop: $("#section-contact").offset().top
    }, 500)
  })
})