import React, { useState } from 'react'; 
import { Link, useNavigate } from 'react-router-dom'; // useNavigate for navigation
import { client, account } from '../appwrite'; // Import 'client' and 'account' from your appwrite.js
import '../styles/Login.css';

function Login() {
  const [email, setEmail] = useState(''); // Use email instead of username for Appwrite session
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // To display error messages
  const [showPassword, setShowPassword] = useState(false); // Toggle password visibility
  const navigate = useNavigate(); // Initialize useNavigate for redirection

  // Handle login submission
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    try {
      // Login the user using Appwrite
      await account.createEmailPasswordSession(email, password); // Appwrite uses email, not username
      alert('Logged in successfully!');
      navigate('/dashboard'); // Redirect to dashboard after login
    } catch (error) {
      console.error('Login failed:', error.message);
      setErrorMessage('Invalid credentials. Please try again.');
    }
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <form className="login-form" onSubmit={handleLogin}>
          <h2>Login to Farm Manager</h2>
          <input
            type="email" // Change input type to email
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="button" className="toggle-password" onClick={togglePasswordVisibility}>
              {showPassword ? '👁️' : '👁️'}
            </button>
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button type="submit" className="login-button">Login</button>
          <a href="#" className="forgot-password">Forgot Password?</a>

          <p className="register-link">
            Don't have an account? <Link to="/register">Register here</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
