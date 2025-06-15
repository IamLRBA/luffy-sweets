import React from 'react';
import { motion } from 'framer-motion';
import './ContactMap.css';

const ContactMap = () => {
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7425000000003!2d33.2025!3d0.424722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMjUnMjkuMCJOIDMzwzAxMicxNS4wIkU!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus`;

  return (
    <motion.div 
      className="contact-map"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <iframe
        title="Luffy Sweets Location"
        src={mapUrl}
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
      <div className="map-overlay">
        <div className="map-marker">
          <div className="marker-pulse"></div>
          <div className="marker-dot"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactMap;