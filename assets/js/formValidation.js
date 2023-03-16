const form = document.querySelector('.contact__form');
const nameInput = document.querySelector('#name-input');
const surnameInput = document.querySelector('#surname-input');
const emailInput = document.querySelector('#email-input');
const nameError = document.querySelector('#name-error');
const surnameError = document.querySelector('#surname-error');
const emailError = document.querySelector('#email-error');

const LUCKY_NAME = 'Alexander';
const confetti = document.querySelector('.confetti-container');
const congrats = document.querySelector('.congrats');
const congratsText = document.querySelector('.congrats__text');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let formIsValid = true;

  const name = nameInput.value.trim();
  if (/^[A-Z][a-z]*$/.test(name)) {
    nameInput.style.outline = '1px solid #ced4da';
    nameError.style.opacity = '0';
  } else {
    nameInput.style.outline = '1px solid red';
    nameError.style.opacity = '1';
    formIsValid = false;
  }

  const surname = surnameInput.value.trim();
  if (/^[A-Z][a-z]*$/.test(surname)) {
    surnameInput.style.outline = '1px solid #ced4da';
    surnameError.style.opacity = '0';
  } else {
    surnameInput.style.outline = '1px solid red';
    surnameError.style.opacity = '1';
    formIsValid = false;
  }

  const email = emailInput.value.trim();
  if (/^\S+@\S+\.\S+$/.test(email)) {
    emailInput.style.outline = '1px solid #ced4da';
    emailError.style.opacity = '0';
  } else {
    emailInput.style.outline = '1px solid red';
    emailError.style.opacity = '1';
    formIsValid = false;
  }

  if (formIsValid) {
    localStorage.setItem('userInfo', JSON.stringify({ name, surname, email }));

    if (name === LUCKY_NAME) {
      const today = new Date();
      congratsText.textContent = `Only today on
       ${today.toLocaleDateString('uk-UA')} can the users with
        the name ${name} get a 120% discount!`;

      confetti.style.display = 'block';
      congrats.classList.add('grid');

      setTimeout(() => {
        confetti.style.display = 'none';
        congrats.classList.remove('grid');
      }, 7000);
    }
  }
});

nameInput.addEventListener('input', () => {
  nameInput.style.outline = '1px solid #ced4da';
  nameError.style.opacity = '0';
});

surnameInput.addEventListener('input', () => {
  surnameInput.style.outline = '1px solid #ced4da';
  surnameError.style.opacity = '0';
});

emailInput.addEventListener('input', () => {
  emailInput.style.outline = '1px solid #ced4da';
  emailError.style.opacity = '0';
});
