import React, { useState } from 'react';
import './TeamSection.css';
import { 
  FaTimes, 
  FaCrown, 
  FaFlask, 
  FaUtensils, 
  FaCheckCircle, 
  FaBullhorn,
  FaWhatsapp,
  FaInstagram,
  FaFacebook
} from 'react-icons/fa';

const TeamSection = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  
  const teamMembers = [
    {
      id: 1,
      name: 'Luffy D. Monkey',
      position: 'CEO & Founder',
      image: '/images/ceo.jpg',
      description: 'Visionary leader with a passion for sweet innovations. Luffy founded Luffy Sweets in 2015 with the dream of creating the most delightful candies in East Africa.',
      isCeo: true,
      funFact: 'Can identify any candy flavor blindfolded!',
      icon: <FaCrown />,
      whatsapp: '#',
      instagram: '#',
      facebook: '#'
    },
    {
      id: 2,
      name: 'Nami Swan',
      position: 'Head of Production',
      image: '/images/nami.jpg',
      description: 'Ensures every sweet meets our quality standards. With a background in food science, Nami oversees our entire production process.',
      isCeo: false,
      funFact: 'Has a sweet tooth for citrus flavors',
      icon: <FaFlask />,
      whatsapp: '#',
      instagram: '#',
      facebook: '#'
    },
    {
      id: 3,
      name: 'Sanji Vinsmoke',
      position: 'Master Chef',
      image: '/images/sanji.jpg',
      description: 'Creates our delicious flavor profiles. Combines traditional candy-making with innovative new approaches.',
      isCeo: false,
      funFact: 'Developed our best-selling mango chili candy',
      icon: <FaUtensils />,
      whatsapp: '#',
      instagram: '#',
      facebook: '#'
    },
    {
      id: 4,
      name: 'Tony Chopper',
      position: 'Quality Control',
      image: '/images/chopper.jpg',
      description: 'Guarantees consistency in every batch. Tests every production run to ensure high standards.',
      isCeo: false,
      funFact: 'Can detect sugar content by taste alone',
      icon: <FaCheckCircle />,
      whatsapp: '#',
      instagram: '#',
      facebook: '#'
    },
    {
      id: 5,
      name: 'Robin Nico',
      position: 'Marketing Director',
      image: '/images/robin.jpg',
      description: 'Shares our sweet story with the world. Crafts brand messaging that reflects our values.',
      isCeo: false,
      funFact: 'Originally joined as a summer intern',
      icon: <FaBullhorn />,
      whatsapp: '#',
      instagram: '#',
      facebook: '#'
    },
    {
      id: 5,
      name: 'Robin Nico',
      position: 'Marketing Director',
      image: '/images/robin.jpg',
      description: 'Shares our sweet story with the world. Crafts brand messaging that reflects our values.',
      isCeo: false,
      funFact: 'Originally joined as a summer intern',
      icon: <FaBullhorn />,
      whatsapp: '#',
      instagram: '#',
      facebook: '#'
    }
  ];

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <section className="team-section">
      <div className="container">
        <h2 className="section-title highlight-text">Meet Our Sweet Team</h2>
        <div className="team-container">
          {/* CEO Card */}
          <div 
            className={`team-card ceo ${expandedCard === 1 ? 'expanded' : ''}`}
            onClick={() => toggleCard(1)}
          >
            <div className="card-circle">
              <div className="team-image">
                <img src={teamMembers[0].image} alt={teamMembers[0].name} />
              </div>
              <div className="role-badge ceo-badge">
                <FaCrown className="badge-icon" />
              </div>
              <div className="social-icons-top">
                <a href={teamMembers[0].whatsapp} aria-label="WhatsApp"><FaWhatsapp /></a>
                <a href={teamMembers[0].instagram} aria-label="Instagram"><FaInstagram /></a>
                <a href={teamMembers[0].facebook} aria-label="Facebook"><FaFacebook /></a>
              </div>
            </div>
            <div className="team-info">
              <h3>{teamMembers[0].name}</h3>
              <p className="position">{teamMembers[0].position}</p>
              <div className="description-container">
                <p className="description">{teamMembers[0].description}</p>
                {expandedCard === 1 && (
                  <div className="additional-info">
                    <p className="fun-fact">Fun fact: {teamMembers[0].funFact}</p>
                    <button className="close-btn" onClick={(e) => {
                      e.stopPropagation();
                      setExpandedCard(null);
                    }}><FaTimes /></button>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Team Members Slider */}
          <div className="team-slider-container">
            <div className="team-slider">
              {teamMembers.slice(1).map(member => (
                <div 
                  key={member.id} 
                  className={`team-card ${expandedCard === member.id ? 'expanded' : ''}`}
                  onClick={() => toggleCard(member.id)}
                >
                  <div className="card-circle">
                    <div className="team-image">
                      <img src={member.image} alt={member.name} />
                    </div>
                    <div className="role-badge">
                      {member.icon}
                    </div>
                    <div className="social-icons-top">
                      <a href={member.whatsapp} aria-label="WhatsApp"><FaWhatsapp /></a>
                      <a href={member.instagram} aria-label="Instagram"><FaInstagram /></a>
                      <a href={member.facebook} aria-label="Facebook"><FaFacebook /></a>
                    </div>
                  </div>
                  <div className="team-info">
                    <h3>{member.name}</h3>
                    <p className="position">{member.position}</p>
                    <div className="description-container">
                      <p className="description">{member.description}</p>
                      {expandedCard === member.id && (
                        <div className="additional-info">
                          <p className="fun-fact">Fun fact: {member.funFact}</p>
                          <button className="close-btn" onClick={(e) => {
                            e.stopPropagation();
                            setExpandedCard(null);
                          }}><FaTimes /></button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;