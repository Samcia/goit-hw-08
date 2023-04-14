import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('[name="email"]');
const messageText = document.querySelector('[name="message"]');
const btn = document.querySelector('.btn');

const data = {
  email: '',
  message: '',
};
const getDataFromLocalStorage = () => {
  if (!!!localStorage.getItem('feedback-form-state')) return;
  const saveData = JSON.parse(localStorage.getItem('feedback-form-state'));
  emailInput.value = saveData.email;
  messageText.value = saveData.message;
};

const setData = event => {
  data[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
};

const submit = event => {
  event.preventDefault();
  localStorage.clear();
  form.reset();
};
console.log(data);

window.addEventListener('load', getDataFromLocalStorage);
btn.addEventListener('click', submit);
form.addEventListener('input', throttle(setData, 500));
