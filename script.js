const burger = document.querySelector('.burger');
const headerMenu = document.querySelector('.header__menu');

burger.addEventListener('click', () => {
  headerMenu.classList.toggle('active');
  burger.classList.toggle('active');
})