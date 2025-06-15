import React, { useState } from 'react';
import './MissionSection.css';

const MissionSection = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const missionCards = [
    {
      id: 1,
      title: "Quality Ingredients",
      icon: "fa-heart",
      color: "var(--orange)",
      description: "We source only the finest natural ingredients from trusted suppliers. Our commitment to quality means we never use artificial flavors, colors, or preservatives. Each ingredient is carefully selected for its purity and taste profile to ensure the best possible candy experience.",
      shortDescription: "We use only the finest natural ingredients to create our sweets"
    },
    {
      id: 2,
      title: "Sustainable Practices",
      icon: "fa-leaf",
      color: "var(--green)",
      description: "From farm to wrapper, we prioritize eco-friendly practices. Our packaging is 100% biodegradable, we've reduced water usage in production by 40%, and we partner with local farmers who use sustainable agriculture methods. We're committed to leaving a sweet taste, not a carbon footprint.",
      shortDescription: "Committed to eco-friendly production and packaging"
    },
    {
      id: 3,
      title: "Customer Happiness",
      icon: "fa-smile",
      color: "var(--purple)",
      description: "Your joy is our ultimate metric. We go beyond satisfaction to create delightful experiences - from the moment you see our packaging to the last bite. Our customer service team is trained to turn any concern into a positive memory, because happy customers are the heart of our business.",
      shortDescription: "Bringing joy through every sweet experience"
    }
  ];

  const toggleCard = (id) => {
    if (expandedCard === id) {
      setExpandedCard(null);
    } else {
      setExpandedCard(id);
    }
  };

  return (
    <section className="mission-section">
      <div className="container">
        <h2 className="section-title highlight-text">Our Mission & Values</h2>
        <div className={`mission-container ${expandedCard ? 'has-expanded' : ''}`}>
          {missionCards.map(card => (
            <div 
              key={card.id}
              className={`mission-card ${expandedCard === card.id ? 'expanded' : ''} ${expandedCard && expandedCard !== card.id ? 'minimized' : ''}`}
              style={{ '--card-color': card.color }}
              onClick={() => toggleCard(card.id)}
            >
              <div className="mission-icon">
                <i className={`fas ${card.icon}`}></i>
              </div>
              <h3>{card.title}</h3>
              <p className="short-description">{card.shortDescription}</p>
              <div className="full-description">
                <p>{card.description}</p>
                {expandedCard === card.id && (
                  <button 
                    className="close-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedCard(null);
                    }}
                  >
                    ×
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;