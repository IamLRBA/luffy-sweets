import React from 'react';
import HistorySection from '../components/about/HistorySection';
import MissionSection from '../components/about/MissionSection';
import TeamSection from '../components/about/TeamSection';
import StatsSection from '../components/about/StatsSection';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="decorative-shapes">
        <div className="shape-1"></div>
        <div className="shape-2"></div>
        <div className="shape-3"></div>
      </div>
      
      <section className="about-hero">
        <div className="container">
          <h1 className="highlight-box">About <span className="highlight-text">Luffy Sweets</span></h1>
          <p>Discover our <span className="highlight-border">story</span>, <span className="highlight-border">mission</span>, and the <span className="highlight-border">team</span> behind your favorite sweets</p>
        </div>
        <div className="hero-illustration">
          <img src="/images/sweet-wave.svg" alt="Decorative wave" />
        </div>
      </section>
      
      <HistorySection />
      <MissionSection />
      <TeamSection />
      <StatsSection />
    </div>
  );
};

export default About;