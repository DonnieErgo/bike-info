const sliderBtnOne = document.getElementsByClassName('slider__button')[0];
const sliderBtnTwo = document.getElementsByClassName('slider__button')[1];
let slideInd = 1;


// Управление классами для показа слайдов
function plusSlide(n) {
  showSlide(slideInd += n);
}

function currSlide(n) {
  showSlide(slideInd = n);
}

function rmvElements(elements) {
  elements.forEach(el => el.classList.remove('slider__container_active'));
}

function showSlide(n) {
  const slides = document.querySelectorAll('.slider__container');
  if (n > slides.length) slideInd = 1;
  if (n < 1) slideInd = slides.length;
  rmvElements(slides);
  slides[slideInd-1].classList.add('slider__container_active');
}

// Слушатели кнопок
sliderBtnOne.addEventListener(`click`, () => plusSlide(-1));
sliderBtnTwo.addEventListener(`click`, () => plusSlide(1));