// src/components/FarmingInputs.js
import React, { useState } from 'react';
import '../styles/FarmingInputs.css';

function FarmingInputs() {
  const [inputName, setInputName] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleAddInput = (e) => {
    e.preventDefault();
    // Add farming input functionality
    alert(`Input: ${inputName}, Quantity: ${quantity} added.`);
  };

  return (
    <div className="farming-inputs-page">
      <form className="farming-inputs-form" onSubmit={handleAddInput}>
        <h2>Farming Inputs</h2>
        <input
          type="text"
          placeholder="Input Name (e.g., Fertilizer, Seeds)"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button type="submit">Add Input</button>
      </form>
    </div>
  );
}

export default FarmingInputs;
