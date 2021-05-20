console.log("Welcome to JavaScript world!");

function handleMyFormSubmit(e) {
  // prevent default browser behaviour
  e.preventDefault();

  const myForm = document.querySelector('form#myFavoriteForm')
  //document = website
  const formDataEntries = new FormData(myForm).entries(); // javascript api FormData 
  const { firstName, lastName, email, phoneNumber, age, country } = Object.fromEntries(formDataEntries);
  const emailErrorMessage = validateEmail(email);

  if (emailErrorMessage) {
    const emailErrorMessageElement = document.querySelector('.container .error-message');
    emailErrorMessageElement.innerText = emailErrorMessage;
    return;
  } else {

    const emailErrorMessageElement = document.querySelector('.container .error-message');
    emailErrorMessageElement.innerText = '';
  }

  // submit FORM data to an API
  console.log(firstName, lastName, email, phoneNumber, age, country);
}

function validateEmail(email) {
  if (!email) return 'Email is required';

  const isValidEmail = /^\S+@\S+$/g
  if (!isValidEmail.test(email)) {
    return 'Please enter a valid email';
  }

  return '';
}
//Used on form elements to submit information. Only input tags with a name attribute are submitted to the server
// submit FORM data to an API


const myForm = document.querySelector('form#myFavoriteForm')
//document = website
const formDataEntries = new FormData(myForm).entries(); // javascript api FormData 
const { firstName, lastName, email, phoneNumber, age, country } = Object.fromEntries(formDataEntries);
const emailErrorMessage = validateEmail(email);

if (emailErrorMessage) {
  const emailErrorMessageElement = document.querySelector('.container .error-message');
  emailErrorMessageElement.innerText = emailErrorMessage;
  return;
} else {

  const emailErrorMessageElement = document.querySelector('.container .error-message');
  emailErrorMessageElement.innerText = '';
}

// submit FORM data to an API
console.log(firstName, lastName, email, phoneNumber, age, country);
}

function validateEmail(email) {
if (!email) return 'Email is required';

const isValidEmail = /^\S+@\S+$/g
if (!isValidEmail.test(email)) {
  return 'Please enter a valid email';
}

return '';
}