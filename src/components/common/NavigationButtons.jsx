import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi';
import './NavigationButtons.css';

const NavigationButtons = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isHoveredLeft, setIsHoveredLeft] = useState(false);
  const [isHoveredRight, setIsHoveredRight] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    // Hide buttons on home page, show on all other pages
    setShowButtons(location.pathname !== '/');
  }, [location.pathname]);

  if (!showButtons) return null;

  return (
    <div className="navigation-buttons-container">
      <button 
        className="nav-button prev-button purple-btn"
        onClick={() => navigate(-1)}
        onMouseEnter={() => setIsHoveredLeft(true)}
        onMouseLeave={() => setIsHoveredLeft(false)}
        aria-label="Go back"
      >
        <HiOutlineArrowLeft className="nav-icon" />
        {isHoveredLeft && <span className="tooltip">Previous Page</span>}
      </button>
      
      <button 
        className="nav-button next-button green-btn"
        onClick={() => navigate(1)}
        onMouseEnter={() => setIsHoveredRight(true)}
        onMouseLeave={() => setIsHoveredRight(false)}
        aria-label="Go forward"
      >
        <HiOutlineArrowRight className="nav-icon" />
        {isHoveredRight && <span className="tooltip">Next Page</span>}
      </button>
    </div>
  );
};

export default NavigationButtons;