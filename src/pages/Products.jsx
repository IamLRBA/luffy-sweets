import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ProductGrid from '../components/products/ProductGrid';
import './Products.css';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();

  useEffect(() => {
    // Get search term from URL when component mounts or location changes
    const searchParams = new URLSearchParams(location.search);
    const urlSearchTerm = searchParams.get('search');
    if (urlSearchTerm) {
      setSearchTerm(urlSearchTerm);
    }
  }, [location.search]);

  const products = [
    {
      id: 1,
      name: 'Luffy Lollipop',
      description: 'Delicious orange-flavored lollipops with a tangy twist',
      price: 1.99,
      image: '/images/lollipop.jpg',
      theme: 'orange'
    },
    {
      id: 2,
      name: 'Luffy Ice',
      description: 'Refreshing green mint candies that cool your senses',
      price: 2.49,
      image: '/images/ice.JPG',
      theme: 'green'
    },
    {
      id: 3,
      name: 'Luffy Eclairs',
      description: 'Creamy purple vanilla eclair candies with smooth filling',
      price: 3.99,
      image: '/images/eclairs.jpg',
      theme: 'purple'
    },
    {
      id: 4,
      name: 'Luffy Ginger',
      description: 'Zesty golden ginger drops with a bold, warming kick and a hint of sweetness.',
      price: 2.99,
      image: '/images/ginger.PNG',
      theme: 'purple'
    },
    {
      id: 5,
      name: 'Luffy Milk Lollipop',
      description: 'Rich creamy milk lollipops with a smooth melt and nostalgic sweetness.',
      price: 2.19,
      image: '/images/milk-lollipop.JPG',
      theme: 'purple'
    }
  ];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="products-page">
      <section className="products-hero">
        <h1> Our Sweet <span className="highlight-box orange">Creations</span></h1>
        <p>Handcrafted with love using the finest ingredients</p>
      </section>

      <div className="products-search">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {searchTerm && (
        <div className="search-results-info">
          <h3>Search results for: "{searchTerm}"</h3>
          {filteredProducts.length === 0 && (
            <p>No products found matching your search.</p>
          )}
        </div>
      )}

      <ProductGrid products={filteredProducts} />

      <div className="products-cta">
        <h2>Can't find what you're looking for?</h2>
        <Link to="/contact" className="btn btn-primary">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Products;