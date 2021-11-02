const burgerMenu = document.querySelector('.header__menu');
const burgerButton = document.querySelector('.header__burger');
const burgerLinks = document.querySelectorAll('.header__menu-link');

// Функция открытия и закрытия бургерного меню
function toggleBurger() {
  burgerMenu.classList.toggle('header__menu_burger-active');
  burgerButton.classList.toggle('header__burger_active');
}

// Функция закрывающая меню по клику на ссылку
function closeBurger() {
  burgerMenu.classList.remove('header__menu_burger-active');
  burgerButton.classList.remove('header__burger_active');
}

// Слушатель кнопки бургерного меню
burgerButton.addEventListener('click', toggleBurger);

// Слушатель ссылок в меню
burgerLinks.forEach(el => el.addEventListener('click', closeBurger));