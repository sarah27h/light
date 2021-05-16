const headerNavbar = document.querySelector('.header');

window.onscroll = function () {
  // document.body.scrollTop for firefox, IE
  // document.documentElement.scrollTop for Chrome

  if (document.documentElement.scrollTop || document.body.scrollTop > 10) {
    headerNavbar.classList.add('scroll-js');
  } else {
    headerNavbar.classList.remove('scroll-js');
  }
};
