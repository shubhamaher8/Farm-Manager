import React, { useState, useEffect } from 'react';
import '../styles/Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to toggle menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Placeholder for checking login status
  useEffect(() => {
    const checkLoginStatus = () => {
      // Implement your own login status check here
      setIsLoggedIn(false); // Default to false for now
    };

    checkLoginStatus();
  }, []);

  // Placeholder for logout logic
  const handleLogout = () => {
    // Implement your own logout logic here
    setIsLoggedIn(false); // Update state to reflect logout
  };

  return (
    <header className="header">
      <div className="container">
        <div className='logobox'>
          <img
            src="https://i.ibb.co/n3MCnZF/crop-removebg-preview.png"
            alt="Farm Manager Logo"
            className="logo"
          />
          <h1 className="site-title">Farm Manager</h1>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation Bar */}
        <nav className={`navbar ${menuOpen ? 'nav-active' : ''}`}>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/About">About</a></li>
            <li><a href="/Services">Services</a></li>
            <li><a href="/dashboard">Dashboard</a></li>
          </ul>
        </nav>

        {/* Call-to-Action Button */}
        <div className="cta-button">
          {isLoggedIn ? (
            <button onClick={handleLogout} className="btn">Logout</button>
          ) : (
            <a href="/Login" className="btn">Login</a>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
