import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import HamburgerMenu from './HamburgerMenu';
import SearchBar from './SearchBar';
import {
  HiOutlineHome,
  HiOutlineShoppingBag,
  HiOutlineUserGroup,
  HiOutlineMail,
  HiOutlineShoppingCart
} from 'react-icons/hi';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: <HiOutlineHome className="nav-icon" /> },
    { name: 'Products', path: '/products', icon: <HiOutlineShoppingBag className="nav-icon" /> },
    { name: 'Us', path: '/about', icon: <HiOutlineUserGroup className="nav-icon" /> },
    { name: 'Contact', path: '/contact', icon: <HiOutlineMail className="nav-icon" /> },
    { name: 'Order Now', path: '/order', icon: <HiOutlineShoppingCart className="nav-icon" /> },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/">
            <img src="/images/logo.png" alt="Luf" className="logo" />
          </Link>
        </div>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.path} 
              className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
            >
              {item.icon}
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