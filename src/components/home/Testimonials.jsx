import React from 'react';
import TestimonialCard from '../common/TestimonialCard';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      content: "Luffy Sweets has the most delicious candies I've ever tasted. My kids can't get enough of the Luffy Lollipops!",
      name: "Sarah K.",
      position: "Happy Customer",
      avatar: "/images/testimonial1.jpg",
      rating: 5
    },
    {
      id: 2,
      content: "As a retailer, I've been selling Luffy Sweets for years and they're always the first to sell out. Excellent quality!",
      name: "James M.",
      position: "Store Owner",
      avatar: "/images/testimonial2.jpg",
      rating: 5
    },
    {
      id: 3,
      content: "The Luffy Eclairs are my absolute favorite. Creamy, delicious, and the perfect treat after a long day.",
      name: "Amina W.",
      position: "Loyal Customer",
      avatar: "/images/testimonial3.jpg",
      rating: 4
    }
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <h2 className="section-title">What Our Clients Say</h2>
        <div className="testimonials-grid">
          {testimonials.map(testimonial => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
        <a href="#message" className="scroll-down">
          Scroll Down to Leave Us a Message ↓
        </a>
      </div>
    </section>
  );
};

export default Testimonials;