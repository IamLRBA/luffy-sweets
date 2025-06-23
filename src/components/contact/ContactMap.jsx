import React from 'react';
import { motion } from 'framer-motion';
import './ContactMap.css';

const ContactMap = () => {
  const mapUrl = `https://www.google.com/maps/dir//Muchungwa+road,+Jinja/@0.4625156,33.1674355,11357m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x177e7da6e8a7d121:0x6c7e8793ff0550b5!2m2!1d33.2086357!2d0.4624299?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D`;

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