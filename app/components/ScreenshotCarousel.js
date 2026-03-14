"use client";

import { useState, useEffect } from "react";

export default function ScreenshotCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 4;

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
                src="/1.png"
                alt="VIDYA Dashboard"
                className="screenshot-image"
              />
              <div className="screenshot-caption">Dashboard Overview</div>
            </div>
            <div className="screenshot-item">
              <img
                src="/2.png"
                alt="Course Management"
                className="screenshot-image"
              />
              <div className="screenshot-caption">Course Management</div>
            </div>
            <div className="screenshot-item">
              <img
                src="/3.png"
                alt="Video Player"
                className="screenshot-image"
              />
              <div className="screenshot-caption">Video Player Interface</div>
            </div>
            <div className="screenshot-item">
              <img
                src="/4.png"
                alt="Progress Tracking"
                className="screenshot-image"
              />
              <div className="screenshot-caption">Progress Tracking</div>
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
