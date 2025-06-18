import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './HeroSlider.css';

const slides = [
  {
    id: 1,
    title: "Sweet Delights for Every Occasion",
    subtitle: "Premium Quality Confectionery!",
    image: "/images/slide1.jpg",
    bgColor: "var(--orange)"
  },
  {
    id: 2,
    title: "Handcrafted with Love",
    subtitle: "Traditional Recipes, Modern Twist!",
    image: "/images/slide2.jpg",
    bgColor: "var(--purple)"
  },
  {
    id: 3,
    title: "A Taste of Happiness",
    subtitle: "Pure Ingredients, Pure Joy!",
    image: "/images/slide3.jpg",
    bgColor: "var(--green)"
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const goToPrev = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="hero-slider">
      <div className="slider-container">
        {slides.map((slide, index) => (
          <motion.div
            key={slide.id}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundColor: slide.bgColor }}
            initial={{ x: direction * 100 + '%' }}
            animate={{ x: index === currentSlide ? '0%' : direction * -100 + '%' }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            <div className="slide-content">
              <div className="text-content">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {slide.title}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  {slide.subtitle}
                </motion.p>
                <div className="slide-buttons">
                  <Link to="/products" className="btn btn-primary">
                    Shop Now!
                  </Link>
                  <Link to="/about" className="btn btn-secondary">
                    Get to Know Us!
                  </Link>
                </div>
              </div>
              <motion.div 
                className="image-content"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
              >
                <img src={slide.image} alt={slide.title} />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      <button className="slider-nav prev" onClick={goToPrev}>
  <FaChevronLeft />
</button>
<button className="slider-nav next" onClick={goToNext}>
  <FaChevronRight />
</button>

      <div className="slider-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      <a href="#featured" className="scroll-down">
        Scroll Down to See Featured Collections ↓
      </a>
    </div>
  );
};

export default HeroSlider;