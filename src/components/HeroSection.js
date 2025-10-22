


import React, { useEffect, useState } from 'react';
import './HeroSection.css';

const images = [
  '/hero1.jpg',
  '/hero2.jpg',
  '/hero3.jpg',

];

function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % images.length);
    }, 4000); // 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section" id="Home">
      <div className="hero-left">
        <h1>Discover Timeless Elegance</h1>
        <p>Explore our exquisite handcrafted jewellery collections.</p>
        <button className="hero-button">Shop Now</button>
      </div>
      <div className="hero-right">
        <div className="image-oval">
          <img
            src={images[currentImage]}
            alt="Jewellery showcase"
            className="transition-image"
            key={currentImage} // triggers fade animation
          />
        </div>
      </div>
    </section>
  );
}


export default HeroSection;

