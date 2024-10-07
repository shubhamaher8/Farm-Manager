// src/components/About.js
import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <section className="about">
      <div className="container">
        <h2>About Farm Manager</h2>
        <p>
          Farm Manager is an innovative web application designed to help farmers efficiently manage their farming activities. Our platform provides a comprehensive suite of tools to streamline crop management, track expenses, and access vital information about farming techniques.
        </p>
        <h3>Our Mission</h3>
        <p>
          Our mission is to empower farmers with the knowledge and resources they need to maximize their productivity and profitability. By leveraging technology, we aim to simplify farming operations and make it easier for farmers to make informed decisions.
        </p>
        <h3>Key Features</h3>
        <ul>
          <li>Crop management tools for tracking growth and health.</li>
          <li>Expense tracking to monitor costs and profits.</li>
          <li>Weather forecasts to help plan activities.</li>
          <li>Access to government schemes and subsidies.</li>
          <li>Yield estimation for better planning.</li>
        </ul>
        <h3>Why Choose Us?</h3>
        <p>
          Our user-friendly interface and powerful features are tailored to meet the needs of modern farmers. With Farm Manager, you can take control of your farm operations and ensure a sustainable and profitable future.
        </p>
      </div>
    </section>
  );
}

export default About;
