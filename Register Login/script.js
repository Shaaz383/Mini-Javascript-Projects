const users = []; // Array to store user data

// Registration Form Handling
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous messages
    clearMessages();

    // Get form values
    const username = document.getElementById('regUsername').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const password = document.getElementById('regPassword').value;
    const confirmPassword = document.getElementById('regConfirmPassword').value;

    // Validation
    let isValid = true;

    // Check if the username already exists
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
        document.getElementById('regUsernameError').textContent = 'Username already exists';
        isValid = false;
    }

    // Check if email is already registered
    const existingEmail = users.find(user => user.email === email);
    if (existingEmail) {
        document.getElementById('regEmailError').textContent = 'Email is already registered';
        isValid = false;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        document.getElementById('regConfirmPasswordError').textContent = 'Passwords do not match';
        isValid = false;
    }

    if (isValid) {
        // Add new user to the array
        users.push({ username, email, password });
        document.getElementById('regSuccessMessage').textContent = 'Registration successful! You can now log in.';
    }
});

// Show login form
document.getElementById('showLogin').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('registrationContainer').style.display = 'none';
    document.getElementById('loginContainer').style.display = 'block';
});

// Login Form Handling
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous messages
    clearMessages();

    // Get form values
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;

    // Validate credentials
    const user = users.find(user => user.username === username && user.password === password);
    
    if (user) {
        document.getElementById('loginSuccessMessage').textContent = `Hello, ${user.username}!`;
    } else {
        document.getElementById('loginError').textContent = 'Invalid username or password';
    }
});

// Function to clear messages
function clearMessages() {
    document.getElementById('regSuccessMessage').textContent = '';
    document.getElementById('loginSuccessMessage').textContent = '';
    document.getElementById('loginError').textContent = '';
    document.getElementById('regUsernameError').textContent = '';
    document.getElementById('regEmailError').textContent = '';
    document.getElementById('regPasswordError').textContent = '';
    document.getElementById('regConfirmPasswordError').textContent = '';
}

// Initially display registration form
document.getElementById('registrationContainer').style.display = 'block';
