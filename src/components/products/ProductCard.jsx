import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const detailPages = {
    1: '/products/luffy-lollipop',
    2: '/products/luffy-ice',
    3: '/products/luffy-eclairs',
    4: '/products/luffy-ginger',
    5: '/products/luffy-milk-lollipop'
  };

  return (
    <div className={`product-card ${product.theme}-theme`}>
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="product-price">${product.price.toFixed(2)}</div>
        <Link 
          to={detailPages[product.id]} 
          className="btn btn-primary"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;