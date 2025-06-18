import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductDetails.css';
import './LuffyIceDetails.css';

const LuffyIceDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const navigate = useNavigate();

  const product = {
    id: 2,
    name: 'Luffy Ice',
    description: 'Refresh your senses with our cool mint candies. These green treats deliver a burst of icy freshness that lasts, perfect for hot days or as a palate cleanser.',
    price: 2.49,
    images: [
      '/images/ice-1.jpg',
      '/images/ice-2.jpg',
      '/images/ice-3.jpg'
    ],
    details: {
      flavor: 'Refreshing Mint',
      description: 'Chillingly crisp mint candies infused with menthol and natural mint extract for an icy burst of coolness. These crystal-clear treats offer an instant breath-freshening effect with a long-lasting, invigorating flavor.',
      weight: '45g',
      ingredients: 'Sugar, glucose syrup, natural mint flavor, menthol, color (E133 - Brilliant Blue FCF)',
      shelfLife: '18 months from date of manufacture',
      allergyInfo: 'None. Made in an allergy-safe facility.',
      storageInstructions: 'Store in a cool, dry place. Keep sealed to maintain freshness.',
      nutritionalInfo: {
        servingSize: '3 pieces (6g)',
        calories: '24 kcal',
        sugars: '5.7g',
        fat: '0g',
        protein: '0g',
        sodium: '0mg'
      },
      packaging: 'Transparent recyclable pouch with resealable zip to lock in freshness.',
      dietaryInfo: 'Vegan-friendly. Gluten-free. No artificial preservatives.'
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
    <div className="product-details green-theme">
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

export default LuffyIceDetails;
