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
            <h3>Crop Management</h3>
            <p>Tools for tracking crop growth, yield, and health to maximize productivity.</p>
            <Link to="/crop-management" className="service-link">Learn More</Link>
          </div>

          <div className="service-card">
            <h3>Expense Tracking</h3>
            <p>Monitor farm expenses, manage budgets, and track profitability effectively.</p>
            <Link to="/expense-tracking" className="service-link">Learn More</Link>
          </div>

          <div className="service-card">
            <h3>Weather Forecasts</h3>
            <p>Access to real-time weather data to help farmers plan their activities better.</p>
            <Link to="/weather-forecasts" className="service-link">Learn More</Link>
          </div>

          <div className="service-card">
            <h3>Yield Estimation</h3>
            <p>Estimate your crop yields for better planning and marketing strategies.</p>
            <Link to="/yield-estimation" className="service-link">Learn More</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;