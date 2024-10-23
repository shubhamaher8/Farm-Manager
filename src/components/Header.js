import React, { useState, useEffect } from 'react';
import '../styles/Header.css';
import { account } from '../appwrite'; // Assuming you're using Appwrite

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to toggle menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Check if user is logged in on component mount
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const user = await account.get(); // Fetch the current user session from Appwrite
        setIsLoggedIn(true); // If user is logged in, update state
      } catch (error) {
        setIsLoggedIn(false); // If no user is logged in, set false
      }
    };

    checkLoginStatus();
  }, []);

  // Handle logout
  const handleLogout = async () => {
    try {
      await account.deleteSession('current'); // Delete the current session (log out)
      setIsLoggedIn(false); // Update state to reflect logout
    } catch (error) {
      console.error('Logout failed:', error);
    }
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
            <li><a href="/contact">Contact</a></li>
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
