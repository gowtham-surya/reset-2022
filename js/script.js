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

// scroll spy
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.menu-items ul li a');

window.onscroll = () => {
  section.forEach((sec) => {
    var top = window.scrollY;
    var id = sec.getAttribute('id');
    var height = sec.offsetHeight;
    var offset = sec.offsetTop - 20;

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove('current');
        document
          .querySelector('.menu-items ul li a[href*=' + id + ']')
          .classList.add('current');
      });
    }
  });
};

//Service worker registration
if ('serviceWorker' in navigator) {
  // Register a service worker.
  navigator.serviceWorker.register('../service-worker.js').then((registration) => {
    console.log('Service worker registration succeeded:', registration);
  }, /*catch*/ (error) => {
    console.error(`Service worker registration failed: ${error}`);
  });
} else {
  console.error('Service workers are not supported.');
}
