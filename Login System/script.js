const users = [
  { username: "john_doe", password: "password123" },
  { username: "jane_smith", password: "mysecurepassword" },
  { username: "sam_brown", password: "12345678" },
  { username: "alice_jones", password: "alicepassword" }
];

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
      document.getElementById('successMessage').textContent = `Welcome, ${user.username}!`;
  } else {
      document.getElementById('loginError').textContent = 'Invalid username or password';
  }
});

// Function to clear messages
function clearMessages() {
  document.getElementById('successMessage').textContent = '';
  document.getElementById('loginError').textContent = '';
}
