import React, { useState } from 'react';
import '../styles/Header.css';


function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <img
          src="https://i.ibb.co/n3MCnZF/crop-removebg-preview.png"
          alt="Farm Manager Logo"
          className="logo"
        />
       <h1 className="site-title">Farm Manager</h1>

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
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>

        {/* Call-to-Action Button */}
        <div className="cta-button">
          <a href="/Login" className="btn">Login</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
