// Get the form elements
const form = document.querySelector('form');
const emailInput = document.querySelector('#email');
const emailConfirmInput = document.querySelector('#email-confirm');
const studentIdInput = document.querySelector('#student-id');
const studentIdConfirmInput = document.querySelector('#student-id-confirm');
const teacherSelect = document.querySelector('#teacher');
const timeInput = document.querySelector('#time');
const modeSelect = document.querySelector('#mode');
const pricingSelect = document.querySelector('#pricing');
const categorySelect = document.querySelector('#category');
const qSearchInput = document.querySelector('#q-search');
const timeSlotsSelect = document.querySelector('#time-slots');

// Add event listeners to the form elements
form.addEventListener('submit', handleSubmit);
emailInput.addEventListener('input', validateEmail);
emailConfirmInput.addEventListener('input', validateEmailConfirm);
studentIdInput.addEventListener('input', validateStudentId);
studentIdConfirmInput.addEventListener('input', validateStudentIdConfirm);
teacherSelect.addEventListener('change', validateTeacher);
timeInput.addEventListener('input', validateTime);
modeSelect.addEventListener('change', validateMode);
pricingSelect.addEventListener('change', validatePricing);
categorySelect.addEventListener('change', validateCategory);
qSearchInput.addEventListener('input', validateQSearch);
timeSlotsSelect.addEventListener('change', validateTimeSlots);

// Form submission handler
function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(form);
  // Send the form data to the server or perform any other action
  console.log(formData);
}

// Validation functions
function validateEmail() {
  const emailValue = emailInput.value;
  if (!emailValue.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
    emailInput.setCustomValidity('Invalid email address');
  } else {
    emailInput.setCustomValidity('');
  }
}

function validateEmailConfirm() {
  const emailValue = emailInput.value;
  const emailConfirmValue = emailConfirmInput.value;
  if (emailValue !== emailConfirmValue) {
    emailConfirmInput.setCustomValidity('Email addresses do not match');
  } else {
    emailConfirmInput.setCustomValidity('');
  }
}

function validateStudentId() {
  const studentIdValue = studentIdInput.value;
  if (studentIdValue.length < 1) {
    studentIdInput.setCustomValidity('Student ID is required');
  } else {
    studentIdInput.setCustomValidity('');
  }
}

function validateStudentIdConfirm() {
  const studentIdValue = studentIdInput.value;
  const studentIdConfirmValue = studentIdConfirmInput.value;
  if (studentIdValue !== studentIdConfirmValue) {
    studentIdConfirmInput.setCustomValidity('Student ID numbers do not match');
  } else {
    studentIdConfirmInput.setCustomValidity('');
  }
}

function validateTeacher() {
  const teacherValue = teacherSelect.value;
  if (teacherValue === '') {
    teacherSelect.setCustomValidity('Please select a teacher');
  } else {
    teacherSelect.setCustomValidity('');
  }
}

function validateTime() {
  const timeValue = timeInput.value;
  if (timeValue === '') {
    timeInput.setCustomValidity('Time is required');
  } else {
    timeInput.setCustomValidity('');
  }
}

function validateMode() {
  const modeValue = modeSelect.value;
  if (modeValue === '') {
    modeSelect.setCustomValidity('Please select a mode');
  } else {
    modeSelect.setCustomValidity('');
  }
}

function validatePricing() {
  const pricingValue = pricingSelect.value;
  if (pricingValue === '') {
    pricingSelect.setCustomValidity('Please select a pricing option');
  } else {
    pricingSelect.setCustomValidity('');
  }
}

function validateCategory() {
  const categoryValue = categorySelect.value;
  if (categoryValue === '') {
    categorySelect.setCustomValidity('Please select a category');
  } else {
    categorySelect.setCustomValidity('');
  }
}

function validateQSearch() {
  const qSearchValue = qSearchInput.value;
  if (qSearchValue === '') {
    qSearchInput.setCustomValidity('Q Search is required');
  } else {
    qSearchInput.setCustomValidity('');
  }
}

function validateTimeSlots() {
  const timeSlotsValue = timeSlotsSelect.value;
  if (timeSlotsValue === '') {
    timeSlotsSelect.setCustomValidity('Please select a time slot');
  } else {
    timeSlotsSelect.setCustomValidity('');
  }
}