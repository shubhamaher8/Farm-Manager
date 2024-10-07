// src/components/Footer.js
import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Contact Section */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: <a href="mailto:your-email@example.com">your-email@example.com</a></p>
          <p>Phone: <a href="tel:+1234567890">+123-456-7890</a></p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-media">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <img src="https://img.icons8.com/ios-glyphs/30/ffffff/facebook.png" alt="Facebook" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <img src="https://img.icons8.com/ios-glyphs/30/ffffff/instagram-new.png" alt="Instagram" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <img src="https://img.icons8.com/ios-glyphs/30/ffffff/twitter.png" alt="Twitter" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <img src="https://img.icons8.com/ios-glyphs/30/ffffff/linkedin.png" alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Farm Manager. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

