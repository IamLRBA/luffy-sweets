import React, { useState, useEffect, useRef } from 'react';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
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
    },
    {
      id: 4,
      content: "The customer service is exceptional. They went above and beyond to fulfill my bulk order request.",
      name: "David T.",
      position: "Event Planner",
      avatar: "/images/testimonial4.jpg",
      rating: 5
    },
    {
      id: 5,
      content: "As a diabetic, I appreciate their sugar-free options that don't compromise on taste.",
      name: "Grace L.",
      position: "Health-conscious Customer",
      avatar: "/images/testimonial5.jpg",
      rating: 4
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const carouselRef = useRef(null);
  const animationRef = useRef(null);

  // Auto-scroll effect
  useEffect(() => {
    const autoScroll = () => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
      animationRef.current = requestAnimationFrame(autoScroll);
    };
    
    const startAutoScroll = () => {
      animationRef.current = requestAnimationFrame(autoScroll);
    };
    
    // Start auto-scroll after 3 seconds of initial render
    const timeoutId = setTimeout(startAutoScroll, 3000);
    
    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(animationRef.current);
    };
  }, [testimonials.length]);

  // Handle manual navigation
  const goToPrev = () => {
    cancelAnimationFrame(animationRef.current);
    setCurrentIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    cancelAnimationFrame(animationRef.current);
    setCurrentIndex(prev => (prev + 1) % testimonials.length);
  };

  // Touch and mouse events for manual sliding
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches ? e.touches[0].clientX : e.clientX);
    cancelAnimationFrame(animationRef.current);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    setTranslateX(x - startX);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    if (translateX > 50) {
      goToPrev();
    } else if (translateX < -50) {
      goToNext();
    }
    setTranslateX(0);
  };

  // Calculate card positions and scaling
  const getCardStyle = (index) => {
    const distance = (index - currentIndex + testimonials.length) % testimonials.length;
    let scale = 1;
    let opacity = 1;
    let zIndex = 0;
    
    if (distance === 0) {
      scale = 1;
      opacity = 1;
      zIndex = 3;
    } else if (distance === 1 || distance === testimonials.length - 1) {
      scale = 0.9;
      opacity = 0.8;
      zIndex = 2;
    } else {
      scale = 0.8;
      opacity = 0.6;
      zIndex = 1;
    }
    
    // For infinite loop effect
    let position = (index - currentIndex) * 110;
    if (position > 200) position -= testimonials.length * 110;
    if (position < -200) position += testimonials.length * 110;
    
    return {
      transform: `translateX(${position}%) scale(${scale})`,
      opacity: opacity,
      zIndex: zIndex,
      transition: isDragging ? 'none' : 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    };
  };

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <h2 className="section-title">
          <span className="highlight-box orange">Client</span> Testimonials
        </h2>
        
        <div 
          className="testimonials-carousel"
          ref={carouselRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleTouchStart}
          onMouseMove={handleTouchMove}
          onMouseUp={handleTouchEnd}
          onMouseLeave={handleTouchEnd}
        >
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="testimonial-card"
              style={getCardStyle(index)}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="quote-icon">
                <FaQuoteLeft />
              </div>
              <p className="testimonial-content">{testimonial.content}</p>
              <div className="testimonial-author">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="author-avatar" 
                />
                <div className="author-info">
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="author-position">{testimonial.position}</p>
                  <div className="rating">
                    {[...Array(5)].map((_, i) => (
                      <span 
                        key={i} 
                        className={`star ${i < testimonial.rating ? 'filled' : ''}`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="carousel-controls">
          <button className="carousel-nav prev" onClick={goToPrev}>
            <FaChevronLeft />
          </button>
          <div className="carousel-indicators">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
          <button className="carousel-nav next" onClick={goToNext}>
            <FaChevronRight />
          </button>
        </div>

        <a href="#message" className="scroll-down">
          Want to share your experience? Leave us a message ↓
        </a>
      </div>
    </section>
  );
};

export default Testimonials;