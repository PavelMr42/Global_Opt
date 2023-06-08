
document.addEventListener('DOMContentLoaded', () => {
    const humburger = document.querySelector('.promo__hamburger'),
          close = document.querySelector('.header__close'),
          wrapper = document.querySelector('.header__wrapper');

    humburger.addEventListener('click', () => {
       wrapper.classList.add('header__wrapper-active');
    });
    close.addEventListener('click', () => {
       wrapper.classList.remove("header__wrapper-active");
    });
});