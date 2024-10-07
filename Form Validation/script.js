document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Clear previous error messages
  clearErrors();

  // Get form values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  let isValid = true;

  // Validate name
  if (!name) {
      showError('nameError', 'Name is required');
      isValid = false;
  }

  // Validate email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
      showError('emailError', 'Email is required');
      isValid = false;
  } else if (!emailPattern.test(email)) {
      showError('emailError', 'Please enter a valid email address');
      isValid = false;
  }

  // Validate password
  if (!password) {
      showError('passwordError', 'Password is required');
      isValid = false;
  } else if (password.length < 6) {
      showError('passwordError', 'Password must be at least 6 characters');
      isValid = false;
  }

  // Validate confirm password
  if (password !== confirmPassword) {
      showError('confirmPasswordError', 'Passwords do not match');
      isValid = false;
  }

  // Show success message if valid
  if (isValid) {
      document.getElementById('successMessage').textContent = 'Registration successful!';
      document.getElementById('successMessage').style.display = 'block';
      document.getElementById('registrationForm').reset(); // Reset the form
  }
});

// Function to display error messages
function showError(elementId, message) {
  const errorElement = document.getElementById(elementId);
  errorElement.textContent = message;
  errorElement.style.display = 'block';
}

// Function to clear error messages
function clearErrors() {
  const errorMessages = document.querySelectorAll('.error-message');
  errorMessages.forEach(error => {
      error.textContent = '';
      error.style.display = 'none';
  });
  document.getElementById('successMessage').textContent = '';
  document.getElementById('successMessage').style.display = 'none';
}
