import React from 'react';
import './MissionSection.css';

const MissionSection = () => {
  return (
    <section className="mission-section">
      <div className="container">
        <h2 className="section-title highlight-text">Our Mission & Values</h2>
        <div className="mission-cards">
          <div className="mission-card">
            <div className="mission-icon" style={{ backgroundColor: 'var(--orange)' }}>
              <i className="fas fa-heart"></i>
            </div>
            <h3>Quality Ingredients</h3>
            <p>We use only the finest natural ingredients to create our sweets</p>
          </div>
          <div className="mission-card">
            <div className="mission-icon" style={{ backgroundColor: 'var(--green)' }}>
              <i className="fas fa-leaf"></i>
            </div>
            <h3>Sustainable Practices</h3>
            <p>Committed to eco-friendly production and packaging</p>
          </div>
          <div className="mission-card">
            <div className="mission-icon" style={{ backgroundColor: 'var(--purple)' }}>
              <i className="fas fa-smile"></i>
            </div>
            <h3>Customer Happiness</h3>
            <p>Bringing joy through every sweet experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;