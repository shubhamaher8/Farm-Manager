import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Register from './components/Register';
import TrackExpense from './components/TrackExpense';
import CropHealth from './components/CropHealth';
import FarmingInputs from './components/FarmingInputs';
import Contact from './components/Contact';
import Services from './components/Services';
import Header from './components/Header'; 
import Footer from './components/Footer';
import About from './components/About';
import Dashboard from './components/Dashboard'; // Assuming you have a Dashboard component
import CostTracking from './components/CostTracking'; // Importing the new CostTracking component
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Header /> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/track-expense" element={<TrackExpense />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/crop-health" element={<CropHealth />} />
          <Route path="/farming-inputs" element={<FarmingInputs />} />
          <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard route */}
          <Route path="/cost-tracking" element={<CostTracking />} /> {/* CostTracking route */}
        </Routes>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;

