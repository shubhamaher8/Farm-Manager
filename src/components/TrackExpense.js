// src/components/TrackExpense.js
import React, { useState } from 'react';
import '../styles/TrackExpense.css';

function TrackExpense() {
  const [expense, setExpense] = useState('');
  const [amount, setAmount] = useState('');

  const handleAddExpense = (e) => {
    e.preventDefault();
    // Add expense functionality
    alert(`Expense: ${expense}, Amount: ${amount} added successfully!`);
  };

  return (
    <div className="expense-page">
      <form className="expense-form" onSubmit={handleAddExpense}>
        <h2>Track Expense</h2>
        <input
          type="text"
          placeholder="Expense Name"
          value={expense}
          onChange={(e) => setExpense(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
}

export default TrackExpense;
