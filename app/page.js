import Navbar from "./components/Navbar";
import ScreenshotCarousel from "./components/ScreenshotCarousel";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="background">
        <div className="circle"></div>
        <div className="circle2"></div>
        <div className="circle3"></div>
        <div className="circle8"></div>
      </div>
      <div className="container">
        <Navbar />

        <div className="hero-section">
          <div className="hero-content">
            <div className="hero-title">
              <span style={{ color: "#fb3640" }}>VIDYA</span> MEDIA SERVER
            </div>
            <div className="hero-subtitle">
              A Media Server for video lectures
            </div>
            <div className="hero-buttons">
              <button className="demo-button">Demo</button>
              <Link href="/downloads" className="download-button">
                Download
              </Link>
            </div>
          </div>
        </div>
        <div className="what-is-vidya-section">
          <div className="section-content">
            <h2 className="section-title">What is VIDYA</h2>
            <p className="section-text">
              VIDYA is a self-hosted, open-source video server designed
              exclusively for educational content. Instead of treating your
              lectures like a movie library, it automatically scans your local
              folders and structures them into organized courses. With built-in
              progress tracking, tagging, bookmarking, and dedicated study
              dashboards, it transforms your scattered video files into a
              private, fully-featured e-learning platform.
            </p>
          </div>
        </div>
        <div className="platform-section-home">
          <div className="section-content">
            <h2 className="section-title">Available Everywhere</h2>
            <div className="platform-categories">
              <div className="platform-category">
                <h3 className="category-title">Server</h3>
                <div className="platform-grid">
                  <div className="platform-item">
                    <img
                      src="/windows-brands-solid-full.svg"
                      alt="Windows"
                      className="platform-icon"
                    />
                    <span className="platform-name">Windows</span>
                  </div>
                  <div className="platform-item">
                    <img
                      src="/linux-brands-solid-full.svg"
                      alt="Linux"
                      className="platform-icon"
                    />
                    <span className="platform-name">Linux</span>
                  </div>
                  <div className="platform-item">
                    <img
                      src="/apple-brands-solid-full.svg"
                      alt="Mac"
                      className="platform-icon"
                    />
                    <span className="platform-name">Mac</span>
                  </div>
                </div>
              </div>
              <div className="platform-category">
                <h3 className="category-title">Client</h3>
                <div className="platform-grid">
                  <div className="platform-item">
                    <img
                      src="/android-brands-solid-full.svg"
                      alt="Android"
                      className="platform-icon"
                    />
                    <span className="platform-name">Android</span>
                  </div>
                  <div className="platform-item">
                    <img
                      src="/app-store-ios-brands-solid-full.svg"
                      alt="iOS"
                      className="platform-icon"
                    />
                    <span className="platform-name">iOS</span>
                  </div>
                  <div className="platform-item">
                    <img
                      src="/globe-solid-full.svg"
                      alt="Web"
                      className="platform-icon"
                    />
                    <span className="platform-name">Web</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ScreenshotCarousel />
        <div className="built-by-section">
          <div className="section-content">
            <h2 className="section-title">Built by DEXTIFY</h2>
            <div className="dextify-logo-section">
              <a
                href="https://dextify.org"
                target="_blank"
                rel="noopener noreferrer"
                className="dextify-link"
              >
                <img
                  src="/Monitor.svg"
                  alt="DEXTIFY"
                  className="dextify-logo"
                />
                <div className="dextify-text">DEXTIFY</div>
              </a>
            </div>
            <p className="section-text">
              DEXTIFY is a software company that focuses on privacy, creating
              tools that empower users with full control over their data. We
              believe in digital sovereignty and build open-source solutions
              that respect your freedom and privacy.
            </p>
            <div className="free-open-source">
              <div className="statement-item">
                <img
                  src="/lock-open-solid-full.svg"
                  alt="Always Free"
                  className="statement-icon-svg"
                />
                <div className="statement-text">
                  <h3>Always Free</h3>
                  <p>
                    VIDYA will always be free to use, no hidden costs or premium
                    tiers
                  </p>
                </div>
              </div>
              <div className="statement-item">
                <img
                  src="/osi-brands-solid-full.svg"
                  alt="Open Source"
                  className="statement-icon-svg"
                />
                <div className="statement-text">
                  <h3>Open Source</h3>
                  <p>
                    VIDYA will always be open source, transparent and
                    community-driven
                  </p>
                </div>
              </div>
              <div className="statement-item gplv3">
                <img
                  src="/scroll-solid-full.svg"
                  alt="GPLv3 License"
                  className="statement-icon-svg"
                />
                <div className="statement-text">
                  <h3>GPLv3 License</h3>
                  <p>
                    VIDYA is licensed under GPLv3, granting you complete freedom
                    to use, modify, and distribute the software. This copyleft
                    license ensures that any derivative works must also remain
                    open source under the same terms, creating a permanent
                    ecosystem of free educational tools for everyone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="footer-section">
          <div className="section-content">
            <div className="footer-content">
              <div className="footer-brand">
                <div className="footer-logo">VIDYA</div>
                <p className="footer-description">
                  A Media Server for video lectures - Organize, track, and learn
                  from your educational content.
                </p>
              </div>

              <div className="footer-links">
                <div className="footer-column">
                  <h4 className="footer-title">Product</h4>
                  <a href="/downloads" className="footer-link">
                    Downloads
                  </a>
                  <a href="/docs" className="footer-link">
                    Documentation
                  </a>
                  <a href="#" className="footer-link">
                    Features
                  </a>
                </div>

                <div className="footer-column">
                  <h4 className="footer-title">Company</h4>
                  <a
                    href="https://dextify.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                  >
                    DEXTIFY
                  </a>
                  <a href="https://dextify.org/about" className="footer-link">
                    About
                  </a>
                  <a
                    href="https://dextify.org/contact"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                  >
                    Contact
                  </a>
                </div>

                <div className="footer-column">
                  <h4 className="footer-title">Community</h4>
                  <a
                    href="https://github.com/dextify-org/vidya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://discord.gg/uavHJumK5v"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                  >
                    Discord
                  </a>
                  <a
                    href="https://reddit.com/r/VidyaMedia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                  >
                    Reddit
                  </a>
                  <a
                    href="https://x.com/vidya_server"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                  >
                    X / Twitter
                  </a>
                </div>
              </div>
            </div>

            <div className="footer-bottom">
              <div className="footer-copyright">
                <p>
                  &copy; 2026 DEXTIFY. VIDYA is free software under GPL v3
                  license.
                </p>
              </div>
              <div className="footer-legal">
                <a href="/about#privacy-policy" className="footer-link">
                  Privacy Policy
                </a>
                <a href="/about#terms-of-service" className="footer-link">
                  Terms of Service
                </a>
                <a href="/about#terms-of-service" className="footer-link">
                  GPL v3 License
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
