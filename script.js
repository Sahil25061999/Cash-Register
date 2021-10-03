const price = document.querySelector('#price');
const cashGiven = document.querySelector('#cash-given');
const check = document.querySelector('.check');
const error = document.querySelector('.error-message');
const noOfNote = document.querySelectorAll('.no-of-note');
const next = document.querySelector('next');

const list = [2000, 500, 100, 20, 10, 1];

check.addEventListener('click', () => {
  error.classList.remove('show');
  if (price.value > 0 && cashGiven.value > 0) {
    if (parseInt(cashGiven.value) >= parseInt(price.value)) {
      var difference = cashGiven.value - price.value;

      calculateDenomination(difference);
    } else {
      console.log(typeof cashGiven.value, typeof price.value);
      errorMessage('The cash should be atleast equal to price.');
    }
  } else {
    errorMessage('Enter valid amount.');
  }
});

function errorMessage(message) {
  error.classList.add('show');
  error.innerText = message;
}

function calculateDenomination(difference) {
  list.forEach((item, key) => {
    noOfNote[key].innerText = Math.trunc(difference / item);
    difference = difference % item;
  });
}
