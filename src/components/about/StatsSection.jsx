import React from 'react';
import './StatsSection.css';

const StatsSection = () => {
  const stats = [
    { number: '8+', label: 'Years Experience', icon: 'fa-calendar' },
    { number: '50+', label: 'Happy Employees', icon: 'fa-users' },
    { number: '10K+', label: 'Satisfied Customers', icon: 'fa-smile' },
    { number: '100+', label: 'Products Varieties', icon: 'fa-candy-cane' }
  ];

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">
                <i className={`fas ${stat.icon}`}></i>
              </div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;