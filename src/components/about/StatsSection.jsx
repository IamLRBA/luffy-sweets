import React, { useState, useEffect } from 'react';
import './StatsSection.css';

const StatsSection = () => {
  const stats = [
    { number: 8, label: 'Years Experience', icon: 'fa-calendar' },
    { number: 50, label: 'Happy Employees', icon: 'fa-users' },
    { number: 10000, label: 'Satisfied Customers', icon: 'fa-smile' },
    { number: 100, label: 'Products Varieties', icon: 'fa-candy-cane' }
  ];

  const [counts, setCounts] = useState(stats.map(stat => 0));
  const [isCounting, setIsCounting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsCounting(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    const section = document.querySelector('.stats-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  useEffect(() => {
    if (!isCounting) return;

    const intervals = stats.map((stat, index) => {
      let direction = 1;
      let current = 0;
      const target = stat.number;
      const speed = Math.max(50, 2000 / target); // Faster for larger numbers

      return setInterval(() => {
        setCounts(prev => {
          const newCounts = [...prev];
          if (direction === 1) {
            current += 1;
            if (current >= target) {
              direction = -1;
              setTimeout(() => {
                // Pause at the top before descending
              }, 1000);
            }
          } else {
            current -= 1;
            if (current <= 0) {
              direction = 1;
              current = 0;
            }
          }
          newCounts[index] = current;
          return newCounts;
        });
      }, speed);
    });

    return () => intervals.forEach(interval => clearInterval(interval));
  }, [isCounting, stats]);

  return (
    <section className="stats-section">
      <div className="container">
        <h2 className="section-title highlight-box">Our Sweet Achievements</h2>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">
                <i className={`fas ${stat.icon}`}></i>
              </div>
              <div className="stat-number">
                {stat.number >= 1000 ? 
                  `${Math.floor(counts[index]/1000)}K+` : 
                  counts[index] + (index === 2 ? '+' : '')}
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="stats-illustration">
        <img src="/images/stats-wave.svg" alt="Decorative illustration" />
      </div>
    </section>
  );
};

export default StatsSection;