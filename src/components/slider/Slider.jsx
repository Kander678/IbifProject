import React, { useState } from "react";
import "./slider.scss";

const Slider = () => {
  const images = ["/images/banner1.jpg", "/images/banner2.jpg"];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChange = (newIndex) => {
    setCurrentIndex(newIndex);
  };

  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex === images.length - 1;

  return (
    <div className="slider-container">
      <div className="slider-caption">
        <h2>Strony internetowe</h2>
        <p>Zapytaj o naszą ofertę e-commerce i rozwijaj swój biznes w sieci.</p>
        <button className="free-quote-btn">Bezpłatna wycena</button>
      </div>
      <div className="slider">
        <div
          className="slider-images-container"
          style={{ transform: `translateX(${-currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              className="slider-image"
              src={image}
              alt={`Slider Image ${index + 1}`}
            />
          ))}
        </div>
        <button
          className={`slider-btn prev-btn ${isPrevDisabled ? "disabled" : ""}`}
          onClick={() =>
            handleSlideChange(isPrevDisabled ? currentIndex : currentIndex - 1)
          }
          disabled={isPrevDisabled}
        >
          &lt;
        </button>
        <button
          className={`slider-btn next-btn ${isNextDisabled ? "disabled" : ""}`}
          onClick={() =>
            handleSlideChange(isNextDisabled ? currentIndex : currentIndex + 1)
          }
          disabled={isNextDisabled}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Slider;
