$(document).ready(() => {
  $('.toggle-nav').click(() => {
    $('.menu-items').toggleClass('active');
  });
  $('.menu-items ul li a').click(() => {
    $('.menu-items').removeClass('active');
  });
  $(window).scroll(() => {
    $('.menu-items').removeClass('active');
  });
});
