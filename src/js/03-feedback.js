import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = document.getElementsByName('email');
const messageInput = document.getElementsByName('message');
const btn = document.querySelector('.btn');

const data = {
  email: '',
  message: '',
};

const getData = event => {
  data[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
};

const submit = () => {
  localStorage.clear();
  form.reset();
};
console.log(data);

btn.addEventListener('click', submit);
form.addEventListener('input', throttle(getData, 500));
