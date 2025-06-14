import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HamburgerMenu from './HamburgerMenu';
import SearchBar from './SearchBar';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Order Now', path: '/order' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'mobile-open' : ''}`}>
      <div className="container">
        <div className="navbar-brand">
          <Link to="/">
            <img src="/images/logo.png" alt="Luffy Sweets" className="logo" />
            <span>LUFFY SWEETS</span>
          </Link>
        </div>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.path} 
              className="nav-item"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="navbar-actions">
          <SearchBar />
          <HamburgerMenu isOpen={isMenuOpen} toggle={() => setIsMenuOpen(!isMenuOpen)} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;