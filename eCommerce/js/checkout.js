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

  let error = 0;

  function addErrorClasses(element1, element2) {
    element1.classList.add('is-invalid');
    element2.classList.remove('invalid-feedback');
  }

  function restoreErrorClasses(element1, element2) {
    element1.classList.remove('is-invalid');
    element2.classList.add('invalid-feedback');
  }

  function validateField(field, errorField, validateConditions) {
    if (validateConditions(field.value)) {
      error++;
      addErrorClasses(field, errorField);
    } else {
      restoreErrorClasses(field, errorField);
    }
  }

  form.addEventListener('submit', (e) => {
    error = 0;
    validateField(
      fName,
      errorName,
      (value) => value == '' || value.length < 3 || containsNumber(value)
    );
    validateField(
      fLastN,
      errorLastN,
      (value) => value == '' || value.length < 3 || containsNumber(value)
    );
    validateField(
      fAddress,
      errorAddress,
      (value) => value == '' || value.length < 3
    );
    validateField(
      fPassword,
      errorPassword,
      (value) =>
        !containsNumber(value) || !containsLetters(value) || value.length < 4
    );
    validateField(
      fEmail,
      errorEmail,
      (value) => !value.includes('@') || value == '' || value.length < 3
    );
    validateField(
      fPhone,
      errorPhone,
      (value) => value.length < 9 || containsLetters(value)
    );
    if (error) e.preventDefault();
  });

  // Validate fields entered by the user: name, phone, password, and email
  // form.addEventListener('submit', (e) => {
  //   error = 0;
  //   if (
  //     fName.value == '' ||
  //     fName.value.length < 3 ||
  //     containsNumber(fName.value)
  //   ) {
  //     error++;
  //     addErrorClasses(fName, errorName);
  //   } else restoreErrorClasses(fName, errorName);
  //   if (
  //     fLastN.value == '' ||
  //     fLastN.value < 3 ||
  //     containsNumber(fLastN.value)
  //   ) {
  //     error++;
  //     addErrorClasses(fLastN, errorLastN);
  //   } else restoreErrorClasses(fLastN, errorLastN);
  //   if (fAddress.value == '' || fAddress.value < 3) {
  //     error++;

  //     addErrorClasses(fAddress, errorAddress);
  //   } else restoreErrorClasses(fAddress, errorAddress);
  //   if (
  //     containsNumber(fPassword.value) === false ||
  //     containsLetters(fPassword.value) === false ||
  //     fPassword.value == ''
  //   ) {
  //     error++;
  //     addErrorClasses(fPassword, errorPassword);
  //   } else restoreErrorClasses(fPassword, errorPassword);
  //   if (
  //     !fEmail.value.includes('@') ||
  //     fEmail.value == '' ||
  //     fEmail.value.length < 3
  //   ) {
  //     error++;
  //     addErrorClasses(fEmail, errorEmail);
  //   } else restoreErrorClasses(fEmail, errorEmail);
  //   if (fPhone.value.length < 9 || containsLetters(fPhone.value) === true) {
  //     error++;

  //     fPhone.classList.add('is-invalid');
  //     errorPhone.classList.remove('invalid-feedback');
  //     addErrorClasses(fPhone, errorPhone);
  //   } else restoreErrorClasses(fPhone, errorPhone);
  //   if (error > 0) e.preventDefault();
  // });
}
