import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Services.css';

const Services = () => {
  return (
    <div className="services">
      <h2>Our Services</h2>
      <p className="services-intro">We offer a range of services to help farmers manage their farms efficiently and productively.</p>
      <div className="container">
        <div className="service-grid">
          

          <div className="service-card">
            <h3>Expense Tracking</h3>
            <p>Monitor farm expenses, manage budgets, and track profitability effectively.</p>
            <Link to="/track-expense" className="service-link">Learn More</Link>
          </div>

          <div className="service-card">
            <h3>Farming Inputs</h3>
            <p>Access to a variety of farming inputs for better productivity.</p>
            <Link to="/farming-inputs" className="service-link">Learn More</Link>
          </div>

          <div className="service-card">
            <h3>Crop Health</h3>
            <p>Monitor and assess the health of your crops with advanced tools.</p>
            <Link to="/crop-health" className="service-link">Learn More</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
