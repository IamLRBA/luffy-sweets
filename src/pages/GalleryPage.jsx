import { useState, useEffect } from 'react';
import './GalleryPage.css';

const Gallery = () => {
  const [expandedImage, setExpandedImage] = useState(null);
  const [images, setImages] = useState([]);

  // Local image paths (to be placed in public/images folder)
  const localImages = [
    { id: 1, filename: 'image1.jpg', alt: 'Delicious chocolate cake' },
    { id: 2, filename: 'image2.jpg', alt: 'Colorful macarons' },
    { id: 3, filename: 'image3.jpg', alt: 'Strawberry shortcake' },
    { id: 4, filename: 'image4.jpg', alt: 'Artisan bread' },
    { id: 5, filename: 'image5.jpg', alt: 'Cupcake assortment' },
    { id: 6, filename: 'image6.jpg', alt: 'French pastries' },
    { id: 7, filename: 'image7.jpg', alt: 'Custom wedding cake' },
    { id: 8, filename: 'image8.jpg', alt: 'Chocolate truffles' },
    { id: 9, filename: 'image9.jpg', alt: 'Fruit tart' },
    { id: 10, filename: 'image10.jpg', alt: 'Donut variety' },
  ];

  useEffect(() => {
    const loadedImages = localImages.map(img => ({
      id: img.id,
      url: `/images/${img.filename}`,
      alt: img.alt,
      position: {
        x: Math.random() * 70,
        y: Math.random() * 70,
        rotation: (Math.random() * 60) - 30
      },
      speed: {
        x: (Math.random() * 0.2) - 0.1,
        y: (Math.random() * 0.2) - 0.1,
        rotation: (Math.random() * 0.2) - 0.1
      }
    }));
    setImages(loadedImages);
  }, []);

  // Animation loop (fixed with let instead of const)
  useEffect(() => {
    if (expandedImage) return;

    const moveImages = () => {
      setImages(prevImages => 
        prevImages.map(img => {
          let newX = img.position.x + img.speed.x;
          let newY = img.position.y + img.speed.y;
          let newRotation = img.position.rotation + img.speed.rotation;

          if (newX < 0 || newX > 80) img.speed.x *= -1;
          if (newY < 0 || newY > 80) img.speed.y *= -1;

          return {
            ...img,
            position: {
              x: newX < 0 || newX > 80 ? img.position.x : newX,
              y: newY < 0 || newY > 80 ? img.position.y : newY,
              rotation: newRotation
            }
          };
        })
      );
    };

    let animationId = requestAnimationFrame(function animate() {
      moveImages();
      animationId = requestAnimationFrame(animate);
    });

    return () => cancelAnimationFrame(animationId);
  }, [expandedImage]);

  const handleImageClick = (id) => {
    setExpandedImage(images.find(img => img.id === id));
  };

  const handleCloseImage = () => {
    setExpandedImage(null);
  };

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Luffy Sweets Gallery</h1>
      <p className="gallery-subtitle">Let's Play a Game! Click Any Image Below to View Our Moments in fullscreen</p>
      
      <div className="gallery-grid">
        {images.map((image) => (
          <div
            key={image.id}
            className="gallery-item"
            style={{
              left: `${image.position.x}%`,
              top: `${image.position.y}%`,
              transform: `rotate(${image.position.rotation}deg)`,
              transition: expandedImage ? 'none' : 'all 0.5s ease'
            }}
            onClick={() => handleImageClick(image.id)}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="gallery-image"
            />
            <div className="image-overlay"></div>
          </div>
        ))}
      </div>

      {expandedImage && (
        <div className="expanded-view">
          <div className="expanded-backdrop" onClick={handleCloseImage}></div>
          <div className="expanded-content">
            <img
              src={expandedImage.url}
              alt={expandedImage.alt}
              className="expanded-image"
            />
            <button className="close-button" onClick={handleCloseImage}>
              <svg viewBox="0 0 24 24">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;