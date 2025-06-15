import React, { useState } from 'react';
import { FaWhatsapp, FaPaperPlane, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { ImSpinner8 } from 'react-icons/im';
import './MessageSection.css';

const MessageSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    contactMethod: 'email' // 'email' or 'whatsapp'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      if (formData.contactMethod === 'email') {
        // Send to email via Formspree
        const emailResponse = await fetch('https://formspree.io/f/luffysweets@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        
        if (!emailResponse.ok) throw new Error('Email submission failed');
        setSubmitStatus('success');
      } else {
        // Format WhatsApp message
        const whatsappMessage = `Name: ${formData.name}%0ALocation: ${formData.location}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0ASubject: ${formData.subject}%0AMessage: ${formData.message}`;
        window.open(`https://wa.me/256700416812?text=${whatsappMessage}`, '_blank');
        setSubmitStatus('success');
      }

      // Reset form only for email submissions
      if (formData.contactMethod === 'email') {
        setFormData({
          name: '',
          location: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          contactMethod: 'email'
        });
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="message" className="message-section">
      <div className="container">
        <h2 className="section-title">
          <span className="highlight-box green">Get In</span> Touch
        </h2>
        <div className="message-content">
          {/* Loading Overlay */}
          {isSubmitting && (
            <div className="loading-overlay">
              <div className="loading-content">
                <ImSpinner8 className="spinner-icon" />
                <p className="loading-message">Sending your message...</p>
                <p className="loading-submessage">Please wait a moment</p>
              </div>
            </div>
          )}

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="status-message success">
              <h3>Message Sent Successfully!</h3>
              <p>Thank you for contacting us. We'll get back to you soon.</p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="status-message error">
              <h3>Oops! Something went wrong</h3>
              <p>Please try again or contact us via WhatsApp.</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="message-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">
                  <FaEnvelope className="input-icon" /> Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="location">
                  <FaMapMarkerAlt className="input-icon" /> Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">
                  <FaEnvelope className="input-icon" /> Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">
                  <FaPhone className="input-icon" /> Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message *</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className="contact-method">
              <label>Preferred Contact Method:</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="contactMethod"
                    value="email"
                    checked={formData.contactMethod === 'email'}
                    onChange={handleChange}
                  />
                  <span>Email</span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="contactMethod"
                    value="whatsapp"
                    checked={formData.contactMethod === 'whatsapp'}
                    onChange={handleChange}
                  />
                  <span>WhatsApp</span>
                </label>
              </div>
            </div>

            <button 
              type="submit" 
              className="btn btn-primary submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <ImSpinner8 className="btn-spinner" />
                  Sending...
                </>
              ) : (
                <>
                  <FaPaperPlane className="btn-icon" />
                  Send Message
                </>
              )}
            </button>
          </form>

          <div className="whatsapp-option">
            <div className="whatsapp-header">
              <FaWhatsapp className="whatsapp-icon" />
              <h3>Contact us directly via WhatsApp</h3>
            </div>
            <p>For immediate assistance, click below to chat with us on WhatsApp</p>
            <a 
              href="https://wa.me/256700416812" 
              className="btn whatsapp-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="btn-icon" /> Start Chat
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageSection;