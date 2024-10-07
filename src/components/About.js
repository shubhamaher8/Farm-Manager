// src/components/About.js
import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <section className="about">
      <h2>About Farm Manager</h2>
      <div className="container">
        <div className="about-content">
          <div className="about-section">
            <p>
              Farm Manager is an innovative web application designed to help farmers efficiently manage their farming activities. Our platform provides a comprehensive suite of tools to streamline crop management, track expenses, and access vital information about farming techniques.
            </p>
          </div>
          
          <div className="about-section">
            <h3>Our Mission</h3>
            <p>
              Our mission is to empower farmers with the knowledge and resources they need to maximize their productivity and profitability. By leveraging technology, we aim to simplify farming operations and make it easier for farmers to make informed decisions.
            </p>
          </div>
          
          <div className="about-section">
            <h3>Key Features</h3>
            <div className="features-grid">
              <div className="feature-item">
                <h4>Crop Management</h4>
                <p>Tools for tracking growth and health.</p>
              </div>
              <div className="feature-item">
                <h4>Expense Tracking</h4>
                <p>Monitor costs and profits.</p>
              </div>
              <div className="feature-item">
                <h4>Weather Forecasts</h4>
                <p>Help plan activities.</p>
              </div>
              <div className="feature-item">
                <h4>Yield Estimation</h4>
                <p>For better planning.</p>
              </div>
            </div>
          </div>
          
          <div className="about-section">
            <h3>Why Choose Us?</h3>
            <ul>
              <li>User-friendly interface designed for farmers</li>
              <li>Comprehensive tools for all aspects of farm management</li>
              <li>Regular updates based on user feedback</li>
              <li>Dedicated customer support</li>
              <li>Affordable pricing plans for farms of all sizes</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;