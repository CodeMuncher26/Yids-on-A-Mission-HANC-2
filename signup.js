<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Chavruta to Go - Sign In</title>
  <link rel="stylesheet" href="styles.css" />
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f9f9f9;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
    }
    .container {
      background-color: #ffffff;
      padding: 40px;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      width: 100%;
      max-width: 400px;
      position: relative;
    }
    h1 {
      text-align: center;
      color: #007bff;
    }
    h2 {
      margin-bottom: 20px;
      color: #333;
    }
    label {
      display: block;
      margin: 10px 0 5px;
      color: #555;
    }
    input {
      width: calc(100% - 22px);
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 6px;
      margin-bottom: 15px;
    }
    button {
      width: 100%;
      padding: 12px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 6px;
      font-size: 16px;
      cursor: pointer;
    }
    button:hover {
      background-color: #0056b3;
    }
    .error {
      color: red;
      font-size: 14px;
      margin-bottom: 10px;
    }
    .signin-link {
      position: absolute;
      top: 20px;
      right: 20px;
      font-size: 14px;
    }
    .signin-link a {
      color: #007bff;
      text-decoration: none;
    }
    .signin-link a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <h1>Welcome to Chavruta to Go</h1>
  <div class="container">
    <div class="signin-link">
      <a href="signup.html">Don't have an account? Sign Up!</a>
    </div>
    <form id="authForm">
      <h2>Sign In</h2>
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" required />

      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required />

      <div class="error" id="error"></div>

      <button type="button" onclick="signIn()">Sign In</button>
    </form>
  </div>

  <script>
    function signIn() {
      const username = document.getElementById('username').value.trim();
      const password = document.getElementById('password').value;
      const errorDiv = document.getElementById('error');
      errorDiv.textContent = '';

      if (!username || !password) {
        errorDiv.textContent = 'Please enter both username and password.';
        return;
      }

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
      localStorage.setItem('currentUser', JSON.stringify(user)); // Save logged-in user
      window.location.href = 'dashboard.html'; // Redirect to dashboard
    }
  </script>
</body>
</html>
