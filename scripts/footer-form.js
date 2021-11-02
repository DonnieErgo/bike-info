const emailForm = document.querySelector('.footer__email-input');
const formButton = document.querySelector('.footer__submit-btn');
const form = document.querySelector('.footer__email-form');

function showButton() {
  formButton.classList.add('footer__submit-btn_active');
}

function showGrats (e) {
  e.preventDefault();
  emailForm.setAttribute('placeholder', 'Круто!');
  form.reset();
}

// Скрываем кнопку если кликают вне формы, проблема - также скрывает если выбирать из предложенных браузером сохраненных мейлов
window.onclick = function(event) {
  if (event.target !== emailForm) {
    formButton.classList.remove('footer__submit-btn_active');
  }
}

emailForm.addEventListener('focus', showButton);
form.addEventListener('submit', showGrats);