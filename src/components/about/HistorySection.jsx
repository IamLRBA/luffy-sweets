import React from 'react';
import './HistorySection.css';

const HistorySection = () => {
  return (
    <section className="history-section">
      <div className="container">
        <h2 className="section-title highlight-box">Our Sweet Journey</h2>
        <div className="history-content">
          <div className="history-text">
            <p>Founded in 2015 in Jinja, Uganda, Luffy Sweets began as a small family-owned candy shop with a passion for creating delightful treats.</p>
            <p>Over the years, we've grown into a beloved brand known for our innovative flavors and commitment to quality.</p>
            <p>Our founder's vision was simple: to bring joy to people's lives through delicious, handcrafted sweets made with love.</p>
            <div className="history-milestones">
              <div className="milestone">
                <div className="milestone-year">2015</div>
                <div className="milestone-desc">Founded in Jinja</div>
              </div>
              <div className="milestone">
                <div className="milestone-year">2017</div>
                <div className="milestone-desc">First factory opened</div>
              </div>
              <div className="milestone">
                <div className="milestone-year">2020</div>
                <div className="milestone-desc">National distribution</div>
              </div>
              <div className="milestone">
                <div className="milestone-year">2023</div>
                <div className="milestone-desc">Regional expansion</div>
              </div>
            </div>
          </div>
          <div className="history-image">
            <img src="/images/history.jpg" alt="Luffy Sweets history" />
            <div className="history-illustration">
              <img src="/images/history-illustration.svg" alt="Decorative illustration" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;