const prevBtn = document.querySelector('.testimonials__slider-btn_prev');
const nextBtn = document.querySelector('.testimonials__slider-btn_next');

const slider = document.querySelector('.testimonials__slider-wrapper');
const sliderLine = document.querySelector('.testimonials__slides');
const slides = document.querySelectorAll('.testimonials__slide');

window.addEventListener('resize', init);

prevBtn.addEventListener('click', goPrev);
nextBtn.addEventListener('click', goNext);

let windowWidth;
let sliderWidth;
let slidesGap;
let isSingleSlide;
let slideIndex = 0;

function goNext() {
  slideIndex++;

  if (!isSingleSlide && slideIndex >= slides.length / 2) {
    slideIndex = 0;
  } else if (slideIndex >= slides.length) {
    slideIndex = 0;
  }

  rollSlider();
}

function goPrev() {
  slideIndex--;

  if (!isSingleSlide && slideIndex < 0) {
    slideIndex = slides.length / 2 - 1;
  } else if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }

  rollSlider();
}

function rollSlider() {
  let transformValue;

  if (isSingleSlide) {
    transformValue = slideIndex * sliderWidth + slideIndex * slidesGap;
  } else {
    transformValue = slideIndex * sliderWidth + slideIndex * slidesGap * 2;
  }

  sliderLine.style.transform = `translate(-${transformValue}px)`;
}

function getWindowWidth() {
  return window.innerWidth;
}

function init() {
  windowWidth = getWindowWidth();
  isSingleSlide = windowWidth < 992 ? true : false;

  sliderWidth = slider.offsetWidth;

  slidesGap = parseInt(
    window.getComputedStyle(sliderLine).getPropertyValue('gap')
  );

  sliderLine.style.width =
    windowWidth < 992
      ? sliderWidth * slides.length +
        slides.length * slidesGap -
        slidesGap +
        'px'
      : (sliderWidth * slides.length) / 2 +
        slides.length * slidesGap -
        slidesGap +
        'px';

  const slideWidth =
    windowWidth < 992 ? sliderWidth + 'px' : sliderWidth / 2 + 'px';

  slides.forEach((slide) => {
    slide.style.width = slideWidth;
    slide.style.height = 'auto';
  });

  rollSlider();
}

init();
