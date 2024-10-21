import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import '../styles/HomePage.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import bg1 from "./public/bgfm1(1).jpg"
import bg2 from "./public/bgfm2.jpg"
const HomePageContainer = styled.div`
  font-family: 'Montserrat', sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const WelcomeSection = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  overflow: hidden;
`;

const WelcomeImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    display: block;
    transition: opacity 1s ease-in-out;
    opacity: ${(props) => (props.isVisible ? 1 : 0)};
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }

  h2 {
  color : white;
    transition: color 0.3s;
  }

  &:hover h2 {
    color: #fff;
  }

  p {
    color: #cddc39;
    transition: color 0.3s;
  }

  &:hover p {
    color: #cddc39;
  }
`;

const FeaturesSection = styled.div`
  margin-top: 40px;
  text-align: center;

  h3 {
    font-size: 2em;
    margin-bottom: 20px;
    color: #4caf50;
  }
`;

const FeaturesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const FeatureBox = styled.div`
  flex: 1 1 calc(45% - 20px);
  min-width: 250px;
  max-width: 350px;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    background-color: #e8f5e9;
  }

  h4 {
    color: #388e3c;
    font-weight: bold;
    font-size: 1.6em;
    margin-bottom: 10px;
    transition: color 0.3s;

    &:hover {
      color: #1b5e20;
    }
  }

  p {
    font-size: 1.1em;
    color: #555;
  }

  .feature-icon {
    font-size: 3em;
    color: #4caf50;
    margin-bottom: 15px;
  }
`;

const CTAButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  margin-top: 20px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #218838;
  }
`;

function HomePage() {
  // Array of background images
  const images = [
    "https://climate.ai/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/09/shutterstock_1689558058-scaled.jpg.webp",bg1,bg2
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Slide through the images every 5 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <HomePageContainer>
      <WelcomeSection>
        {images.map((image, index) => (
          <WelcomeImage key={index} isVisible={index === currentImageIndex}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </WelcomeImage>
        ))}
        <Overlay>
          <h2>Welcome to the Agricultural Schemes Portal</h2>
          <p>Find the latest schemes and benefits available for farmers.</p>
          <CTAButton href="#features">Explore Schemes</CTAButton>
        </Overlay>
      </WelcomeSection>

      <FeaturesSection id="features">
        <h3>Our Features</h3>
        <FeaturesContainer>
          <FeatureBox>
            <i className="fas fa-leaf feature-icon"></i>
            <h4>Real-time Crop Health Monitoring</h4>
            <p>Monitor your crops in real-time to ensure optimal health and yield.</p>
          </FeatureBox>
          <FeatureBox>
            <i className="fas fa-chart-line feature-icon"></i>
            <h4>Expense and Revenue Tracking</h4>
            <p>Keep track of your expenses and revenues for better financial management.</p>
          </FeatureBox>
          <FeatureBox>
            <i className="fas fa-calendar-alt feature-icon"></i>
            <h4>Customizable Farm Activity Calendar</h4>
            <p>Plan and manage your farming activities with a customizable calendar.</p>
          </FeatureBox>
          <FeatureBox>
            <i className="fas fa-user-graduate feature-icon"></i>
            <h4>Access to Expert Farming Advice</h4>
            <p>Get access to expert advice to improve your farming techniques and yield.</p>
          </FeatureBox>
        </FeaturesContainer>
      </FeaturesSection>
    </HomePageContainer>
  );
}

export default HomePage;







