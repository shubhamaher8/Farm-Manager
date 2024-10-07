// src/components/Register.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import '../styles/Register.css';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    // Add register functionality
    alert('Registered successfully!');
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <form className="register-form" onSubmit={handleRegister}>
          <h2>Register for Farm Manager</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="register-button">Register</button>
          
          {/* Link to Login Page */}
          <p className="login-link">
            Already have an account? <Link to="/login">Login here</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
