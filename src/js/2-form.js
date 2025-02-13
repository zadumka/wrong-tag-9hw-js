const form = document.querySelector('.feedback-form');
const storageKey = 'feedback-form-state';

const input = form.elements['email'];
const textarea = form.elements['message'];

const saveFormLocalStorage = () => {
  const formObject = {
    email: input.value.trim(),
    message: textarea.value.trim(),
  };

  localStorage.setItem(storageKey, JSON.stringify(formObject));
};

const fillInfoForm = () => {
  const getInfoForm = JSON.parse(localStorage.getItem(storageKey)) || {};
  if (getInfoForm) {
    input.value = getInfoForm.email || '';
    textarea.value = getInfoForm.message || '';
  }
};

fillInfoForm();

form.addEventListener('input', event => {
  const nodeName = event.target.nodeName;

  if (nodeName === 'INPUT' || nodeName === 'TEXTAREA') {
    saveFormLocalStorage();
  }
});

form.addEventListener('submit', event => {
  event.preventDefault();

  const email = input.value;
  const message = textarea.value;

  if (!email || !message) {
    alert('Please, fill in all fields!');
  } else {
    console.log({ email, message });
    localStorage.removeItem(storageKey);
    form.reset();
  }
});
