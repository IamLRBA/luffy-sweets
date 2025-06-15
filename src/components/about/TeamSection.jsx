import React, { useState } from 'react';
import './TeamSection.css';

const TeamSection = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  
  const teamMembers = [
    {
      id: 1,
      name: 'Luffy D. Monkey',
      position: 'CEO & Founder',
      image: '/images/ceo.jpg',
      description: 'Visionary leader with a passion for sweet innovations. Luffy founded Luffy Sweets in 2015 with the dream of creating the most delightful candies in East Africa. His relentless energy and creativity drive our company forward.',
      isCeo: true,
      funFact: 'Can identify any candy flavor blindfolded!'
    },
    {
      id: 2,
      name: 'Nami Swan',
      position: 'Head of Production',
      image: '/images/nami.jpg',
      description: 'Ensures every sweet meets our quality standards. With a background in food science, Nami oversees our entire production process with meticulous attention to detail.',
      isCeo: false,
      funFact: 'Has a sweet tooth for citrus flavors'
    },
    {
      id: 3,
      name: 'Sanji Vinsmoke',
      position: 'Master Chef',
      image: '/images/sanji.jpg',
      description: 'Creates our delicious flavor profiles. Sanji combines traditional candy-making techniques with innovative new approaches to create our signature tastes.',
      isCeo: false,
      funFact: 'Developed our best-selling mango chili candy'
    },
    {
      id: 4,
      name: 'Tony Chopper',
      position: 'Quality Control',
      image: '/images/chopper.jpg',
      description: 'Guarantees consistency in every batch. Chopper tests every production run to ensure it meets our high standards for texture, flavor, and appearance.',
      isCeo: false,
      funFact: 'Can detect sugar content by taste alone'
    },
    {
      id: 5,
      name: 'Robin Nico',
      position: 'Marketing Director',
      image: '/images/robin.jpg',
      description: 'Shares our sweet story with the world. Robin crafts our brand messaging and ensures our values come through in every customer interaction.',
      isCeo: false,
      funFact: 'Originally joined as a summer intern'
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
    <section className="team-section">
      <div className="container">
        <h2 className="section-title highlight-text">Meet Our Sweet Team</h2>
        <div className="team-container">
          <div 
            className={`team-card ceo ${expandedCard === 1 ? 'expanded' : ''}`}
            onClick={() => toggleCard(1)}
          >
            <div className="team-image">
              <img src={teamMembers[0].image} alt={teamMembers[0].name} />
              <span className="ceo-badge">Founder & CEO</span>
            </div>
            <div className="team-info">
              <h3>{teamMembers[0].name}</h3>
              <p className="position">{teamMembers[0].position}</p>
              <p className="description">{teamMembers[0].description}</p>
              {expandedCard === 1 && (
                <div className="additional-info">
                  <p className="fun-fact">Fun fact: {teamMembers[0].funFact}</p>
                  <button className="close-btn" onClick={(e) => {
                    e.stopPropagation();
                    setExpandedCard(null);
                  }}>×</button>
                </div>
              )}
            </div>
          </div>
          
          <div className="team-grid">
            {teamMembers.slice(1).map(member => (
              <div 
                key={member.id} 
                className={`team-card ${expandedCard === member.id ? 'expanded' : ''}`}
                onClick={() => toggleCard(member.id)}
              >
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p className="position">{member.position}</p>
                  <p className="description">{member.description}</p>
                  {expandedCard === member.id && (
                    <div className="additional-info">
                      <p className="fun-fact">Fun fact: {member.funFact}</p>
                      <button className="close-btn" onClick={(e) => {
                        e.stopPropagation();
                        setExpandedCard(null);
                      }}>×</button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;