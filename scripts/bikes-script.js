const container = document.querySelector('.bikes__select-cont');
const selectors = document.querySelectorAll('.bikes__selector');

function toggleDrop() {
  container.classList.toggle('bikes__select-cont_active');
  // selectors.forEach(el => el.classList.remove('bikes__selector_hide'));
}

container.addEventListener('click', toggleDrop);