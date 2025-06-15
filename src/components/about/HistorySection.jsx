import React, { useEffect } from 'react';
import './HistorySection.css';
import { FaCalendarAlt, FaIndustry, FaTruck, FaGlobeAmericas } from 'react-icons/fa';
import { FaCandyCane } from 'react-icons/fa6';

const HistorySection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.history-item, .milestone-item, .history-image-container').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const milestones = [
    { year: '2015', title: 'Founded in Jinja', icon: <FaCalendarAlt />, color: 'var(--orange)' },
    { year: '2017', title: 'First factory opened', icon: <FaIndustry />, color: 'var(--purple)' },
    { year: '2020', title: 'National distribution', icon: <FaTruck />, color: 'var(--green)' },
    { year: '2023', title: 'Regional expansion', icon: <FaGlobeAmericas />, color: 'var(--orange-light)' }
  ];

  return (
    <section className="history-section">
      <div className="history-wave-top"></div>
      
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Our <span className="highlight-border">Sweet</span> Journey
          </h2>
          <p className="section-subtitle">From humble beginnings to sweet success</p>
        </div>

        <div className="history-content">
          <div className="history-text">
            <div className="history-item">
              <div className="history-icon"><FaCandyCane /></div>
              <p className="history-paragraph">
                Founded in <span className="highlight">2015</span> in Jinja, Uganda, Luffy Sweets began as a small family-owned candy shop with a passion for creating delightful treats.
              </p>
            </div>

            <div className="history-item">
              <div className="history-icon"><FaCandyCane /></div>
              <p className="history-paragraph">
                Through <span className="highlight">innovation</span> and dedication, we've grown into a beloved brand known for our unique flavors and commitment to quality.
              </p>
            </div>

            <div className="history-item">
              <div className="history-icon"><FaCandyCane /></div>
              <p className="history-paragraph">
                Our founder's vision was simple: to bring <span className="highlight">joy</span> to people's lives through delicious, handcrafted sweets made with love.
              </p>
            </div>
          </div>

          <div className="history-image-container">
            <div className="history-image-box">
              <img 
                src="/images/history.jpg" 
                alt="Our sweet history" 
                className="history-image" 
              />
            </div>
          </div>
        </div>

        <div className="milestones-container">
          {milestones.map((milestone, index) => (
            <div 
              key={index} 
              className="milestone-item"
              style={{ '--milestone-color': milestone.color }}
            >
              <div className="milestone-icon">{milestone.icon}</div>
              <div className="milestone-content">
                <div className="milestone-year">{milestone.year}</div>
                <div className="milestone-title">{milestone.title}</div>
              </div>
              <div className="milestone-connector"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="history-wave-bottom"></div>
    </section>
  );
};

export default HistorySection;