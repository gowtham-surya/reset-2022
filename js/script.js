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

// Counter

$(document).ready(() => {
  const countdown = () => {
    const eventDate = new Date('Mar 01, 2023 00:00:00').getTime();
    const RegLastDate = new Date('Feb 15, 2023 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = eventDate - now;
    if (now > RegLastDate) {
      $('.home .button a').text('REGISTRATION CLOSED');
      $('.home .button a').css('pointer-events', 'none');
      $('.home .button').css('background-color', '#404040');
    }
    if (now > RegLastDate - 86400000 && now <= RegLastDate) {
      $('.home .button a').text('REGISTER SOON');
    }

    if (gap > 0) {
      // Timing constant
      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;

      // Remaining time
      const remDay = Math.floor(gap / day);
      const remHour = Math.floor((gap % day) / hour);
      const remMinute = Math.floor((gap % hour) / minute);
      const remSecond = Math.floor((gap % minute) / second);

      $('.day').text(remDay);
      $('.hour').text(remHour);
      $('.minute').text(remMinute);
      $('.second').text(remSecond);
    }
  };

  setInterval(countdown, 1000);
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
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/../service-worker.js').then(
      (registration) => {
        console.log('Service worker registration succeeded:', registration);
      },
      /*catch*/ (error) => {
        console.error(`Service worker registration failed: ${error}`);
      }
    );
  });
} else {
  console.error('Service workers are not supported in your browser.');
}
