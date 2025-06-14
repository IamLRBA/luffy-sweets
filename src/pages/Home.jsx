import React from 'react';
import HeroSlider from '../components/home/HeroSlider';
import FeaturedCollections from '../components/home/FeaturedCollections';
import Testimonials from '../components/home/Testimonials';
import MessageSection from '../components/home/MessageSection';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <HeroSlider />
      <FeaturedCollections />
      <Testimonials />
      <MessageSection />
    </div>
  );
};

export default Home;