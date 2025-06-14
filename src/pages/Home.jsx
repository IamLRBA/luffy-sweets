import React from 'react';
import HeroSlider from '../components/home/HeroSlider';
import FeaturedCollections from '../components/home/FeaturedCollections';
import Testimonials from '../components/home/Testimonials';
import MessageSection from '../components/home/MessageSection';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <HeroSlider />
        <div className="scroll-prompt">
          <span>Scroll Down</span>
          <i className="fas fa-chevron-down"></i>
        </div>
      </section>

      <section className="grid-container">
        <FeaturedCollections />
      </section>

      <section className="testimonials-section">
        <Testimonials />
      </section>

      <section className="message-section">
        <MessageSection />
      </section>
    </div>
  );
};

export default Home;