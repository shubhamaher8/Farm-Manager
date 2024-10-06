// src/components/CropHealth.js
import React, { useState } from 'react';
import '../styles/CropHealth.css';

function CropHealth() {
  const [cropName, setCropName] = useState('');
  const [healthStatus, setHealthStatus] = useState('');

  const handleAddCropHealth = (e) => {
    e.preventDefault();
    // Add crop health functionality
    alert(`Crop: ${cropName}, Health: ${healthStatus} recorded.`);
  };

  return (
    <div className="crop-health-page">
      <form className="crop-health-form" onSubmit={handleAddCropHealth}>
        <h2>Monitor Crop Health</h2>
        <input
          type="text"
          placeholder="Crop Name"
          value={cropName}
          onChange={(e) => setCropName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Health Status"
          value={healthStatus}
          onChange={(e) => setHealthStatus(e.target.value)}
        />
        <button type="submit">Add Crop Health</button>
      </form>
    </div>
  );
}

export default CropHealth;
