const burgerMenu = document.querySelector('.header__menu');
const burgerButton = document.querySelector('.header__burger');

// Функция открытия бургерного меню
function openBurger() {
  console.log(111);
  burgerMenu.classList.toggle('header__menu_burger-active');
  burgerButton.classList.toggle('header__burger_active');
}

// Слушатель кнопки бургерного меню
burgerButton.addEventListener('click', () => openBurger())
