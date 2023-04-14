import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = document.getElementsByName('email');
const messageText = document.getElementsByName('message');
const btn = document.querySelector('.btn');

const data = {
  email: '',
  message: '',
};
// function saveMessage(event) {
// event.preventDefault();
// localStorage.getItem('feedback-form-state', form.elements.value);}

const setData = event => {
  data[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
};

const submit = () => {
  localStorage.clear();
  form.reset();
};
console.log(data);

btn.addEventListener('click', submit);
form.addEventListener('input', throttle(setData, 500));
