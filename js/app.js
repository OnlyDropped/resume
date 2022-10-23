AOS.init({
  
});


const btn = document.querySelector('.header-nav__menu');
btn.addEventListener('click', function() {
  btn.classList.toggle('header-nav__menu--show');
})