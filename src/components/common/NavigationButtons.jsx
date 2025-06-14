import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NavigationButtons.css';

const NavigationButtons = () => {
  const navigate = useNavigate();

  return (
    <div className="floating-nav-buttons">
      <button 
        className="btn btn-secondary nav-button" 
        onClick={() => navigate(-1)}
        aria-label="Previous page"
      >
        <i className="fas fa-arrow-left"></i>
      </button>
      <button 
        className="btn btn-primary nav-button" 
        onClick={() => navigate(1)}
        aria-label="Next page"
      >
        <i className="fas fa-arrow-right"></i>
      </button>
    </div>
  );
};

export default NavigationButtons;