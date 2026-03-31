import Navbar from "../components/Navbar";

export default function Downloads() {
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

        <div className="downloads-section">
          <div className="section-content">
            <h2 className="section-title">Downloads</h2>
            <p className="section-text">
              Get VIDYA Media Server for your platform. Choose your operating
              system below to download the appropriate version.
            </p>

            {/* Windows */}
            <div className="platform-section">
              <div className="download-card">
                <div className="download-header">
                  <img
                    src="/windows-brands-solid-full.svg"
                    alt="Windows"
                    className="platform-icon"
                  />
                  <div className="download-info">
                    <h4>Windows</h4>
                    <p>VIDYA for Windows operating system</p>
                  </div>
                </div>

                {/* Server Subsection */}
                <div className="subsection">
                  <h5 className="subsection-title">Server</h5>
                  <div className="download-links">
                    <a
                      href="https://github.com/dextify-org/vidya/releases"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="download-btn primary"
                    >
                      <img
                        src="/github-brands-solid-full.svg"
                        alt="GitHub"
                        className="btn-icon"
                      />
                      GitHub Releases
                    </a>
                  </div>
                </div>

                {/* Client Subsection */}
                <div className="subsection">
                  <h5 className="subsection-title">Client</h5>
                  <div className="coming-soon">
                    <span className="coming-soon-text">
                      Windows Client - Planned
                    </span>
                  </div>
                </div>
              </div>

              {/* macOS */}
              <div className="download-card">
                <div className="download-header">
                  <img
                    src="/apple-brands-solid-full.svg"
                    alt="macOS"
                    className="platform-icon"
                  />
                  <div className="download-info">
                    <h4>macOS</h4>
                    <p>VIDYA for macOS operating system</p>
                  </div>
                </div>

                {/* Server Subsection */}
                <div className="subsection">
                  <h5 className="subsection-title">Server</h5>
                  <div className="coming-soon">
                    <span className="coming-soon-text">Server Coming Soon</span>
                  </div>
                </div>

                {/* Client Subsection */}
                <div className="subsection">
                  <h5 className="subsection-title">Client</h5>
                  <div className="coming-soon">
                    <span className="coming-soon-text">
                      macOS Client - Planned
                    </span>
                  </div>
                </div>
              </div>

              {/* Linux */}
              <div className="download-card">
                <div className="download-header">
                  <img
                    src="/linux-brands-solid-full.svg"
                    alt="Linux"
                    className="platform-icon"
                  />
                  <div className="download-info">
                    <h4>Linux</h4>
                    <p>VIDYA for Linux distributions</p>
                  </div>
                </div>

                {/* Server Subsection */}
                <div className="subsection">
                  <h5 className="subsection-title">Server</h5>
                  <div className="coming-soon">
                    <span className="coming-soon-text">
                      Server Installer Coming Soon
                    </span>
                  </div>
                </div>

                {/* Client Subsection */}
                <div className="subsection">
                  <h5 className="subsection-title">Client</h5>
                  <div className="coming-soon">
                    <span className="coming-soon-text">
                      Linux Client - Planned
                    </span>
                  </div>
                </div>
              </div>

              {/* Android */}
              <div className="download-card">
                <div className="download-header">
                  <img
                    src="/android-brands-solid-full.svg"
                    alt="Android"
                    className="platform-icon"
                  />
                  <div className="download-info">
                    <h4>Android</h4>
                    <p>VIDYA for Android devices</p>
                  </div>
                </div>

                {/* Server Subsection */}
                <div className="subsection">
                  <h5 className="subsection-title">Server</h5>
                  <div className="download-links">
                    <a
                      href="https://github.com/dextify-org/vidya-termux"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="download-btn primary"
                    >
                      <img
                        src="/termux-svgrepo-com.svg"
                        alt="Termux"
                        className="btn-icon"
                      />
                      Termux
                    </a>
                  </div>
                </div>

                {/* Client Subsection */}
                <div className="subsection">
                  <h5 className="subsection-title">Client</h5>
                  <div className="download-links">
                    <a
                      href="https://play.google.com/store/apps/details?id=media.vidya.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="download-btn primary"
                    >
                      <img
                        src="/google-play-brands-solid-full.svg"
                        alt="Google Play"
                        className="btn-icon"
                      />
                      Google Play Store
                    </a>
                    <a href="#" className="download-btn secondary">
                      <img
                        src="/Fdroid Logo.svg"
                        alt="F-Droid"
                        className="btn-icon"
                      />
                      F-Droid
                    </a>
                    <a
                      href="https://github.com/dextify-org/vidya-app/releases"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="download-btn secondary"
                    >
                      <img
                        src="/github-brands-solid-full.svg"
                        alt="GitHub"
                        className="btn-icon"
                      />
                      GitHub Releases
                    </a>
                  </div>
                </div>
              </div>

              {/* iOS */}
              <div className="download-card">
                <div className="download-header">
                  <img
                    src="/app-store-ios-brands-solid-full.svg"
                    alt="iOS"
                    className="platform-icon"
                  />
                  <div className="download-info">
                    <h4>iOS</h4>
                    <p>VIDYA Mobile Client for iPhone and iPad</p>
                  </div>
                </div>

                {/* Client Subsection */}
                <div className="subsection">
                  <h5 className="subsection-title">Client</h5>
                  <div className="download-links">
                    <a href="#" className="download-btn primary">
                      <img
                        src="/app-store-ios-brands-solid-full.svg"
                        alt="App Store"
                        className="btn-icon"
                      />
                      App Store
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
