import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-page">
      <section className="policy-hero">
        <div className="container">
          <h1 className="highlight-text">Privacy Policy</h1>
          <p>Last updated: June 14, 2023</p>
        </div>
      </section>
      <div className="policy-content">
        <div className="container">
          <div className="policy-section">
            <h2>1. Information We Collect</h2>
            <p>We collect personal information that you voluntarily provide to us when you register on the website, place an order, subscribe to our newsletter, or contact us. This may include your name, email address, phone number, shipping address, and payment information.</p>
          </div>
          <div className="policy-section">
            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to process your orders, communicate with you, improve our products and services, and send you promotional materials if you've opted in to receive them. We do not sell or share your personal information with third parties for their marketing purposes.</p>
          </div>
          <div className="policy-section">
            <h2>3. Data Security</h2>
            <p>We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. All transactions are processed through a secure payment gateway and no credit card information is stored on our servers.</p>
          </div>
          <div className="policy-section">
            <h2>4. Cookies</h2>
            <p>Our website uses cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, but this may affect certain website functionalities.</p>
          </div>
          <div className="policy-section">
            <h2>5. Changes to This Policy</h2>
            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "last updated" date.</p>
          </div>
          <div className="policy-section">
            <h2>6. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at luffysweets@gmail.com or +256 750 367229.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;