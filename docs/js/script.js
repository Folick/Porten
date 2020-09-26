$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 40) {
      $('#scrollTop').fadeIn();
    } else {
      $('#scrollTop').fadeOut();
    }
  });
  $(".hamburger").on("click", function (e) {
    $(this).toggleClass("is-active"),
      e.preventDefault(),
      $(".menu").toggleClass("is-active")
  });
  $('a[href^="#"]').click(function () {
    let anchor = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(anchor).offset().top
    }, 600);
  });
  $("img, a").on("dragstart", function (event) {
    event.preventDefault();
  });
  $("#scrollTop").click(function () {
    $('html ,body').animate({
      scrollTop: 0
    }, 800);
  });
});