'use strict';

// Remove default form features
document.querySelector('.cta__form').addEventListener('submit', function (e) {
  e.preventDefault();
});

//Select Elements
const btnSubmitEl = document.querySelector('.btn--form');
const inputFirstNameEl = document.getElementById('first-name');

//when user clicks button, if first name input field is empty, create a red border around it
btnSubmitEl.addEventListener('click', function () {
  if (!inputFirstNameEl.value.trim()) {
    inputFirstNameEl.classList.add('error');
  }
});
