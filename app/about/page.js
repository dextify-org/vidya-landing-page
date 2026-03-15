import Navbar from "../components/Navbar";

export default function About() {
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

        <div className="about-section">
          <div className="section-content">
            <h2 className="section-title">About VIDYA</h2>
            <div className="about-content">
              <div className="about-card">
                <h3 className="about-subtitle">What is VIDYA?</h3>
                <p className="about-text">
                  VIDYA is a self-hosted, open-source media server designed
                  exclusively for educational content. Unlike traditional media
                  servers that treat videos like movies, VIDYA automatically
                  scans your local folders and structures them into organized
                  courses, creating a private e-learning platform from your
                  scattered video files.
                </p>
                <p className="about-text">
                  Built by DEXTIFY, VIDYA embodies our commitment to
                  privacy-focused software that empowers users with full control
                  over their data and learning experience.
                </p>
              </div>

              <div className="about-card">
                <h3 className="about-subtitle">Our Mission</h3>
                <p className="about-text">
                  We believe educational content deserves specialized tools.
                  VIDYA transforms how students, educators, and lifelong
                  learners organize and interact with video lectures, providing
                  features like progress tracking, bookmarking, and dedicated
                  study dashboards that generic media players simply cannot
                  offer.
                </p>
              </div>

              <div className="about-card">
                <h3 className="about-subtitle">Why VIDYA?</h3>
                <ul className="about-features">
                  <li>
                    <strong>Privacy-First:</strong> Your data stays on your
                    device, no cloud dependencies
                  </li>
                  <li>
                    <strong>Open Source:</strong> Transparent, community-driven
                    development under GPL v3
                  </li>
                  <li>
                    <strong>Forever Free:</strong> No premium tiers, no hidden
                    costs, no subscriptions
                  </li>
                  <li>
                    <strong>Educational Focus:</strong> Built specifically for
                    learning content and workflows
                  </li>
                  <li>
                    <strong>Self-Hosted:</strong> Complete control over your
                    media and metadata
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="privacy-section" id="privacy-policy">
          <div className="section-content">
            <h2 className="section-title">Privacy Policy</h2>
            <div className="policy-content">
              <div className="policy-card">
                <h3 className="policy-subtitle">Our Privacy Commitment</h3>
                <p className="policy-text">
                  At DEXTIFY, we believe privacy is a fundamental right. VIDYA
                  is designed to protect your privacy by keeping all data local
                  to your device. We don't collect, store, or have access to any
                  of your personal information, media files, or usage data.
                </p>
              </div>

              <div className="policy-card">
                <h3 className="policy-subtitle">Data Collection & Storage</h3>
                <p className="policy-text">
                  <strong>VIDYA does not collect any personal data.</strong> The
                  application runs entirely on your local machine or network,
                  and all data remains under your control.
                </p>
                <ul className="policy-list">
                  <li>
                    <strong>No Telemetry:</strong> We don't track usage,
                    crashes, or performance metrics
                  </li>
                  <li>
                    <strong>No Analytics:</strong> No user behavior tracking or
                    analytics services
                  </li>
                  <li>
                    <strong>No Cloud Storage:</strong> Your media files and
                    metadata never leave your system
                  </li>
                  <li>
                    <strong>No Personal Information:</strong> We don't collect
                    names, emails, or any identifiers
                  </li>
                </ul>
              </div>

              <div className="policy-card">
                <h3 className="policy-subtitle">Local Data Only</h3>
                <p className="policy-text">
                  VIDYA stores all information locally on your device or
                  network:
                </p>
                <ul className="policy-list">
                  <li>
                    Video files remain in their original folders on your storage
                  </li>
                  <li>Progress tracking data is stored in local databases</li>
                  <li>Bookmarks and preferences are saved locally</li>
                  <li>Metadata extraction happens on your device only</li>
                </ul>
              </div>

              <div className="policy-card">
                <h3 className="policy-subtitle">Network Communication</h3>
                <p className="policy-text">
                  VIDYA only communicates with the internet when you explicitly
                  choose to:
                </p>
                <ul className="policy-list">
                  <li>Download updates from our official repositories</li>
                  <li>Access documentation hosted on our website</li>
                  <li>Optional: Check for version updates (can be disabled)</li>
                </ul>
                <p className="policy-text">
                  <strong>Note:</strong> Even when checking for updates, only
                  version information is exchanged. No personal data or usage
                  statistics are transmitted.
                </p>
              </div>

              <div className="policy-card">
                <h3 className="policy-subtitle">Third-Party Services</h3>
                <p className="policy-text">
                  VIDYA does not integrate with third-party analytics,
                  advertising, or tracking services. We believe in providing a
                  completely private experience without compromising your data
                  for profit or convenience.
                </p>
              </div>

              <div className="policy-card">
                <h3 className="policy-subtitle">Children's Privacy</h3>
                <p className="policy-text">
                  VIDYA is designed to be safe for users of all ages. Since we
                  don't collect any personal information, the app is naturally
                  compliant with children's privacy protection regulations like
                  COPPA. Parents can confidently use VIDYA for their children's
                  education without privacy concerns.
                </p>
              </div>

              <div className="policy-card">
                <h3 className="policy-subtitle">Policy Changes</h3>
                <p className="policy-text">
                  Our privacy policy may change, but our commitment to privacy
                  won't. Any changes will be posted here and in the application.
                  Since we don't collect data, policy changes typically relate
                  to clarifications rather than new data practices.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="terms-section" id="terms-of-service">
          <div className="section-content">
            <h2 className="section-title">Terms of Service</h2>
            <div className="terms-content">
              <div className="terms-card">
                <h3 className="terms-subtitle">Software License</h3>
                <p className="terms-text">
                  VIDYA is free software licensed under the GNU General Public
                  License v3 (GPL v3). This license grants you specific rights
                  to use, modify, and distribute the software.
                </p>
              </div>

              <div className="terms-card">
                <h3 className="terms-subtitle">What You Can Do</h3>
                <p className="terms-text">
                  Under GPL v3, you have the right to:
                </p>
                <ul className="terms-list">
                  <li>
                    <strong>Use:</strong> Run VIDYA for any purpose, commercial
                    or non-commercial
                  </li>
                  <li>
                    <strong>Study:</strong> Access the source code and
                    understand how it works
                  </li>
                  <li>
                    <strong>Modify:</strong> Change the software to suit your
                    needs
                  </li>
                  <li>
                    <strong>Distribute:</strong> Share original or modified
                    versions with others
                  </li>
                  <li>
                    <strong>Contribute:</strong> Submit improvements back to the
                    project
                  </li>
                </ul>
              </div>

              <div className="terms-card">
                <h3 className="terms-subtitle">Important Restrictions</h3>
                <p className="terms-text">
                  To protect the VIDYA project and users, GPL v3 includes these
                  important conditions:
                </p>
                <ul className="terms-list">
                  <li>
                    <strong>No Trademark Use:</strong> You cannot use "VIDYA" or
                    DEXTIFY trademarks for your modified versions
                  </li>
                  <li>
                    <strong>Same License:</strong> Modified versions must also
                    be licensed under GPL v3
                  </li>
                  <li>
                    <strong>Source Access:</strong> If you distribute modified
                    versions, you must provide source code
                  </li>
                  <li>
                    <strong>No Additional Restrictions:</strong> You cannot add
                    further restrictions on users' GPL rights
                  </li>
                </ul>
              </div>

              <div className="terms-card">
                <h3 className="terms-subtitle">No Warranty</h3>
                <p className="terms-text">
                  VIDYA is provided "AS IS" without warranty of any kind. We
                  make every effort to ensure quality and reliability, but:
                </p>
                <ul className="terms-list">
                  <li>No guarantee of fitness for a particular purpose</li>
                  <li>No guarantee of error-free operation</li>
                  <li>No liability for data loss or system damage</li>
                  <li>Use at your own risk and responsibility</li>
                </ul>
              </div>

              <div className="terms-card">
                <h3 className="terms-subtitle">
                  Copyright & Intellectual Property
                </h3>
                <p className="terms-text">
                  VIDYA was created by DEXTIFY as a free and open-source
                  project. Like all creative works, VIDYA is automatically
                  copyrighted by its creator - this protection exists the moment
                  the code was written.
                </p>
                <p className="terms-text">
                  But don't let the word "copyright" scare you! This copyright
                  exists solely to protect you and the VIDYA community. It
                  prevents others from taking our code, making minor changes,
                  and redistributing it as "VIDYA" - which would create
                  confusion and potentially compromise the quality and security
                  you trust.
                </p>
                <p className="terms-text">
                  Think of it this way: copyright ensures that when you download
                  "VIDYA," you're getting the authentic, community-driven
                  software we built together. It protects the project's
                  integrity while keeping VIDYA completely free, open-source,
                  and available for everyone to use, modify, and share under the
                  GPL v3 license.
                </p>
                <p className="terms-text">
                  <strong>Bottom line:</strong> VIDYA is, and always will be,
                  free and open source. The copyright just makes sure it stays
                  trustworthy and reliable for all users.
                </p>
              </div>

              <div className="terms-card">
                <h3 className="terms-subtitle">Website & Documentation</h3>
                <p className="terms-text">
                  This website and its contents (design, text, images, code) are
                  copyrighted by DEXTIFY and are NOT licensed under GPL v3. You
                  may not:
                </p>
                <ul className="terms-list">
                  <li>
                    Copy and redistribute this website as-is or with minor
                    changes
                  </li>
                  <li>
                    Use our design, layout, or branding for your own projects
                  </li>
                  <li>Scrape or repurpose our content without permission</li>
                  <li>Create derivative works based on our website design</li>
                </ul>
                <p className="terms-text">
                  <strong>Note:</strong> This protects the VIDYA brand and
                  prevents confusion among users. The software remains free and
                  open source, but our website and documentation are creative
                  works that we reserve the right to protect.
                </p>
              </div>

              <div className="terms-card">
                <h3 className="terms-subtitle">User Responsibilities</h3>
                <p className="terms-text">As a VIDYA user, you agree to:</p>
                <ul className="terms-list">
                  <li>Use VIDYA in compliance with applicable laws</li>
                  <li>Respect intellectual property rights of others</li>
                  <li>Not use VIDYA for illegal or harmful purposes</li>
                  <li>
                    Take responsibility for your media content and backups
                  </li>
                </ul>
              </div>

              <div className="terms-card">
                <h3 className="terms-subtitle">
                  Modifications & Redistribution
                </h3>
                <p className="terms-text">If you modify VIDYA, you must:</p>
                <ul className="terms-list">
                  <li>Clearly indicate that your version is modified</li>
                  <li>Not use "VIDYA" branding for your modified version</li>
                  <li>License your modifications under GPL v3</li>
                  <li>Provide source code for your modifications</li>
                </ul>
                <p className="terms-text">
                  <strong>Important:</strong> You cannot redistribute modified
                  versions under the "VIDYA" name or claim they are the official
                  VIDYA software. This prevents user confusion and protects the
                  VIDYA brand reputation.
                </p>
              </div>

              <div className="terms-card">
                <h3 className="terms-subtitle">Termination</h3>
                <p className="terms-text">
                  These terms continue as long as you use VIDYA. If you violate
                  these terms, your rights under the license may be terminated.
                  However, users who receive modified versions from you retain
                  their rights.
                </p>
              </div>

              <div className="terms-card">
                <h3 className="terms-subtitle">Contact & Questions</h3>
                <p className="terms-text">
                  For questions about these terms, licensing, or to report
                  violations:
                </p>
                <ul className="terms-list">
                  <li>Visit our website: https://dextify.org</li>
                  <li>Check our GitHub repository for licensing information</li>
                  <li>
                    Review the full GPL v3 license text included with VIDYA
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="server-policy-section">
          <div className="section-content">
            <h2 className="section-title">Server Policy</h2>
            <div className="server-policy-content">
              <div className="server-policy-card">
                <h3 className="server-policy-subtitle">
                  VIDYA Project Position
                </h3>
                <p className="server-policy-text">
                  VIDYA is a free and open source project that provides the
                  tools to run your own server for hosting your educational
                  video content, and clients to connect to one of those servers.
                </p>
                <p className="server-policy-text">
                  The VIDYA Project itself, and members of the VIDYA team, do
                  not provide servers for you to use, with the sole exception of
                  our demo server for evaluation and testing purposes.
                </p>
              </div>

              <div className="server-policy-card">
                <h3 className="server-policy-subtitle">
                  If You Are Using Someone Else's "VIDYA" Server
                </h3>
                <p className="server-policy-text">
                  If you are using or paying someone for "VIDYA" (i.e., access
                  to a specific server):
                </p>
                <ul className="server-policy-list">
                  <li>
                    <strong>It is not us.</strong> We do not run that server. Do
                    not contact us, privately or publicly, for help with
                    connecting, resetting your password, or other
                    server-specific issues.
                  </li>
                  <li>
                    <strong>We cannot help you.</strong> Because we do not run
                    the server, we have no access to it and cannot provide
                    support.
                  </li>
                  <li>
                    <strong>Contact your provider.</strong> You must contact
                    whoever you are paying or who provided you access. If you do
                    not know who that is, we cannot help you.
                  </li>
                  <li>
                    <strong>Content responsibility.</strong> Ensure the server
                    contains legitimate educational content that you have rights
                    to access. We do not endorse or support unauthorized
                    content.
                  </li>
                </ul>
                <p className="server-policy-text">
                  <strong>Important:</strong> Requests for support with other
                  people's servers will be ignored. Please direct all
                  server-specific questions to your server provider.
                </p>
              </div>

              <div className="server-policy-card">
                <h3 className="server-policy-subtitle">
                  If You Run A VIDYA Server
                </h3>
                <p className="server-policy-text">
                  If you run a VIDYA server instance for other people, ensure
                  that your users are aware that you are their contact for help
                  and support, not us as a project. We are not your server's
                  "customer support" team. You are not "VIDYA" - do not
                  insinuate to your users that your server is run by us or that
                  we are the same people.
                </p>
                <p className="server-policy-text">
                  <strong>Best Practices:</strong>
                </p>
                <ul className="server-policy-list">
                  <li>
                    <strong>Clear communication:</strong> Make it clear to your
                    users that you are their point of contact for server issues
                  </li>
                  <li>
                    <strong>Educational focus:</strong> Ensure your server
                    contains legitimate educational content that users have
                    rights to access
                  </li>
                  <li>
                    <strong>Proper attribution:</strong> Do not claim to be the
                    official VIDYA project or imply official endorsement
                  </li>
                  <li>
                    <strong>Support channels:</strong> Provide your users with
                    appropriate contact methods for server-specific help
                  </li>
                </ul>
              </div>

              <div className="server-policy-card">
                <h3 className="server-policy-subtitle">
                  Educational Content Guidelines
                </h3>
                <p className="server-policy-text">
                  VIDYA is designed specifically for educational content. Server
                  operators should:
                </p>
                <ul className="server-policy-list">
                  <li>
                    <strong>Respect copyright:</strong> Only host educational
                    content that you have legal rights to distribute
                  </li>
                  <li>
                    <strong>Maintain educational focus:</strong> Keep content
                    relevant to learning and education
                  </li>
                  <li>
                    <strong>User access control:</strong> Implement appropriate
                    access controls for your educational content
                  </li>
                  <li>
                    <strong>Content organization:</strong> Use VIDYA's course
                    organization features appropriately
                  </li>
                </ul>
              </div>

              <div className="server-policy-card">
                <h3 className="server-policy-subtitle">
                  Enforcement & Consequences
                </h3>
                <p className="server-policy-text">
                  We will direct users to this page if they contact us for help
                  with specific issues on servers we do not operate. Server
                  operators who violate these guidelines may face:
                </p>
                <ul className="server-policy-list">
                  <li>
                    <strong>Support channel restrictions:</strong> Banning from
                    official VIDYA support channels
                  </li>
                  <li>
                    <strong>Hosting provider reports:</strong> We reserve the
                    right to report violations (such as copyright infringement)
                    to appropriate hosting providers
                  </li>
                  <li>
                    <strong>Community standards enforcement:</strong> Violations
                    will not be tolerated in our community spaces
                  </li>
                </ul>
                <p className="server-policy-text">
                  <strong>You have been warned.</strong> These policies exist to
                  protect users, maintain the integrity of the VIDYA project,
                  and ensure everyone has a positive experience with legitimate
                  educational content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
