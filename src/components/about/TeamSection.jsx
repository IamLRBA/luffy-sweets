import React from 'react';
import './TeamSection.css';

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Luffy D. Monkey',
      position: 'CEO & Founder',
      image: '/images/ceo.jpg',
      description: 'Visionary leader with a passion for sweet innovations',
      isCeo: true
    },
    {
      id: 2,
      name: 'Nami Swan',
      position: 'Head of Production',
      image: '/images/nami.jpg',
      description: 'Ensures every sweet meets our quality standards',
      isCeo: false
    },
    {
      id: 3,
      name: 'Sanji Vinsmoke',
      position: 'Master Chef',
      image: '/images/sanji.jpg',
      description: 'Creates our delicious flavor profiles',
      isCeo: false
    },
    {
      id: 4,
      name: 'Tony Chopper',
      position: 'Quality Control',
      image: '/images/chopper.jpg',
      description: 'Guarantees consistency in every batch',
      isCeo: false
    },
    {
      id: 5,
      name: 'Robin Nico',
      position: 'Marketing Director',
      image: '/images/robin.jpg',
      description: 'Shares our sweet story with the world',
      isCeo: false
    }
  ];

  return (
    <section className="team-section">
      <div className="container">
        <h2 className="section-title">Meet Our Sweet Team</h2>
        <div className="team-grid">
          {teamMembers.map(member => (
            <div 
              key={member.id} 
              className={`team-card ${member.isCeo ? 'ceo' : ''}`}
            >
              <div className="team-image">
                <img src={member.image} alt={member.name} />
                {member.isCeo && <span className="ceo-badge">CEO</span>}
              </div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <p className="position">{member.position}</p>
                <p className="description">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;