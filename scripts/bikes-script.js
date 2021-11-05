const container = document.querySelector('.bikes__select-cont');
const activeSelector = document.querySelector('.bikes__selector_active');
const sliderButtons = document.querySelectorAll('.bikes__dot');
const sliderButtonOne = document.getElementsByClassName('bikes__dot')[0];
const sliderButtonTwo = document.getElementsByClassName('bikes__dot')[1];
const sliderButtonThree = document.getElementsByClassName('bikes__dot')[2];
const bikeCards = document.querySelectorAll('.bikes__element_target');
const sliderArea = document.querySelector('.bikes__slider');
const tabs = document.querySelectorAll('.bikes__selector');
const sliderPanes = document.querySelectorAll('.bikes__slider-wrapper');
const shossePane = document.getElementsByClassName('bikes__slider-wrapper')[0];
const grevelPane = document.getElementsByClassName('bikes__slider-wrapper')[1];
const triatlonPane = document.getElementsByClassName('bikes__slider-wrapper')[2];
const selectorBtn = document.querySelector('.bikes__selector-btn');
let slideIndex = 1;

// Определяем в какую сторону был сделан свайп и запускаем движение
function handleGesture() {
  if (touchendX < touchstartX) plusSlides(-1);
  if (touchendX > touchstartX) plusSlides(1);
}

// Управление движением слайдов
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function removeElements(elements) {
  elements.forEach(el => el.classList.remove('bikes__element_active'));
}

function removeDots(dots) {
  dots.forEach(el => el.classList.remove('bikes__dot_active'));
}

function showSlides(n) {
  const slides = document.querySelectorAll('.bikes__element_target');
  const dots = sliderButtons;
  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;
  removeElements(slides);
  removeDots(dots);
  slides[slideIndex-1].classList.add('bikes__element_active');
  dots[slideIndex-1].classList.add('bikes__dot_active');
}

// Открываем дропдаун при маленьком разрешении и переключаем табы при большом
function toggleDrop() {
  container.classList.toggle('bikes__select-cont_active');
}

// Закрытие дропдауна
function closeDrop() {
  container.classList.remove('bikes__select-cont_active');
}

// Управление классами для табов и наборов контента
function removeTabsActivation() {
  tabs.forEach(el => el.classList.remove('bikes__selector_active'));
}

function addTabActivation(s) {
  s.classList.add('bikes__selector_active');
}

function removePanesActivation() {
  sliderPanes.forEach(el => el.classList.remove('bikes__slider-wrapper_active'));
}

function addPaneActivation(p) {
  p.classList.add('bikes__slider-wrapper_active');
}

function choosePane(target) {
  if (target.classList.contains('bikes__selector_shosse')) return shossePane;
  if (target.classList.contains('bikes__selector_grevel')) return grevelPane;
  if (target.classList.contains('bikes__selector_triatlon')) return triatlonPane;
}

function removeElemTarget() {
  document.querySelectorAll('.bikes__element_target').forEach(el => el.classList.remove('bikes__element_target'));
}

function addElemTarget(target) {
  let c = target.children;
  c[0].classList.add('bikes__element_target');
  c[1].classList.add('bikes__element_target');
  c[2].classList.add('bikes__element_target');
}

function removeBtnText() {
  selectorBtn.innerText = '';
}

function addBtnText(target) {
  selectorBtn.innerText = target.innerText;
}

// Обработчик для кликов по табам
function tabClicks(tabClickEvent) {
  removeTabsActivation();
  removeElemTarget();
  removeBtnText();
  const clickedTab = tabClickEvent.currentTarget;
  addTabActivation(clickedTab);
  tabClickEvent.preventDefault();
  removePanesActivation();

  const anchorReference = tabClickEvent.target;
  const activePane = choosePane(anchorReference);

  addBtnText(anchorReference);
  addElemTarget(activePane);
  addPaneActivation(activePane);
}

// Слушатели табов
tabs.forEach(el => el.addEventListener('click', tabClicks));
container.addEventListener('click', toggleDrop);

// Слушатели свайпов
sliderArea.addEventListener('touchstart', function (event) {
  touchstartX = event.changedTouches[0].screenX;
}, false);

sliderArea.addEventListener('touchend', function (event) {
  touchendX = event.changedTouches[0].screenX;
  handleGesture();
}, false);

// Слушатели кнопок
sliderButtonOne.addEventListener(`click`, () => currentSlide(1));
sliderButtonTwo.addEventListener(`click`, () => currentSlide(2));
sliderButtonThree.addEventListener(`click`, () => currentSlide(3));