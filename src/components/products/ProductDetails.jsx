import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  // In a real app, you would fetch this data based on the ID
  const product = {
    id: 1,
    name: 'Luffy Lollipop',
    description: 'Our signature orange-flavored lollipop made with natural fruit extracts and premium ingredients. Each lollipop is handcrafted to perfection, delivering a burst of citrusy sweetness that lasts.',
    price: 1.99,
    images: [
      '/images/lollipop-1.jpg',
      '/images/lollipop-2.jpg',
      '/images/lollipop-3.jpg'
    ],
    details: {
      flavor: 'Orange',
      weight: '50g',
      ingredients: 'Sugar, glucose syrup, natural orange flavor, citric acid, color (E160a)',
      shelfLife: '12 months',
      allergyInfo: 'May contain traces of milk'
    },
    theme: 'orange'
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };

  const handleOrderNow = () => {
    // In a real app, this would add to cart or redirect to order page
    console.log(`Ordering ${quantity} ${product.name}(s)`);
  };

  return (
    <div className="product-details">
      <div className="product-gallery">
        <div className="main-image">
          <img src={product.images[activeImage]} alt={product.name} />
        </div>
        <div className="thumbnails">
          {product.images.map((img, index) => (
            <div 
              key={index} 
              className={`thumbnail ${index === activeImage ? 'active' : ''}`}
              onClick={() => setActiveImage(index)}
            >
              <img src={img} alt={`${product.name} thumbnail ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      <div className="product-content">
        <h1>{product.name}</h1>
        <div className="product-price-large">${product.price.toFixed(2)}</div>
        <p className="product-description">{product.description}</p>
        
        <div className="product-meta">
          <div className="meta-item">
            <span>Flavor:</span>
            <span>{product.details.flavor}</span>
          </div>
          <div className="meta-item">
            <span>Weight:</span>
            <span>{product.details.weight}</span>
          </div>
          <div className="meta-item">
            <span>Ingredients:</span>
            <span>{product.details.ingredients}</span>
          </div>
          <div className="meta-item">
            <span>Shelf Life:</span>
            <span>{product.details.shelfLife}</span>
          </div>
          <div className="meta-item">
            <span>Allergy Info:</span>
            <span>{product.details.allergyInfo}</span>
          </div>
        </div>

        <div className="product-actions">
          <div className="quantity-selector">
            <label htmlFor="quantity">Quantity:</label>
            <input
              type="number"
              id="quantity"
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
            />
          </div>
          <button 
            className="btn btn-primary"
            onClick={handleOrderNow}
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;