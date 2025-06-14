import React from 'react';
import ContactInfo from '../components/contact/ContactInfo';
import ContactMap from '../components/contact/ContactMap';
import ContactForm from '../components/contact/ContactForm';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <h1 className="highlight-box">Contact Us</h1>
          <p>We'd love to hear from you! Reach out for inquiries, feedback, or just to say hello.</p>
        </div>
      </section>
      <div className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info-wrapper">
              <ContactInfo />
            </div>
            <div className="contact-map-wrapper">
              <ContactMap />
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;