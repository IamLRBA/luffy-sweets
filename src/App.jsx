import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import BackToTop from './components/common/BackToTop';
import NavigationButtons from './components/common/NavigationButtons';
import ToTop from './components/common/ToTop';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import OrderNow from './pages/OrderNow';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import GalleryPage from './pages/GalleryPage';
import LuffyLollipopDetails from './components/products/LuffyLollipopDetails';
import LuffyIceDetails from './components/products/LuffyIceDetails';
import LuffyEclairsDetails from './components/products/LuffyEclairsDetails';
import LuffyGingerDetails from './components/products/LuffyGingerDetails';
import LuffyMilkLollipopDetails from './components/products/LuffyMilkLollipopDetails';
import './App.css';

const App = () => {
  return (
    <Router>
      <ToTop />
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/luffy-lollipop" element={<LuffyLollipopDetails />} />
            <Route path="/products/luffy-ice" element={<LuffyIceDetails />} />
            <Route path="/products/luffy-eclairs" element={<LuffyEclairsDetails />} />
            <Route path="/products/luffy-ginger" element={<LuffyGingerDetails />} />
            <Route path="/products/luffy-milk-lollipop" element={<LuffyMilkLollipopDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/order" element={<OrderNow />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/gallery" element={<GalleryPage />} />
          </Routes>
        </main>
        <Footer />
        <BackToTop />
        <NavigationButtons />
      </div>
    </Router>
  );
};

export default App;