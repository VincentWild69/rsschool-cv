const burger = document.querySelector('.burger');
const headerMenu = document.querySelector('.header__menu');

burger.addEventListener('click', () => {
  headerMenu.classList.toggle('active');
  burger.classList.toggle('active');

  if (headerMenu.classList.contains('active')) {
    setTimeout(() => {
      document.addEventListener('click', foo = (e) => {
      if (headerMenu.classList.contains('active') && !e.target.closest('.header__menu') && !e.target.closest('.burger')) {
        headerMenu.classList.remove('active');
        burger.classList.remove('active');
        document.removeEventListener('click', foo)
        }
      })
    }, 0)
  } else {
      document.removeEventListener('click', foo)
    }

})    





console.log('%c> Responsive, burger menu on 900px width breakpoint', 'color: green')