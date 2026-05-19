import Navbar from "../components/Navbar";

export default function Contact() {
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

        <div className="contact-section">
          <div className="section-content">
            <h2 className="section-title">Get in Touch</h2>
            <div className="contact-content">
              <div className="contact-card">
                <h3 className="contact-subtitle">Contact VIDYA</h3>
                <p className="contact-text">
                  We'd love to hear from you! Whether you have questions about
                  VIDYA, need technical support, or want to contribute to the
                  project, there are several ways to get in touch with us.
                </p>
              </div>

              <div className="contact-grid">
                <div className="contact-method-card">
                  <div className="contact-icon">
                    <img
                      src="/github-brands-solid-full.svg"
                      alt="GitHub"
                      className="contact-method-icon"
                    />
                  </div>
                  <h4 className="contact-method-title">GitHub</h4>
                  <p className="contact-method-description">
                    Report bugs, request features, or contribute to the codebase
                  </p>
                  <a
                    href="https://github.com/dextify-org/vidya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-method-link"
                  >
                    Visit Repository
                  </a>
                </div>

                <div className="contact-method-card">
                  <div className="contact-icon">
                    <img
                      src="/globe-solid-full.svg"
                      alt="Website"
                      className="contact-method-icon"
                    />
                  </div>
                  <h4 className="contact-method-title">DEXTIFY Website</h4>
                  <p className="contact-method-description">
                    Learn more about our company and other projects
                  </p>
                  <a
                    href="https://dextify.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-method-link"
                  >
                    Visit Website
                  </a>
                </div>

                <div className="contact-method-card">
                  <div className="contact-icon">
                    <img
                      src="/lock-open-solid-full.svg"
                      alt="Privacy"
                      className="contact-method-icon"
                    />
                  </div>
                  <h4 className="contact-method-title">Privacy & Security</h4>
                  <p className="contact-method-description">
                    Questions about privacy, security, or data handling
                  </p>
                  <a
                    href="mailto:privacy@dextify.org"
                    className="contact-method-link"
                  >
                    privacy@dextify.org
                  </a>
                </div>

                <div className="contact-method-card">
                  <div className="contact-icon">
                    <img
                      src="/osi-brands-solid-full.svg"
                      alt="Discord"
                      className="contact-method-icon"
                    />
                  </div>
                  <h4 className="contact-method-title">Discord</h4>
                  <p className="contact-method-description">
                    Chat with the community, get help, and share ideas
                  </p>
                  <a
                    href="https://discord.gg/uavHJumK5v"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-method-link"
                  >
                    Join Server
                  </a>
                </div>

                <div className="contact-method-card">
                  <div className="contact-icon">
                    <img
                      src="/globe-solid-full.svg"
                      alt="X / Twitter"
                      className="contact-method-icon"
                    />
                  </div>
                  <h4 className="contact-method-title">X / Twitter</h4>
                  <p className="contact-method-description">
                    Follow for updates, announcements, and news
                  </p>
                  <a
                    href="https://x.com/vidya_server"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-method-link"
                  >
                    @vidya_server
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="support-section">
          <div className="section-content">
            <h2 className="section-title">Support & Help</h2>
            <div className="support-content">
              <div className="support-card">
                <h3 className="support-subtitle">Getting Help with VIDYA</h3>
                <p className="support-text">
                  VIDYA is community-supported software. Here's how to get the
                  help you need:
                </p>

                <div className="support-steps">
                  <div className="support-step">
                    <div className="step-number">1</div>
                    <div className="step-content">
                      <h4 className="step-title">Check Documentation</h4>
                      <p className="step-description">
                        Our comprehensive documentation covers installation,
                        configuration, and common issues
                      </p>
                      <a href="/docs" className="step-link">
                        Read Documentation
                      </a>
                    </div>
                  </div>

                  <div className="support-step">
                    <div className="step-number">2</div>
                    <div className="step-content">
                      <h4 className="step-title">Search GitHub Issues</h4>
                      <p className="step-description">
                        Someone may have already encountered and solved your
                        problem
                      </p>
                      <a
                        href="https://github.com/dextify-org/vidya/issues"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="step-link"
                      >
                        Search Issues
                      </a>
                    </div>
                  </div>

                  <div className="support-step">
                    <div className="step-number">3</div>
                    <div className="step-content">
                      <h4 className="step-title">Create New Issue</h4>
                      <p className="step-description">
                        If you can't find a solution, create a detailed issue
                        report
                      </p>
                      <a
                        href="https://github.com/dextify-org/vidya/issues/new"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="step-link"
                      >
                        Create Issue
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="support-card">
                <h3 className="support-subtitle">Community Guidelines</h3>
                <p className="support-text">
                  We maintain a welcoming and respectful community. Please
                  follow these guidelines:
                </p>

                <ul className="guidelines-list">
                  <li>Be respectful and constructive in all interactions</li>
                  <li>
                    Search before asking - your question may already be answered
                  </li>
                  <li>Provide detailed information when reporting issues</li>
                  <li>
                    Help others if you can - community support makes VIDYA
                    better
                  </li>
                  <li>Follow our code of conduct in all community spaces</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="contribution-section">
          <div className="section-content">
            <h2 className="section-title">Contribute to VIDYA</h2>
            <div className="contribution-content">
              <div className="contribution-card">
                <h3 className="contribution-subtitle">How to Contribute</h3>
                <p className="contribution-text">
                  VIDYA thrives on community contributions. Whether you're a
                  developer, designer, writer, or enthusiast, there are many
                  ways to help:
                </p>

                <div className="contribution-types">
                  <div className="contribution-type">
                    <h4 className="contribution-type-title">
                      Code Contributions
                    </h4>
                    <p className="contribution-type-description">
                      Fix bugs, add features, improve performance, or enhance
                      the user interface
                    </p>
                  </div>

                  <div className="contribution-type">
                    <h4 className="contribution-type-title">Documentation</h4>
                    <p className="contribution-type-description">
                      Improve our documentation, write tutorials, or translate
                      content
                    </p>
                  </div>

                  <div className="contribution-type">
                    <h4 className="contribution-type-title">
                      Testing & Feedback
                    </h4>
                    <p className="contribution-type-description">
                      Test new features, report bugs, and provide user
                      experience feedback
                    </p>
                  </div>

                  <div className="contribution-type">
                    <h4 className="contribution-type-title">
                      Community Support
                    </h4>
                    <p className="contribution-type-description">
                      Help other users, answer questions, and share your
                      knowledge
                    </p>
                  </div>
                </div>

                <div className="contribution-cta">
                  <h4 className="cta-title">Ready to Contribute?</h4>
                  <p className="cta-description">
                    Join our GitHub repository and start making a difference in
                    educational technology
                  </p>
                  <a
                    href="https://github.com/dextify-org/vidya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-button"
                  >
                    Start Contributing
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
