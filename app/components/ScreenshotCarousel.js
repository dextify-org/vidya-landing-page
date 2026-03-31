"use client";

import { useState, useEffect } from "react";

export default function ScreenshotCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="screenshot-section">
      <div className="section-content">
        <h2 className="section-title">See VIDYA in Action</h2>
        <div className="carousel-container">
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            <div className="screenshot-item">
              <img
                src="/Screenshot home.avif"
                alt="VIDYA Home"
                className="screenshot-image"
              />
              <div className="screenshot-caption">Home</div>
            </div>
            <div className="screenshot-item">
              <img
                src="/Dashboard screenshot.avif"
                alt="VIDYA Dashboard"
                className="screenshot-image"
              />
              <div className="screenshot-caption">Dashboard</div>
            </div>
            <div className="screenshot-item">
              <img
                src="/Player Screenshot.avif"
                alt="Video Player"
                className="screenshot-image"
              />
              <div className="screenshot-caption">Video Player</div>
            </div>
          </div>
          <button className="carousel-btn prev-btn" onClick={prevSlide}>
            ‹
          </button>
          <button className="carousel-btn next-btn" onClick={nextSlide}>
            ›
          </button>
        </div>
      </div>
    </div>
  );
}
