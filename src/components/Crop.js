import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import '../styles/Crop.css';  // Corrected path to import the CSS file

// Sample crop data (image URL and crop name)
const crops = [
  { name: 'Wheat', img: 'https://images.squarespace-cdn.com/content/v1/63c44dd4d40ca263a45cc4e3/1674168744026-T11YYATLP0D8CSFY4A8P/unsplash-image-y4xZxzN754M.jpg' },
  { name: 'Rice', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdfTT9VaVZhchnU2OhfHxf7X16hicKJy-7GQ&s' },
  { name: 'Corn', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj-Svkw1HXizAXpA7SOQWTwhn9TIzuz304DQ&s' },
  { name: 'Soybean', img: 'https://www.greendna.in/cdn/shop/files/soybean3_600x.jpg?v=1720192560' },
  { name: 'Tomato', img: 'https://media.post.rvohealth.io/wp-content/uploads/2020/09/AN313-Tomatoes-732x549-Thumb-732x549.jpg' },
  { name: 'Sugarcane', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQTP0wAY8LQEPr6yUtP9sRHRIGmf39E8jjoQ&s' },
  { name: 'Cotton', img: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/plant-seed/m/z/w/8-1cotton-seeds-hybrid4d-wequality-original-imagsgv49yfcghfe.jpeg?q=90&crop=false' },
  { name: 'Potato', img: 'https://post.healthline.com/wp-content/uploads/2020/02/raw-potatoes-potato-1296x728-header.jpg' },
];

// Main Crop component
const Crop = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle card click
  const handleCardClick = (cropName) => {
    navigate('/CropInfo', { state: { cropName } }); // Redirect to CropInfo.js and pass crop name as state
  };

  return (
    <div>
      <h2>Select the Crop to Monitor</h2>
      <div className="crop-container">
        {crops.map((crop, index) => (
          <div key={index} className="crop-card" onClick={() => handleCardClick(crop.name)}> {/* Add onClick handler */}
            <img src={crop.img} alt={crop.name} className="crop-image" />
            <div className="crop-name-overlay">{crop.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Crop;
