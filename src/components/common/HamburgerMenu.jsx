import React from 'react';
import './HamburgerMenu.css';

const HamburgerMenu = ({ isOpen, toggle }) => {
  return (
    <button 
      className={`hamburger ${isOpen ? 'open' : ''}`} 
      onClick={toggle}
      aria-label="Menu"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default HamburgerMenu;