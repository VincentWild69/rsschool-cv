const burger = document.querySelector('.burger');
const headerMenu = document.querySelector('.header__menu');

burger.addEventListener('click', () => {
  headerMenu.classList.toggle('active');
  burger.classList.toggle('active');
})

console.log('%c> Burger menu on 900px width breakpoint', 'color: green')