import React from 'react';
import './TermsOfService.css';

const TermsOfService = () => {
  return (
    <div className="terms-page">
      <section className="terms-hero">
        <div className="container">
          <h1 className="highlight-box">Terms of Service</h1>
          <p>Last updated: June 14, 2025</p>
        </div>
      </section>
      <div className="terms-content">
        <div className="container">
          <div className="terms-section">
            <h2>1. General Terms</h2>
            <p>By accessing and using the Luffy Sweets website, you accept and agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must not use our website.</p>
          </div>
          <div className="terms-section">
            <h2>2. Orders and Payments</h2>
            <p>All orders are subject to product availability. We reserve the right to refuse or cancel any order for any reason. Prices are subject to change without notice. Payment must be completed before order processing begins.</p>
          </div>
          <div className="terms-section">
            <h2>3. Shipping and Delivery</h2>
            <p>Shipping costs and delivery times may vary depending on your location. We are not responsible for any delays caused by shipping carriers or customs clearance. Risk of loss passes to you upon delivery.</p>
          </div>
          <div className="terms-section">
            <h2>4. Returns and Refunds</h2>
            <p>We accept returns of damaged or defective products within 7 days of delivery. Please contact us immediately if you receive a damaged product. Refunds will be issued to the original payment method.</p>
          </div>
          <div className="terms-section">
            <h2>5. Intellectual Property</h2>
            <p>All content on this website, including text, graphics, logos, and images, is the property of Luffy Sweets and is protected by copyright laws. Unauthorized use is strictly prohibited.</p>
          </div>
          <div className="terms-section">
            <h2>6. Limitation of Liability</h2>
            <p>Luffy Sweets shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products or website. Our total liability shall not exceed the amount paid for the products in question.</p>
          </div>
          <div className="terms-section">
            <h2>7. Governing Law</h2>
            <p>These Terms shall be governed by and construed in accordance with the laws of Uganda. Any disputes shall be resolved in the courts of Jinja, Uganda.</p>
          </div>
          <div className="terms-section">
            <h2>8. Changes to Terms</h2>
            <p>We reserve the right to modify these Terms at any time. Your continued use of the website after such changes constitutes acceptance of the new Terms.</p>
          </div>
          <div className="terms-section">
            <h2>9. Contact Information</h2>
            <p>For any questions regarding these Terms of Service, please contact us at luffysweets@gmail.com or +256 750 367229.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;