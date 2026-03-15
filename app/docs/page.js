import Link from "next/link";

export default function Docs() {
  return (
    <div className="docs-page">
      <div className="background">
        <div className="circle"></div>
        <div className="circle2"></div>
        <div className="circle3"></div>
        <div className="circle8"></div>
      </div>
      <div className="docs-sidebar">
        <div className="docs-sidebar-header">
          <Link href="/" className="docs-logo">
            VIDYA
          </Link>
          <span className="docs-label">Docs</span>
        </div>
        <nav className="docs-nav">
          <a href="#introduction" className="docs-nav-link">
            Introduction
          </a>
          <a href="#quick-start" className="docs-nav-link">
            Quick Start Guide
          </a>
          <a href="#installation" className="docs-nav-link">
            Installation
          </a>
          <a href="#installation" className="docs-nav-sublink">
            Windows
          </a>
          <a href="#macos" className="docs-nav-sublink">
            macOS
          </a>
          <a href="#linux" className="docs-nav-sublink">
            Linux
          </a>
          <a href="#docker" className="docs-nav-sublink">
            Docker
          </a>
          <a href="#building-from-source" className="docs-nav-link">
            Building from Source
          </a>
          <a href="#post-install" className="docs-nav-link">
            Post-Install Setup
          </a>
          <a href="#folder-structure" className="docs-nav-link">
            Folder Structure
          </a>
          <a href="#clients" className="docs-nav-link">
            Clients
          </a>
        </nav>
      </div>

      <main className="docs-content">
        <section id="introduction" className="docs-section">
          <h1 className="docs-page-title">Introduction</h1>
          <p>
            Welcome to the official documentation for <strong>VIDYA</strong>.
          </p>
          <p>
            VIDYA is a Free Software Media System that puts you in control of
            managing, tracking, and streaming your video lectures and
            educational content. Unlike standard media servers built for movies
            and TV shows, this platform is engineered specifically for learning.
            There are no premium licenses, no hidden tracking, and no
            centralized servers—just your files, beautifully organized and
            accessible from any device.
          </p>
          <p>
            Whether you are a student, a self-taught developer, or an IT
            professional, this server allows you to build a structured,
            self-hosted curriculum.
          </p>
        </section>

        <hr className="docs-divider" />

        <section id="quick-start" className="docs-section">
          <h2>Quick Start Guide</h2>
          <p>
            Getting up and running takes just a few minutes. To start studying:
          </p>
          <ol>
            <li>
              <strong>Install the Server:</strong> Choose your operating system
              below and install the core server application.
            </li>
            <li>
              <strong>Launch the Dashboard:</strong> Open your web browser and
              navigate to the server's local address to run the initial setup
              wizard.
            </li>
            <li>
              <strong>Download Clients:</strong> Connect to your newly
              established learning hub using our dedicated client apps.
            </li>
          </ol>
        </section>

        <hr className="docs-divider" />

        <section id="installation" className="docs-section">
          <h2>Installation</h2>
          <p>
            Select your preferred platform to see the installation instructions.
          </p>

          <h3>Windows</h3>
          <ol>
            <li>
              Download the latest Windows Installer (<code>.exe</code>) from our{" "}
              <a href="#" className="docs-link">
                GitHub Releases Page
              </a>
              .
            </li>
            <li>Run the installer and follow the on-screen prompts.</li>
            <li>
              Once installed and running, open your web browser and navigate to:{" "}
              <code>http://&lt;Your-Local-IP&gt;:31415</code>{" "}
              <em>(Yes, the port is the first few digits of Pi!)</em>
            </li>
          </ol>

          <div className="docs-callout">
            <h4>Updating on Windows</h4>
            <p>
              To update to a newer version, simply close the running
              application, download the latest installer from GitHub, and run
              it. It will safely overwrite the necessary files without touching
              your database or progress.
            </p>
          </div>

          <div className="docs-callout">
            <h4>Uninstalling</h4>
            <p>
              To completely remove the server, go to{" "}
              <strong>Settings &gt; Apps &gt; Add or remove programs</strong> in
              Windows, locate the app, and click "Uninstall".
            </p>
          </div>

          <h3 id="macos">macOS</h3>
          <p>
            <em>The native macOS installer is coming soon!</em> In the meantime,
            the best and most hassle-free way to run the server on macOS is by
            using <strong>Docker</strong> (see the Docker section below).
          </p>

          <h3 id="linux">Linux</h3>
          <p>
            <em>Native Linux packages (Debian/Ubuntu/Arch) are coming soon!</em>
            <br />
            For now, we highly recommend using <strong>Docker</strong> as the
            most reliable and hassle-free deployment method.
          </p>

          <h3 id="docker">Docker</h3>
          <p>
            Running via Docker ensures you have an isolated, easily updatable
            environment.
          </p>

          <h4>Docker Compose:</h4>
          <pre className="docs-code-block">
            <code>{`# Add your docker-compose.yml configuration here`}</code>
          </pre>

          <h4>Docker CLI:</h4>
          <pre className="docs-code-block">
            <code>{`# Add your docker run command here`}</code>
          </pre>
        </section>

        <hr className="docs-divider" />

        <section id="building-from-source" className="docs-section">
          <h2>Advanced Installation: Building from Source</h2>
          <p>
            If you prefer to compile the application yourself, follow these
            steps.
          </p>

          <h3>Windows</h3>
          <ol>
            <li>
              Download the source code. You can either download the ZIP file
              directly from our{" "}
              <a href="#" className="docs-link">
                GitHub Repository
              </a>{" "}
              or clone it using Git:
              <pre className="docs-code-block">
                <code>{`git clone https://github.com/yourusername/yourproject.git`}</code>
              </pre>
            </li>
            <li>Navigate into the downloaded folder.</li>
            <li>
              Run the <code>build-installer</code> script (e.g.,{" "}
              <code>build.bat</code> or <code>npm run build:installer</code>).
            </li>
            <li>
              The script will compile the code and generate an <code>.exe</code>{" "}
              installer in the output/build directory.
            </li>
            <li>
              Run the generated <code>.exe</code> installer to install the
              server.
            </li>
          </ol>

          <h3>macOS &amp; Linux</h3>
          <p>
            <em>Build instructions for macOS and Linux are coming soon.</em>
          </p>
        </section>

        <hr className="docs-divider" />

        <section id="post-install" className="docs-section">
          <h2>Post-Install Setup</h2>
          <p>
            Once you launch the server for the first time on{" "}
            <code>http://&lt;Your-IP&gt;:31415</code>, you will be greeted by
            the initial setup wizard.
          </p>

          <ol>
            <li>
              <strong>Welcome Screen:</strong> You will see the initial welcome
              greeting. Click <strong>Next</strong> to continue.
              <div className="docs-screenshot-placeholder">
                [Insert Screenshot: Welcome Screen]
              </div>
            </li>
            <li>
              <strong>Select Media Folders:</strong> The wizard will prompt you
              to select the root folder(s) where your video lectures are stored.
              Make sure your folders follow our{" "}
              <a href="#folder-structure" className="docs-link">
                Folder Structure
              </a>{" "}
              guidelines. Once selected, click <strong>Next</strong>.
            </li>
            <li>
              <strong>Administrator Setup:</strong> Create your admin account.
              Enter your desired username and password.
              <div className="docs-screenshot-placeholder">
                [Insert Screenshot: Admin Setup Screen]
              </div>
            </li>
            <li>
              <strong>Finish &amp; Scan:</strong> Click <strong>Finish</strong>.
              The server will now perform an initial scan of your folders.
              Please wait a moment for the scan to complete.
            </li>
          </ol>

          <div className="docs-callout">
            <h4>Organizing Your Courses</h4>
            <p>Once the scan is finished and you are on the Home Page:</p>
            <ol>
              <li>
                Navigate to the <strong>Video Lectures</strong> page.
              </li>
              <li>Select any course you want to edit.</li>
              <li>
                Click the <strong>Three-Dot Menu (&vellip;)</strong> and select{" "}
                <strong>Edit</strong>.
              </li>
              <li>
                Add an attractive cover image, assign a category, and input the
                instructor's name.
              </li>
              <li>
                Repeat this for your other courses to build a beautiful,
                personalized library!
              </li>
            </ol>
          </div>
        </section>

        <hr className="docs-divider" />

        <section id="folder-structure" className="docs-section">
          <h2>Folder Structure</h2>
          <p>
            For the server to correctly analyze, structure, and sort your
            lectures, your files must be organized in a specific hierarchy.
          </p>
          <p>
            Your files should follow a{" "}
            <strong>Course &gt; Section &gt; Files</strong> format. It is highly
            recommended to use <strong>numerical prefixes</strong> (e.g., 01,
            02) so the server can sort the lectures in the exact order they are
            meant to be watched.
          </p>

          <h4>Example Directory Structure:</h4>
          <pre className="docs-code-block">
            <code>{`📁 Video Lectures (Root Folder selected during setup)
 └── 📁 Master Python (Course Name)
      ├── 📁 01 Introduction to python (Section)
      │    ├── 📄 01 what is python.mp4 (Video Lecture)
      │    ├── 📄 01 lecture files.zip (Supplementary Material)
      │    ├── 📄 01 lecture files.html (Notes)
      │    └── 📄 01 lecture files.pdf (Slides)
      ├── 📁 02 if statement (Section)
      │    └── 📄 01 basic if logic.mp4
      └── 📁 03 conditions (Section)
           └── 📄 01 nested conditions.mp4`}</code>
          </pre>

          <p>
            As long as you keep the sections and files numbered, your curriculum
            will load in perfect sequential order.
          </p>
        </section>

        <hr className="docs-divider" />

        <section id="clients" className="docs-section">
          <h2>Clients</h2>
          <p>
            To watch your lectures on other devices, simply download the client
            app for your device.
          </p>
          <p>
            Upon launching the app, you will be asked to connect to your server.
            Simply enter your server's IP address along with the port (e.g.,{" "}
            <code>http://192.168.1.100:31415</code>) and log in with the
            credentials you created during setup.
          </p>
        </section>
      </main>
    </div>
  );
}
