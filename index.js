 function signIn() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorDiv = document.getElementById('error');
  errorDiv.textContent = '';

  // Retrieve users from localStorage or initialize an empty array
  const users = JSON.parse(localStorage.getItem('users')) || [];

  const user = users.find(user => user.username === username);

  if (!user) {
    errorDiv.textContent = 'Username does not exist. Please sign up.';
    return;
  }

  if (user.password !== password) {
    errorDiv.textContent = 'Incorrect password. Please try again.';
    return;
  }

  alert('Sign-in successful! Welcome back!');
  window.location.href = 'dashboard.html'; // Redirect to the dashboard or homepage
}
