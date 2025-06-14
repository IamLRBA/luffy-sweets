import React from 'react';
import HistorySection from '../components/about/HistorySection';
import MissionSection from '../components/about/MissionSection';
import TeamSection from '../components/about/TeamSection';
import StatsSection from '../components/about/StatsSection';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <h1 className="highlight-text">About Luffy Sweets</h1>
          <p>Discover our story, mission, and the team behind your favorite sweets</p>
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