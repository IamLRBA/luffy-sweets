import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ProductDetails.css';
import './LuffyEclairsDetails.css';

const LuffyEclairsDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const navigate = useNavigate();

  const product = {
    id: 3,
    name: 'Luffy Eclairs',
    description: 'Indulge in our creamy vanilla eclair candies with smooth filling. Each piece offers a perfect balance of rich vanilla flavor and melt-in-your-mouth texture.',
    price: 3.99,
    images: [
      '/images/eclairs-1.png',
      '/images/eclairs-2.jpg',
      '/images/eclairs-3.jpg'
    ],
    details: {
      flavor: 'Vanilla',
      description: 'Soft, chewy golden eclair candies filled with smooth, velvety vanilla cream. Each bite offers a delightful blend of sweetness and creaminess, wrapped in a luscious shell that melts slowly for lasting satisfaction.',
      weight: '60g',
      ingredients: 'Sugar, milk powder, cocoa butter, vanilla extract, soy lecithin, glucose syrup, butter, salt',
      shelfLife: '10 months from date of manufacture',
      allergyInfo: 'Contains milk and soy. May contain traces of nuts and peanuts.',
      storageInstructions: 'Keep in a cool, dry place. Avoid heat and humidity to preserve creaminess.',
      nutritionalInfo: {
        servingSize: '5 pieces (15g)',
        calories: '70 kcal',
        sugars: '12g',
        fat: '2.5g',
        saturatedFat: '1.5g',
        protein: '0.6g',
        sodium: '10mg'
      },
      packaging: 'Individually wrapped candies in a resealable pouch to maintain freshness.',
      dietaryInfo: 'Suitable for vegetarians. Not recommended for lactose-intolerant individuals.'
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
    <div className="product-details purple-theme">
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
              <li>Saturated Fat: {product.details.nutritionalInfo.saturatedFat}</li>
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

export default LuffyEclairsDetails;
