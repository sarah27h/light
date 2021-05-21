const headerNavbar = document.querySelector('.header');
const logoNavbar = document.querySelector('.header__logo');
const contactNavbar = document.querySelector('.header__contact');

window.onscroll = function () {
  // document.body.scrollTop for firefox, IE
  // document.documentElement.scrollTop for Chrome

  if (document.documentElement.scrollTop || document.body.scrollTop > 10) {
    headerNavbar.classList.add('header-scroll-js');
    logoNavbar.classList.add('logo-scroll-js');
    contactNavbar.classList.add('contact-scroll-js');
  } else {
    headerNavbar.classList.remove('header-scroll-js');
    logoNavbar.classList.remove('logo-scroll-js');
    contactNavbar.classList.remove('contact-scroll-js');
  }
};
