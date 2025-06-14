import React from 'react';
import './ContactInfo.css';

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <h2 className="highlight-box">Get In Touch</h2>
      <div className="info-item">
        <div className="info-icon">
          <i className="fas fa-map-marker-alt"></i>
        </div>
        <div className="info-content">
          <h3>Address</h3>
          <p>Jinja, Uganda</p>
        </div>
      </div>
      <div className="info-item">
        <div className="info-icon">
          <i className="fas fa-phone"></i>
        </div>
        <div className="info-content">
          <h3>Phone</h3>
          <p>+256 750 367229</p>
          <p>+256 767 206229</p>
        </div>
      </div>
      <div className="info-item">
        <div className="info-icon">
          <i className="fas fa-envelope"></i>
        </div>
        <div className="info-content">
          <h3>Email</h3>
          <p>luffysweets@gmail.com</p>
        </div>
      </div>
      <div className="info-item">
        <div className="info-icon">
          <i className="fas fa-clock"></i>
        </div>
        <div className="info-content">
          <h3>Working Hours</h3>
          <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
          <p>Saturday: 9:00 AM - 2:00 PM</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;