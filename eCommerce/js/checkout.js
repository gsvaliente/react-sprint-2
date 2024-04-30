// Exercise 6

function validate() {
  // Get the input fields
  var fName = document.getElementById('fName');
  var fEmail = document.getElementById('fEmail');
  var fLastN = document.getElementById('fLastN');
  var fAddress = document.getElementById('fAddress');
  var fPassword = document.getElementById('fPassword');
  var fPhone = document.getElementById('fPhone');

  // Get the error elements
  var errorName = document.getElementById('errorName');
  var errorEmail = document.getElementById('errorEmail');
  var errorLastN = document.getElementById('errorLastN');
  var errorAddress = document.getElementById('errorAddress');
  var errorPassword = document.getElementById('errorPassword');
  var errorPhone = document.getElementById('errorPhone');

  var form = document.querySelector('.form');
  var alpha = /^[A-Za-z]+$/;
  var numbs = /^[0-9]+$/;

  function containsNumber(str) {
    return str.match(alpha) === null;
  }
  function containsLetters(str) {
    return str.match(numbs) === null;
  }

  // Validate fields entered by the user: name, phone, password, and email
  form.addEventListener('submit', (e) => {
    if (
      fName.value == '' ||
      fName.value.length < 3 ||
      containsNumber(fName.value)
    ) {
      e.preventDefault();

      fName.classList.add('is-invalid');
      errorName.classList.remove('invalid-feedback');
    }
    if (
      fLastN.value == '' ||
      fLastN.value < 3 ||
      containsNumber(fLastN.value)
    ) {
      e.preventDefault();
      fLastN.classList.add('is-invalid');
      errorLastN.classList.remove('invalid-feedback');
    }
    if (fAddress.value == '' || fAddress.value < 3) {
      e.preventDefault();
      errorAddress.classList.remove('invalid-feedback');
      fAddress.classList.add('is-invalid');
    }
    if (
      containsNumber(fPassword.value) === false ||
      containsLetters(fPassword.value) === false ||
      fPassword.value == ''
    ) {
      e.preventDefault();
      fPassword.classList.add('is-invalid');
      errorPassword.classList.remove('invalid-feedback');
    }
    if (
      !fEmail.value.includes('@') ||
      fEmail.value == '' ||
      fEmail.value.length < 3
    ) {
      e.preventDefault();
      fEmail.classList.add('is-invalid');
      errorEmail.classList.remove('invalid-feedback');
    }
    if (fPhone == '' || containsLetters(fPhone.value) === true) {
      e.preventDefault();
      fPhone.classList.add('is-invalid');
      errorPhone.classList.remove('invalid-feedback');
    }
  });
}
