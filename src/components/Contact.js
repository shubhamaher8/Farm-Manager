// src/components/Contact.js
import React, { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send the data to a server)
    alert(`Message sent!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
    // Clear the form
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section className="contact">
      <div className="container">
        <h2>Contact Us</h2>
        <p>If you have any questions, suggestions, or feedback, please feel free to reach out!</p>
        
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

        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>Email: info@farmmanager.com</p>
          <p>Phone: +1 (555) 123-4567</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
