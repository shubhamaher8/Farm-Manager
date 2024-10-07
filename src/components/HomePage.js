// src/components/HomePage.js
import React from 'react';
import '../styles/HomePage.css';

function HomePage() {
  return (
    <div className="homepage">
      {/* Welcome Section */}
      <div className="welcome-section">
        <div className="welcome-text">
          <h2>Welcome to Farm Manager</h2>
          <p>
            Our platform helps farmers efficiently track farm activities, monitor crop health, track expenses, and manage revenues.
          </p>
          <a href="#features" className="cta-button">Explore Features</a>
        </div>
        <div className="welcome-image">
          <img 
            src="https://climate.ai/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/09/shutterstock_1689558058-scaled.jpg.webp" 
            alt="Farm" 
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section" id="features">
        <h3>Our Features</h3>
        <div className="features-container">
          <div className="feature-box">
            <h4>Real-time Crop Health Monitoring</h4>
            <p>Monitor your crops in real-time to ensure optimal health and yield.</p>
          </div>
          <div className="feature-box">
            <h4>Expense and Revenue Tracking</h4>
            <p>Keep track of your expenses and revenues for better financial management.</p>
          </div>
          <div className="feature-box">
            <h4>Customizable Farm Activity Calendar</h4>
            <p>Plan and manage your farming activities with a customizable calendar.</p>
          </div>
          <div className="feature-box">
            <h4>Access to Expert Farming Advice</h4>
            <p>Get access to expert advice to improve your farming techniques and yield.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
