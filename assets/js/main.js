import './tabs.js';
import './slider.js';
import './formValidation.js';
import getArtWorks from './getArtWorks.js';

// Better page navigation
const menuItems = document.querySelectorAll('.header__navlist a[href^="#"]');

menuItems.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();

    const headerHeight = document.querySelector('.header').offsetHeight;

    const targetId = e.target.getAttribute('href').substring(1);

    const targetPosition =
      document.getElementById(targetId).getBoundingClientRect().top +
      window.pageYOffset;

    const scrollPosition = targetPosition - headerHeight;

    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth'
    });
  });
});

// News animation on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((elem) => observer.observe(elem));

// Copyright year
const year = document.querySelector('.year');
year.textContent = new Date().getFullYear();

// Loading animation
window.addEventListener('load', () => {
  setTimeout(() => {
    document.querySelector('#preloader').style.opacity = '0';
    setTimeout(() => {
      document.querySelector('#preloader').style.display = 'none';
    }, 300);
  }, 4700);
});

document.addEventListener('scroll', handleScroll);

document.addEventListener('mousemove', handleInactivity);
document.addEventListener('keypress', handleInactivity);

let inactivityTimer = setTimeout(() => {
  const response = confirm('Ви ще тут?');
  if (!response) {
    window.close();
  }
}, 1 * 60 * 1000);

// Get the artworks from the API and insert them in the DOM
const artworks = await getArtWorks(4, 300);
updateArtworksUI(artworks);

function updateArtworksUI(artworks) {
  const grid = document.querySelector('.artworks__grid');
  grid.innerHTML = '';

  artworks.forEach((artwork) => {
    const template = `
      <div class="artworks__work">
        <img src="${artwork.image_url}" alt="${artwork.title}" class="artworks__img">
        <p class="artworks__work-title">${artwork.title}</p>
        <p class="artworks__author">${artwork.author}</p>
      </div>
    `;

    grid.innerHTML += template;
  });
}

function handleScroll() {
  const stickyHeader = document.querySelector('.header');
  const progressBar = document.querySelector('#progress-bar');

  const { scrollHeight, scrollTop } = document.documentElement;
  const scrollPercent = `${
    (scrollTop / (scrollHeight - window.innerHeight)) * 100
  }%`;

  progressBar.style.setProperty('--progress', scrollPercent);

  if (window.pageYOffset > 0) {
    stickyHeader.classList.add('scrolled');
  } else {
    stickyHeader.classList.remove('scrolled');
  }
}

function handleInactivity() {
  clearTimeout(inactivityTimer);
  inactivityTimer = setTimeout(() => {
    const response = confirm('Ви ще тут?');
    if (!response) {
      window.close();
    }
  }, 1 * 60 * 1000);
}
