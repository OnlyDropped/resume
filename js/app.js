AOS.init({
  disable: "mobile",
  disable: "phone"
});


const btn = document.querySelector('.header-nav__menu');
const nav = document.querySelector('.header-nav__info');
btn.addEventListener('click', function() {
  btn.classList.toggle('header-nav__menu--show');
})

btn.addEventListener('click', function() {
  nav.classList.toggle('header-nav__info--active');
})
