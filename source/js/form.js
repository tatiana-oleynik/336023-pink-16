var navMain = document.querySelector('.main-nav');
var navMainColor = document.querySelector('.page-header__wrapper');
var navToggle = document.querySelector('.main-nav__toggle');
navMain.classList.remove('main-nav--opened')

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    navMainColor.classList.add('page-header__wrapper-blue');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    navMainColor.classList.remove('page-header__wrapper-blue');
  }
});
