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
    Rice: {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdfTT9VaVZhchnU2OhfHxf7X16hicKJy-7GQ&s',
      shortDetail: 'Rice (Oryza sativa) is a staple food for a large part of the world\'s population, especially in Asia. It is grown in both Kharif and Rabi seasons.',
      cropYieldPerAcre: '60-80 quintals (approximately 2.5 to 3 tons)',
      requiredPesticide: 'Commonly used pesticides include Carbofuran, Chlorpyrifos, and Imidacloprid. Integrated pest management is also recommended.',
      waterRequirement: 'Rice requires about 1200-1500 mm of water during its growing season.',
      soilType: 'Rice thrives in clayey to loamy soils with good water retention capacity. Soil pH should ideally be between 5.5 and 6.5.',
      nutrientRequirements: 'Rice requires N-P-K fertilizers in the ratio of 100:50:50 kg per hectare, along with micronutrients like zinc and iron.',
      harvestingSeason: 'Harvesting is usually done in November-December for Kharif season and April-May for Rabi season.',
      majorProducingStates: 'Major rice-producing states in India include West Bengal, Uttar Pradesh, Punjab, Tamil Nadu, and Andhra Pradesh.',
    },
    Corn: {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj-Svkw1HXizAXpA7SOQWTwhn9TIzuz304DQ&s',
      shortDetail: 'Corn (Zea mays) is a major cereal crop grown for food, fodder, and industrial purposes. It is grown in both Kharif and Rabi seasons.',
      cropYieldPerAcre: '50-60 quintals (approximately 2 to 2.5 tons)',
      requiredPesticide: 'Commonly used pesticides include Carbofuran, Chlorpyrifos, and Imidacloprid. Integrated pest management is also recommended.',
      waterRequirement: 'Corn requires about 500-800 mm of water during its growing season.',
      soilType: 'Corn thrives in well-drained loamy to sandy loam soils with good fertility. Soil pH should ideally be between 5.8 and 7.0.',
      nutrientRequirements: 'Corn requires N-P-K fertilizers in the ratio of 120:60:40 kg per hectare, along with micronutrients like zinc and sulfur.',
      harvestingSeason: 'Harvesting is usually done in October-November for Kharif season and March-April for Rabi season.',
      majorProducingStates: 'Major corn-producing states in India include Karnataka, Andhra Pradesh, Tamil Nadu, Rajasthan, and Maharashtra.',
    },
    Soybean: {
      img: 'https://www.greendna.in/cdn/shop/files/soybean3_600x.jpg?v=1720192560',
      shortDetail: 'Soybean (Glycine max) is a major oilseed crop grown for its protein-rich seeds. It is primarily grown in the Kharif season.',
      cropYieldPerAcre: '15-20 quintals (approximately 0.6 to 0.8 tons)',
      requiredPesticide: 'Commonly used pesticides include Chlorpyrifos, Imidacloprid, and Lambda-cyhalothrin. Integrated pest management is also recommended.',
      waterRequirement: 'Soybean requires about 400-600 mm of water during its growing season.',
      soilType: 'Soybean thrives in well-drained loamy to clayey soils with good fertility. Soil pH should ideally be between 6.0 and 7.5.',
      nutrientRequirements: 'Soybean requires N-P-K fertilizers in the ratio of 20:60:40 kg per hectare, along with micronutrients like zinc and boron.',
      harvestingSeason: 'Harvesting is usually done in October-November, depending on the sowing date and region.',
      majorProducingStates: 'Major soybean-producing states in India include Madhya Pradesh, Maharashtra, Rajasthan, Karnataka, and Andhra Pradesh.',
    },
    Tomato: {
      img: 'https://media.post.rvohealth.io/wp-content/uploads/2020/09/AN313-Tomatoes-732x549-Thumb-732x549.jpg',
      shortDetail: 'Tomato (Solanum lycopersicum) is a widely grown vegetable crop known for its culinary uses. It is grown in both Kharif and Rabi seasons.',
      cropYieldPerAcre: '200-300 quintals (approximately 8 to 12 tons)',
      requiredPesticide: 'Commonly used pesticides include Chlorpyrifos, Imidacloprid, and Lambda-cyhalothrin. Integrated pest management is also recommended.',
      waterRequirement: 'Tomato requires about 600-800 mm of water during its growing season.',
      soilType: 'Tomato thrives in well-drained loamy to sandy loam soils with good fertility. Soil pH should ideally be between 6.0 and 7.5.',
      nutrientRequirements: 'Tomato requires N-P-K fertilizers in the ratio of 120:60:60 kg per hectare, along with micronutrients like calcium and magnesium.',
      harvestingSeason: 'Harvesting is usually done in December-January for Kharif season and April-May for Rabi season.',
      majorProducingStates: 'Major tomato-producing states in India include Andhra Pradesh, Karnataka, Madhya Pradesh, Odisha, and Gujarat.',
    },
    Sugarcane: {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQTP0wAY8LQEPr6yUtP9sRHRIGmf39E8jjoQ&s',
      shortDetail: 'Sugarcane (Saccharum officinarum) is a major cash crop grown for sugar production. It is grown in both Kharif and Rabi seasons.',
      cropYieldPerAcre: '300-400 quintals (approximately 12 to 16 tons)',
      requiredPesticide: 'Commonly used pesticides include Chlorpyrifos, Imidacloprid, and Lambda-cyhalothrin. Integrated pest management is also recommended.',
      waterRequirement: 'Sugarcane requires about 1500-2500 mm of water during its growing season.',
      soilType: 'Sugarcane thrives in well-drained loamy to clayey soils with good fertility. Soil pH should ideally be between 6.0 and 7.5.',
      nutrientRequirements: 'Sugarcane requires N-P-K fertilizers in the ratio of 250:100:100 kg per hectare, along with micronutrients like zinc and iron.',
      harvestingSeason: 'Harvesting is usually done in November-December for Kharif season and April-May for Rabi season.',
      majorProducingStates: 'Major sugarcane-producing states in India include Uttar Pradesh, Maharashtra, Karnataka, Tamil Nadu, and Andhra Pradesh.',
    },
    Cotton: {
      img: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/plant-seed/m/z/w/8-1cotton-seeds-hybrid4d-wequality-original-imagsgv49yfcghfe.jpeg?q=90&crop=false',
      shortDetail: 'Cotton (Gossypium spp.) is a major fiber crop grown for its lint. It is primarily grown in the Kharif season.',
      cropYieldPerAcre: '8-10 quintals (approximately 0.3 to 0.4 tons)',
      requiredPesticide: 'Commonly used pesticides include Chlorpyrifos, Imidacloprid, and Lambda-cyhalothrin. Integrated pest management is also recommended.',
      waterRequirement: 'Cotton requires about 700-900 mm of water during its growing season.',
      soilType: 'Cotton thrives in well-drained loamy to sandy loam soils with good fertility. Soil pH should ideally be between 6.0 and 7.5.',
      nutrientRequirements: 'Cotton requires N-P-K fertilizers in the ratio of 60:30:30 kg per hectare, along with micronutrients like zinc and boron.',
      harvestingSeason: 'Harvesting is usually done in October-November, depending on the sowing date and region.',
      majorProducingStates: 'Major cotton-producing states in India include Maharashtra, Gujarat, Telangana, Andhra Pradesh, and Madhya Pradesh.',
    },
    Potato: {
      img: 'https://post.healthline.com/wp-content/uploads/2020/02/raw-potatoes-potato-1296x728-header.jpg',
      shortDetail: 'Potato (Solanum tuberosum) is a major tuber crop grown for its edible tubers. It is grown in both Kharif and Rabi seasons.',
      cropYieldPerAcre: '80-100 quintals (approximately 3 to 4 tons)',
      requiredPesticide: 'Commonly used pesticides include Chlorpyrifos, Imidacloprid, and Lambda-cyhalothrin. Integrated pest management is also recommended.',
      waterRequirement: 'Potato requires about 500-700 mm of water during its growing season.',
      soilType: 'Potato thrives in well-drained loamy to sandy loam soils with good fertility. Soil pH should ideally be between 5.5 and 7.0.',
      nutrientRequirements: 'Potato requires N-P-K fertilizers in the ratio of 120:60:60 kg per hectare, along with micronutrients like calcium and magnesium.',
      harvestingSeason: 'Harvesting is usually done in December-January for Kharif season and April-May for Rabi season.',
      majorProducingStates: 'Major potato-producing states in India include Uttar Pradesh, West Bengal, Bihar, Gujarat, and Madhya Pradesh.',
    },
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
