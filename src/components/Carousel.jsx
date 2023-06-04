import React, { useState } from 'react';

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handleLeftClick = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };
  
    const handleRightClick = () => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };
  
    return (
      <div className="carousel">
        <button onClick={handleLeftClick}>Left</button>
        <img src={images[currentIndex]} alt="Carousel" />
        <button onClick={handleRightClick}>Right</button>
      </div>
    );
  };
  
  export default Carousel;
  