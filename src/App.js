// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Register from './components/Register';
import TrackExpense from './components/TrackExpense';
import CropHealth from './components/CropHealth';
import FarmingInputs from './components/FarmingInputs';
import Contact from './components/Contact';
import Header from './components/Header'; // Importing Header component
import Footer from './components/Footer'; // Importing Footer component
import About from './components/About';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Header /> {/* Using the Header component */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/track-expense" element={<TrackExpense />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/crop-health" element={<CropHealth />} />
          <Route path="/farming-inputs" element={<FarmingInputs />} />
        </Routes>
        <Footer /> {/* Using the Footer component */}
      </div>
    </Router>
  );
}

export default App;
