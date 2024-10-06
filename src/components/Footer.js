// src/components/Footer.js
import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>Contact: your-email@example.com</p>
      <div className="social-media">
        <img src="https://img.icons8.com/ios-glyphs/30/000000/facebook.png" alt="Facebook" />
        <img src="https://img.icons8.com/ios-glyphs/30/000000/instagram-new.png" alt="Instagram" />
      </div>
    </footer>
  );
}

export default Footer;
