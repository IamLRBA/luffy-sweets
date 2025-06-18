import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ProductDetails.css';
import './LuffyGingerDetails.css';

const LuffyGingerDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const navigate = useNavigate();

  const product = {
    id: 1,
    name: 'Luffy Ginger',
    description: 'Zesty golden ginger drops infused with the natural heat of real ginger, delivering a bold, warming kick that tingles the senses. Balanced with a gentle touch of sweetness, each drop offers a soothing yet invigorating flavor burst that is both comforting and revitalizing.',
    price: 1.99,
    images: [
      '/images/ginger-1.jpg',
      '/images/ginger-2.jpg',
      '/images/ginger-3.jpg'
    ],
    details: {
      flavor: 'Zesty Ginger',
      weight: '50g',
      ingredients: 'Sugar, glucose syrup, natural ginger extract, citric acid (for tartness), color: beta-carotene (E160a)',
      shelfLife: '12 months',
      allergyInfo: 'Manufactured in a facility that also processes milk products. May contain traces of milk.',
      storageInstructions: 'Store in a cool, dry place away from direct sunlight.',
      nutritionalInfo: {
        servingSize: '5g (approx. 2 drops)',
        calories: '20 kcal',
        sugars: '4.8g',
        fat: '0g',
        protein: '0g',
        sodium: '0mg'
      },
      packaging: 'Sealed in a foil-lined, resealable pouch for lasting freshness.',
      dietaryInfo: 'Suitable for vegetarians. Gluten-free.'
    }
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0) setQuantity(value);
  };

  const handleOrderNow = () => {
    navigate('/order', {
      state: {
        product: product.name,
        quantity: quantity,
        price: product.price
      }
    });
  };

  return (
    <div className="product-details orange-theme">
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
          <div className="meta-item">
            <span>Storage Instructions:</span>
            <span>{product.details.storageInstructions}</span>
          </div>
          <div className="meta-item">
            <span>Packaging:</span>
            <span>{product.details.packaging}</span>
          </div>
          <div className="meta-item">
            <span>Dietary Info:</span>
            <span>{product.details.dietaryInfo}</span>
          </div>
          <div className="meta-item nutritional-info">
            <span>Nutritional Info (per {product.details.nutritionalInfo.servingSize}):</span>
            <ul>
              <li>Calories: {product.details.nutritionalInfo.calories}</li>
              <li>Sugars: {product.details.nutritionalInfo.sugars}</li>
              <li>Fat: {product.details.nutritionalInfo.fat}</li>
              <li>Protein: {product.details.nutritionalInfo.protein}</li>
              <li>Sodium: {product.details.nutritionalInfo.sodium}</li>
            </ul>
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
            Place Your Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default LuffyGingerDetails;
