import React from 'react';
import './TestimonialCard.css';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-content">
        {testimonial.content}
      </div>
      <div className="testimonial-author">
        <div className="author-avatar">
          <img src={testimonial.avatar} alt={testimonial.name} />
        </div>
        <div className="author-info">
          <h4>{testimonial.name}</h4>
          <p>{testimonial.position}</p>
          <div className="testimonial-rating">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <i key={i} className="fas fa-star"></i>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;