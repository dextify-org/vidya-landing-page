"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="nav-bar">
        <Link href="/" className="popping-text">
          VIDYA
        </Link>
        <div
          className={`hamburger-menu ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></div>
          <div className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></div>
          <div className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></div>
        </div>
        <div
          className={`nav-overlay ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        ></div>
        <div className={`nav-items ${isMenuOpen ? "open" : ""}`}>
          <div className="close-menu" onClick={toggleMenu}>
            <div className="close-line"></div>
            <div className="close-line"></div>
          </div>
          <Link href="/docs" className="nav-item">
            Documentation
          </Link>
          <Link href="/downloads" className="nav-item">
            Downloads
          </Link>
          <Link href="/about" className="nav-item">
            About
          </Link>
          <Link href="/contact" className="nav-item">
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}
