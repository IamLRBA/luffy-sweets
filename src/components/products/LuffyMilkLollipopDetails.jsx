import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductDetails.css';
import './LuffyMilkLollipopDetails.css';

const LuffyMilkLollipopDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const navigate = useNavigate();

  const product = {
    id: 1,
    name: 'Luffy Milk Lollipop',
    description: 'A smooth and nostalgic milk-flavored lollipop made with real dairy for a soft, mellow sweetness that melts in your mouth.',
    price: 1.99,
    images: [
      '/images/milklollipop-1.jpg',
      '/images/milklollipop-2.jpg',
      '/images/milklollipop-3.jpg'
    ],
    details: {
      flavor: 'Creamy milk',
      weight: '50g',
      ingredients: 'Sugar, glucose syrup, condensed milk, butter, natural milk flavor, emulsifier (soy lecithin), salt',
      shelfLife: '10 months from date of manufacture',
      allergyInfo: 'May contain traces of milk',
      storageInstructions: 'Store in a cool, dry place. Avoid direct heat or sunlight.',
      nutritionalInfo: {
        servingSize: '1 lollipop (approx. 10g)',
        calories: '45 kcal',
        sugars: '9.5g',
        fat: '0.8g',
        saturatedFat: '0.5g',
        protein: '0.3g',
        sodium: '5mg'
      },
      packaging: 'Individually wrapped in food-grade paper and packed in a decorative pouch.',
      dietaryInfo: 'Vegetarian-friendly, but not suitable for lactose-intolerant individuals.'
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

export default LuffyMilkLollipopDetails;
