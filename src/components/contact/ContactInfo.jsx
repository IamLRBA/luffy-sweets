import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaWhatsapp } from 'react-icons/fa';
import './ContactInfo.css';

const ContactInfo = () => {
  const contactItems = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Address",
      content: "Jinja, Uganda",
      color: "var(--orange)"
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      content: ["+256 750 367229", "+256 767 206229"],
      color: "var(--green)"
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      content: "luffysweets@gmail.com",
      color: "var(--purple)"
    },
    {
      icon: <FaClock />,
      title: "Working Hours",
      content: ["Monday - Friday: 8:00 AM - 5:00 PM", "Saturday: 9:00 AM - 2:00 PM"],
      color: "var(--orange-dark)"
    }
  ];

  return (
    <div className="contact-info">
      <motion.h2 
        className="highlight-box"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Get In Touch
      </motion.h2>
      
      <div className="info-items-container">
        {contactItems.map((item, index) => (
          <motion.div 
            key={index}
            className="info-item"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="info-icon" style={{ color: item.color }}>
              {item.icon}
            </div>
            <div className="info-content">
              <h3>{item.title}</h3>
              {Array.isArray(item.content) ? (
                item.content.map((line, i) => <p key={i}>{line}</p>)
              ) : (
                <p>{item.content}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div
        className="whatsapp-direct"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <a 
          href="https://wa.me/256750367229" 
          className="btn whatsapp-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="btn-icon" /> Chat on WhatsApp
        </a>
      </motion.div>
    </div>
  );
};

export default ContactInfo;