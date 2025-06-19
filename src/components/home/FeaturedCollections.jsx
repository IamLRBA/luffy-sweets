import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedCollections.css';

const FeaturedCollections = () => {
  const collections = [
    {
      id: 1,
      name: 'Luffy Lollipop Collection',
      description: 'Our signature orange-flavored lollipops in various sizes',
      image: '/images/lollipop-collection.jpg',
      theme: 'orange'
    },
    {
      id: 2,
      name: 'Luffy Ice Collection',
      description: 'Cool mint candies perfect for hot days',
      image: '/images/ice-collection.jpg',
      theme: 'green'
    },
    {
      id: 3,
      name: 'Luffy Eclairs Collection',
      description: 'Creamy chocolate eclair candies with smooth filling',
      image: '/images/eclair-collection.jpg',
      theme: 'purple'
    },
    {
      id: 4,
      name: 'Luffy Ginger Collection',
      description: 'Zesty golden ginger drops with a bold, warming kick and a hint of sweetness.',
      image: '/images/ginger-collection.PNG',
      theme: 'brown'
    },
    {
      id: 5,
      name: 'Luffy Milk Lollipop Collection',
      description: 'Rich creamy milk lollipops with a smooth melt and nostalgic sweetness.',
      image: '/images/milk-lollipop-collection.JPG',
      theme: 'white'
    }

  ];

  return (
    <section id="featured" className="featured-collections">
      <div className="container">
        <h2 className="section-title">Featured Collections</h2>
        <div className="collections-grid">
          {collections.map(collection => (
            <div 
              key={collection.id} 
              className={`collection-card ${collection.theme}`}
            >
              <div className="collection-image">
                <img src={collection.image} alt={collection.name} />
              </div>
              <div className="collection-info">
                <h3>{collection.name}</h3>
                <p>{collection.description}</p>
                <Link 
                  to={`/products?collection=${collection.id}`} 
                  className="btn btn-outline"
                >
                  View Collection
                </Link>
              </div>
            </div>
          ))}
        </div>
        <a href="#testimonials" className="scroll-down">
          Scroll Down to See Our Client's Testimonials ↓
        </a>
      </div>
      
    </section>
  );
};

export default FeaturedCollections;