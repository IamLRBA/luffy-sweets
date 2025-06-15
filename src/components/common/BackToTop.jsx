import React, { useState, useEffect } from 'react';
import { HiOutlineArrowUp } from 'react-icons/hi';
import './BackToTop.css';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button 
      className={`back-to-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Back to top"
    >
      <HiOutlineArrowUp className="back-to-top-icon" />
      {isHovered && <span className="tooltip">Back to Top</span>}
    </button>
  );
};

export default BackToTop;