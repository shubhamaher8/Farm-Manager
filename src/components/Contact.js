// src/components/Contact.js
import React, { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact-page">
      <div className="contact-left">
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-description">We are here to help you! Please reach out if you have any questions, feedback, or suggestions.</p>
      </div>

      <div className="contact-right">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Your Name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <textarea 
            placeholder="Your Message" 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            required 
          ></textarea>
          <button type="submit">Send Message</button>
        </form>

        <p className="contact-info">
          Email: info@farmmanager.com<br/>
          Phone: +1 (555) 123-4567
        </p>
      </div>
    </div>
  );
}

export default Contact;


