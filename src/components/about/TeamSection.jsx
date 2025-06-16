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
      name: 'The Late Mr. Duncan Lufafa',
      position: 'Founder',
      image: '/images/ceo.jpg',
      description: 'Luffy Sweets was born from the vision of the late Mr. Duncan Lufafa a passionate entrepreneur who believed in bringing joy to people through candy.',
      isCeo: true,
      funFact: 'Can identify any candy flavor blindfolded!',
      icon: <FaCrown />,
      whatsapp: '#',
      instagram: '#',
      facebook: '#'
    },
    {
      id: 2,
      name: 'Billy Lufafa',
      position: 'Managing Director',
      image: '/images/billy.jpg',
      description: 'Now leading LD Group Investments LTD, the Managing Director is responsible for overall strategy, growth, and operations of Luffy Sweets. With a commitment to honoring the founder’s vision, they focus on expanding the brand while staying rooted in quality and innovation.',
      isCeo: false,
      funFact: 'Has a sweet tooth for citrus flavors',
      icon: <FaCheckCircle />,
      whatsapp: '#',
      instagram: '#',
      facebook: '#'
    },
    {
      id: 3,
      name: 'Kenneth Musasizi',
      position: 'Secretary /Director',
      image: '/images/sizi.jpg',
      description: 'Sizi plays a crucial role in keeping the company organized, connected, and efficient. As Secretary, he bridges communication between departments, ensures regulatory compliance, and supports execution of the company’s core initiatives especially those that bring Luffy Sweets closer to communities.',
      isCeo: false,
      funFact: 'Developed our best-selling mango chili candy',
      icon: <FaUtensils />,
      whatsapp: '#',
      instagram: '#',
      facebook: '#'
    },
    {
      id: 4,
      name: 'Samson Kilenga',
      position: 'Head of Production',
      image: '/images/kilenga.jpg',
      description: 'Responsible for overseeing the full production cycle, ensuring each batch is crafted with precision, safety, and consistency. From sourcing ingredients to packaging, their focus is quality in every sweet.',
      isCeo: false,
      funFact: 'Can detect sugar content by taste alone',
      icon: <FaFlask />,
      whatsapp: '#',
      instagram: '#',
      facebook: '#'
    },
    {
      id: 5,
      name: 'Otonu John',
      position: 'Master Chef',
      image: '/images/otunu.jpg',
      description: 'The creative engine of the Luffy lineup. From the menthol kick of Luffy Ice to the fire of Luffy Ginger, the Master Chef blends local flavors with candy science to keep things fresh and unforgettable.',
      isCeo: false,
      funFact: 'Originally joined as a summer intern',
      icon: <FaUtensils />,
      whatsapp: '#',
      instagram: '#',
      facebook: '#'
    },
    {
      id: 5,
      name: 'Kaganda Mwesigwa',
      position: 'chef',
      image: '/images/kaganda.jpg',
      description: 'The creative engine of the Luffy lineup. From the menthol kick of Luffy Ice to the fire of Luffy Ginger, the Chef helps blend local flavors with candy science to keep things fresh and unforgettable.',
      isCeo: false,
      funFact: 'Originally joined as a summer intern',
      icon: <FaUtensils />,
      whatsapp: '#',
      instagram: '#',
      facebook: '#'
    },
    {
      id: 5,
      name: 'Bronny Lufafa',
      position: 'Branding & Marketing Director',
      image: '/images/bronny.jpg',
      description: 'The one turning candy into culture. They lead campaigns, school outreach, digital promotions, and brand storytelling to grow Luffy’s footprint and fan base.',
      isCeo: false,
      funFact: 'Originally joined as a summer intern',
      icon: <FaBullhorn />,
      whatsapp: '#',
      instagram: '#',
      facebook: '#'
    },
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