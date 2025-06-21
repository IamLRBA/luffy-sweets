import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductDetails.css';

const LuffyLollipopDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const navigate = useNavigate();

  const product = {
    id: 1,
    name: 'Luffy Lollipop',
    description: 'Burst into the Orange bliss of our signature sweet and tangy, orange-flavored lollipop made with natural fruit extracts and premium ingredients. Each lollipop is handcrafted to perfection, delivering a burst of citrusy sweetness that lasts.',
    price: 1.99,
    images: [
      '/images/lollipop-1.png',
      '/images/lollipop-2.jpeg',
      '/images/lollipop-3.jpg'
    ],
    details: {
      flavor: 'Juicy Orange',
      description: 'Bursting with real citrus zing, this lollipop delivers a bright and fruity orange flavor with a tangy twist. Smooth, long-lasting sweetness balanced by a refreshing tartness makes it the perfect sunny-day treat.',
      weight: '50g',
      ingredients: 'Sugar, glucose syrup, natural orange flavor, citric acid (for tartness), color (E160a - beta-carotene)',
      shelfLife: '12 months from date of manufacture',
      allergyInfo: 'May contain traces of milk. Produced in a facility that handles dairy.',
      storageInstructions: 'Keep in a dry, cool place. Avoid direct sunlight or moisture.',
      nutritionalInfo: {
        servingSize: '1 lollipop (10g)',
        calories: '40 kcal',
        sugars: '9.2g',
        fat: '0g',
        protein: '0g',
        sodium: '0mg'
      },
      packaging: 'Individually wrapped with fun, colorful branding. Packed in a protective pouch.',
      dietaryInfo: 'Suitable for vegetarians. Gluten-free. No artificial sweeteners.'
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

export default LuffyLollipopDetails;
