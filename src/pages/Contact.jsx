import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import ContactInfo from '../components/contact/ContactInfo';
import ContactMap from '../components/contact/ContactMap';
import MessageSection from '../components/home/MessageSection';
import './Contact.css';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <motion.section 
        className="contact-hero"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container">
          <h1>
            <span className="highlight-box orange">Contact</span> Us
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            We'd love to hear from you! Reach out for inquiries, feedback, or just to say hello to us!.
          </motion.p>
        </div>
      </motion.section>

      {/* Contact Info & Map Section */}
      <motion.div 
        className="contact-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <div className="container">
          <div className="contact-grid">
            <motion.div 
              className="contact-info-wrapper"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ContactInfo />
            </motion.div>
            <motion.div 
              className="contact-map-wrapper"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ContactMap />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Message Section (Reusing the Home page component) */}
      <MessageSection />
    </div>
  );
};

export default Contact;