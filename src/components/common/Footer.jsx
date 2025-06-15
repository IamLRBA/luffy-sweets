import { Link } from 'react-router-dom';
import {
  Home,
  ShoppingBag,
  Users,
  Mail,
  ShoppingCart,
  MapPin,
  Phone,
  FileText,
  Shield,
  Cake,
  Truck,
  Clock,
  Image,
  Instagram,
  Facebook,
  MessageSquare,
  PhoneCall,
} from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-wave"></div>

      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-section brand-section">
          <div className="footer-logo">
            <Cake className="logo-icon" />
            <h3>Luffy Sweets</h3>
          </div>
          <p className="brand-tagline">
            Crafting sweet moments since 2015 with love and premium ingredients.
          </p>

          <div className="social-media">
            <h4>Connect With Us</h4>
            <div className="social-icons">
              <a href="https://facebook.com/luffysweets" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="social-icon" />
              </a>
              <a href="https://instagram.com/luffysweets" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="social-icon" />
              </a>
              <a href="https://tiktok.com/@luffysweets" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <MessageSquare className="social-icon" />
              </a>
              <a href="https://wa.me/256750367229" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <PhoneCall className="social-icon" />
              </a>
            </div>
          </div>
        </div>

        {/* Explore Section */}
        <div className="footer-section">
          <h3 className="section-title">Explore</h3>
          <ul className="footer-links">
            <li><Link to="/"><Home className="link-icon" /> Home</Link></li>
            <li><Link to="/products"><ShoppingBag className="link-icon" /> Products</Link></li>
            <li><Link to="/gallery"><Image className="link-icon" /> Gallery</Link></li>
            <li><Link to="/about"><Users className="link-icon" /> Our Story</Link></li>
            <li><Link to="/contact"><MessageSquare className="link-icon" /> Let’s Chat</Link></li>
            <li><Link to="/order"><ShoppingCart className="link-icon" /> Make an Order</Link></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h3 className="section-title">Contact Us</h3>
          <ul className="contact-info">
            <li><MapPin className="link-icon" /> Jinja, Uganda</li>
            <li><Phone className="link-icon" /> +256 750 367229</li>
            <li><Phone className="link-icon" /> +256 767 206229</li>
            <li><Mail className="link-icon" /> luffysweets@gmail.com</li>
            <li><Truck className="link-icon" /> Free delivery in Jinja</li>
          </ul>
          <div className="business-hours">
            <h4><Clock className="icon" /> Opening Hours</h4>
            <p>Website is Open 24/7</p>
          </div>
        </div>

        {/* Legal Section */}
        <div className="footer-section">
          <h3 className="section-title">Legal</h3>
          <ul className="footer-links">
            <li><Link to="/privacy-policy"><Shield className="link-icon" /> Privacy Policy</Link></li>
            <li><Link to="/terms-of-service"><FileText className="link-icon" /> Terms of Service</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="payment-methods">
          <span>We accept:</span>
          <div className="payment-icons">
            <span>Mobile Money</span>
            <span>Credit Cards</span>
            <span>PayPal</span>
          </div>
        </div>
        <p className="copyright">
          &copy; {currentYear} Luffy Sweets. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
