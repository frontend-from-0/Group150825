const dateInput = document.getElementById('date');
const nameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const selectedDate = document.getElementById('selected-date');
const selectedName = document.getElementById('selected-name');
const selectedEmail = document.getElementById('selected-email');
const selectedTime = document.getElementById('selected-time');
const confirmButton = document.getElementById('confirm');
const timeSlotContainer = document.getElementById('timeslots');
const timeSlotButtons = document.getElementsByClassName('slot');
const bookingForm = document.querySelector('form.booking');
const confirmedName = document.getElementById('confirmed-name');
const confirmedEmail = document.getElementById('confirmed-email');
const confirmedDate = document.getElementById('confirmed-date');
const confirmedTime = document.getElementById('confirmed-time');
const confirmationMessage = document.getElementById('confirmation-message');

const data = {
  name: null,
  email: null,
  date: null,
  time: null,
};

const today = new Date();
today.setDate(today.getDate() + 1);
const tomorrow = today.toISOString().split('T')[0];
dateInput.setAttribute('min', tomorrow);

nameInput.addEventListener('change', function() {
  selectedName.textContent = nameInput.value;
  data.name = nameInput.value;
  checkFormValidity();
});

emailInput.addEventListener('change', function() {
  selectedEmail.textContent = emailInput.value;
  data.email = emailInput.value;
  checkFormValidity();
});


dateInput.addEventListener('change', function () {
  selectedDate.textContent = dateInput.value;
  data.date = dateInput.value;
  checkFormValidity();
  allowSubmit();
});

timeSlotContainer.addEventListener('click', function(event) {
  if (event.target.classList.contains('slot')) {
    const button = event.target;
    [...timeSlotButtons].forEach((button) => button.classList.remove('selected'));
    button.classList.add('selected');
    button.addEventListener('click', () => showSelectedTime(button));
    selectedTime.textContent = button.textContent;
    data.time = button.textContent;
    
    checkFormValidity();
  }
});
// Alternative:
// [...timeSlotButtons].forEach((button) =>
//   button.addEventListener('click', function() { showSelectedTime(button)}),
// );

bookingForm.addEventListener('submit', function (event) {
  event.preventDefault();
  
  if (!data.date && !data.time) {
    return;
  }
  // bookingForm.classList.add('hidden');
  bookingForm.style.display = 'none';
  confirmedName.textContent = data.name;
  confirmedEmail.textContent = data.email;
  confirmedDate.textContent = data.date;
  confirmedTime.textContent = data.time;
  confirmationMessage.classList.remove('hidden');
});
function showSelectedTime(button) {
  deselectTimeSlots();
  button.classList.add('selected');
  selectedTime.textContent = button.textContent;
  data.time = button.textContent;
  allowSubmit();
}

function deselectTimeSlots() {
  [...timeSlotButtons].forEach((button) => button.classList.remove('selected'));
}

function allowSubmit() {
  if (data.date && data.time) {
    confirmButton.removeAttribute('disabled');
  }
}
function checkFormValidity() {
  if (data.date && data.time && data.name && data.email) {
    confirmButton.removeAttribute('disabled');
  } else {
    confirmButton.setAttribute('disabled', 'true');
  }
}
