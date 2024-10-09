import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/CropInfo.css'; // Ensure you create this CSS file for styling

const CropInfo = () => {
  const location = useLocation();
  const { cropName } = location.state || {}; // Retrieve crop name from the state

  // Sample data for crops with images
  const cropDetails = {
    Wheat: {
      img: 'https://images.squarespace-cdn.com/content/v1/63c44dd4d40ca263a45cc4e3/1674168744026-T11YYATLP0D8CSFY4A8P/unsplash-image-y4xZxzN754M.jpg',
      shortDetail: 'Wheat (Triticum spp.) is one of the most important staple foods in India, providing a major source of carbohydrates. It is primarily grown in the Rabi season and is a key crop for food security.',
      cropYieldPerAcre: '40-50 quintals (approximately 1.5 to 2 tons)',
      requiredPesticide: 'Commonly used pesticides include Chlorpyrifos, Triazophos, and Imidacloprid for controlling pests. Integrated pest management is also recommended.',
      waterRequirement: 'Wheat requires about 450-650 mm of water during its growing season, depending on the variety and climatic conditions.',
      soilType: 'Wheat thrives in well-drained loamy to clayey soils with good fertility. Soil pH should ideally be between 6.0 and 7.5.',
      nutrientRequirements: 'Wheat requires N-P-K (Nitrogen-Phosphorus-Potassium) fertilizers in the ratio of 120:60:40 kg per hectare, along with micronutrients like zinc and sulfur.',
      harvestingSeason: 'Harvesting is usually done in April-May, depending on the sowing date and region.',
      majorProducingStates: 'Major wheat-producing states in India include Uttar Pradesh, Punjab, Haryana, Madhya Pradesh, and Rajasthan.',
    },
    // Additional crops can be added here with their respective images
  };

  const details = cropDetails[cropName] || {}; // Get details based on crop name

  return (
    <div className="crop-info-container">
      <h2>Crop Information</h2>
      <div className="crop-card">
        {/* Image at the top of the card */}
        {details.img && <img src={details.img} alt={cropName} className="crop-image" />}
        <h3>Crop Name: {cropName}</h3>
        <p><strong>Short Detail:</strong> {details.shortDetail}</p>
        <p><strong>Crop Yield per Acre:</strong> {details.cropYieldPerAcre}</p>
        <p><strong>Required Pesticide:</strong> {details.requiredPesticide}</p>
        <p><strong>Water Requirement:</strong> {details.waterRequirement}</p>
        <p><strong>Soil Type:</strong> {details.soilType}</p>
        <p><strong>Nutrient Requirements:</strong> {details.nutrientRequirements}</p>
        <p><strong>Harvesting Season:</strong> {details.harvestingSeason}</p>
        <p><strong>Major Producing States:</strong> {details.majorProducingStates}</p>
      </div>
    </div>
  );
};

export default CropInfo;
