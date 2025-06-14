import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="product-price">${product.price.toFixed(2)}</div>
        <Link 
          to={`/products/${product.id}`} 
          className="btn btn-primary"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;