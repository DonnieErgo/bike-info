const themeSwitchButton = document.querySelectorAll('.theme__switch');
const changeableElems = document.querySelectorAll('.theme-change');

function toggleTheme() {
  changeableElems.forEach(el => el.classList.toggle('theme-change_dark'));
  themeSwitchButton.forEach(el => el.classList.toggle('theme__switch_dark'));
}

themeSwitchButton.forEach(el => el.addEventListener('click', toggleTheme));