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
          <a href="#windows" className="docs-nav-sublink">
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
          <a href="#build-prerequisites" className="docs-nav-sublink">
            Prerequisites
          </a>
          <a href="#build-development" className="docs-nav-sublink">
            Development Mode
          </a>
          <a href="#build-windows-auto" className="docs-nav-sublink">
            Windows (Automated)
          </a>
          <a href="#build-windows-manual" className="docs-nav-sublink">
            Windows (Manual)
          </a>
          <a href="#build-docker" className="docs-nav-sublink">
            Docker Build
          </a>
          <a href="#tray-app" className="docs-nav-sublink">
            Tray App
          </a>
          <a href="#post-install" className="docs-nav-link">
            Post-Install Setup
          </a>
          <a href="#folder-structure" className="docs-nav-link">
            Folder Structure
          </a>
          <a href="#configuration" className="docs-nav-link">
            Configuration
          </a>
          <a href="#api-overview" className="docs-nav-link">
            API Overview
          </a>
          <a href="#project-structure" className="docs-nav-link">
            Project Structure
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
            VIDYA is a free and open-source media server designed exclusively
            for video lectures and educational content. Unlike standard media
            servers built for movies and TV shows, VIDYA automatically scans
            your local folders and organizes them into structured courses —
            turning your scattered video files into a private, fully-featured
            e-learning platform.
          </p>
          <p>
            There are no premium licenses, no hidden tracking, and no
            centralized servers — just your files, beautifully organized and
            accessible from any device. Whether you are a student, a self-taught
            developer, or an IT professional, this server allows you to build a
            structured, self-hosted curriculum.
          </p>

          <h3>Key Features</h3>
          <ul>
            <li>
              <strong>Course Organization</strong> — Automatically structures
              video files into organized courses with sections and lectures
            </li>
            <li>
              <strong>Progress Tracking</strong> — Track your learning progress
              across courses and individual lectures
            </li>
            <li>
              <strong>Bookmarking & Tagging</strong> — Bookmark important
              moments and tag content for quick access
            </li>
            <li>
              <strong>Study Dashboard</strong> — Dedicated dashboard with daily
              watch statistics and learning insights
            </li>
            <li>
              <strong>Multi-User Support</strong> — Create accounts for multiple
              users with role-based access
            </li>
            <li>
              <strong>Search</strong> — Search across courses, lectures,
              instructors, and categories
            </li>
            <li>
              <strong>Self-Hosted</strong> — Your data stays on your machine, no
              cloud dependencies
            </li>
            <li>
              <strong>Cross-Platform Clients</strong> — Access your content from
              any device
            </li>
          </ul>

          <h3>Tech Stack</h3>
          <ul>
            <li>
              <strong>Frontend:</strong> React 18, React Router, Framer Motion
            </li>
            <li>
              <strong>Backend:</strong> Node.js, Express.js
            </li>
            <li>
              <strong>Database:</strong> SQLite (via Sequelize ORM)
            </li>
            <li>
              <strong>Authentication:</strong> Passport.js with local strategy
            </li>
            <li>
              <strong>Media Processing:</strong> FFprobe, Sharp
            </li>
            <li>
              <strong>Windows Tray App:</strong> .NET 6.0 (C#)
            </li>
            <li>
              <strong>Installer:</strong> NSIS
            </li>
            <li>
              <strong>Containerization:</strong> Docker
            </li>
          </ul>
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
              navigate to <code>http://localhost:31415</code> to run the initial
              setup wizard.
            </li>
            <li>
              <strong>Add Your Media:</strong> Point VIDYA at your lecture
              folders and let it organize everything automatically.
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

          <h3 id="windows">Windows</h3>
          <ol>
            <li>
              Download the latest <code>VIDYA-x64.exe</code> installer from our{" "}
              <a
                href="https://github.com/dextify-org/vidya/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="docs-link"
              >
                GitHub Releases Page
              </a>
              .
            </li>
            <li>
              Run the installer and follow the on-screen prompts. The installer
              bundles everything you need — Node.js runtime, server backend, web
              frontend, and the system tray application.
            </li>
            <li>
              Once installed, VIDYA will launch automatically. Open your browser
              and navigate to: <code>http://localhost:31415</code>
            </li>
          </ol>

          <div className="docs-callout">
            <h4>What the Installer Does</h4>
            <ul>
              <li>
                Installs to <code>C:\Program Files\VIDYA</code>
              </li>
              <li>Creates Start Menu and Desktop shortcuts</li>
              <li>Registers in Windows Add/Remove Programs</li>
              <li>
                Stores user data in <code>%LOCALAPPDATA%\VIDYA</code>
              </li>
              <li>Includes a system tray app for easy server management</li>
            </ul>
          </div>

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
              Windows, locate VIDYA, and click "Uninstall". You will be given
              the option to keep or remove your user data and settings.
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
          </p>
          <p>
            For now, we highly recommend using <strong>Docker</strong> as the
            most reliable and hassle-free deployment method for Linux.
          </p>

          <h3 id="docker">Docker</h3>
          <p>
            Running via Docker ensures you have an isolated, easily updatable
            environment. This is the recommended method for macOS and Linux.
          </p>

          <h4>Docker Compose (Recommended):</h4>
          <p>
            Create a <code>docker-compose.yml</code> file:
          </p>
          <pre className="docs-code-block">
            <code>{`services:
  vidya:
    image: ghcr.io/dextify-org/vidya:latest
    container_name: vidya
    ports:
      - "31415:31415"
    volumes:
      - ./vidya-data:/data
      - /path/to/your/media:/media:ro
    environment:
      - VIDYA_DATA_PATH=/data
      - PORT=31415
    restart: unless-stopped

volumes:
  vidya-data:
    driver: local`}</code>
          </pre>

          <p>Then start the container:</p>
          <pre className="docs-code-block">
            <code>{`docker compose up -d`}</code>
          </pre>

          <h4>Docker CLI:</h4>
          <pre className="docs-code-block">
            <code>{`docker run -d \\
  --name vidya \\
  -p 31415:31415 \\
  -v ./vidya-data:/data \\
  -v /path/to/your/media:/media:ro \\
  -e VIDYA_DATA_PATH=/data \\
  -e PORT=31415 \\
  --restart unless-stopped \\
  ghcr.io/dextify-org/vidya:latest`}</code>
          </pre>

          <p>
            Then open <code>http://localhost:31415</code> in your browser.
          </p>

          <div className="docs-callout">
            <h4>Volume Mounts</h4>
            <ul>
              <li>
                <code>./vidya-data:/data</code> — Stores database, settings, and
                assets (persistent)
              </li>
              <li>
                <code>/path/to/your/media:/media:ro</code> — Mount your lecture
                folders as read-only
              </li>
            </ul>
          </div>
        </section>

        <hr className="docs-divider" />

        <section id="building-from-source" className="docs-section">
          <h2>Building from Source</h2>
          <p>
            If you prefer to compile the application yourself, follow these
            instructions. The project uses npm workspaces to manage both
            frontend and backend dependencies.
          </p>

          <h3 id="build-prerequisites">Prerequisites</h3>
          <ul>
            <li>
              <strong>Node.js 20+</strong> — Required for frontend and backend
            </li>
            <li>
              <strong>npm 9+</strong> — Dependency management
            </li>
            <li>
              <strong>NSIS 3.x</strong> — Windows installer compilation
              (optional, for building the Windows installer)
            </li>
            <li>
              <strong>.NET SDK 6.0</strong> — Building tray app from source
              (optional)
            </li>
            <li>
              <strong>Docker 20+</strong> — Docker builds (optional)
            </li>
          </ul>

          <h3>Clone & Install</h3>
          <pre className="docs-code-block">
            <code>{`git clone https://github.com/dextify-org/vidya.git
cd vidya
npm install`}</code>
          </pre>
          <p>
            The <code>npm install</code> command installs both frontend and
            backend dependencies automatically via npm workspaces.
          </p>

          <h3 id="build-development">Development Mode</h3>
          <p>Run the frontend dev server and backend simultaneously:</p>
          <pre className="docs-code-block">
            <code>{`npm run dev`}</code>
          </pre>
          <p>This starts:</p>
          <ul>
            <li>
              <strong>Frontend</strong> at <code>http://localhost:3000</code>{" "}
              (with hot reload)
            </li>
            <li>
              <strong>Backend</strong> at <code>http://localhost:31415</code>{" "}
              (with nodemon auto-restart)
            </li>
          </ul>
          <p>
            The frontend proxies API requests to the backend via the{" "}
            <code>proxy</code> field in <code>package.json</code>.
          </p>

          <p>You can also run them individually:</p>
          <pre className="docs-code-block">
            <code>{`# Frontend only
npm run start

# Backend only
npm run server

# Backend in dev mode (with nodemon auto-restart)
npm run dev-server`}</code>
          </pre>

          <h3 id="build-windows-auto">
            Build for Windows (Automated — PowerShell Script)
          </h3>
          <p>
            The <code>build-windows.ps1</code> script automates the entire
            Windows build process:
          </p>
          <pre className="docs-code-block">
            <code>{`.\\build-windows.ps1`}</code>
          </pre>

          <p>
            <strong>What the script does:</strong>
          </p>
          <ol>
            <li>
              Builds the React frontend (<code>npm run build</code> →{" "}
              <code>build/</code> folder)
            </li>
            <li>
              Cleans and creates a <code>staging/app/</code> directory
            </li>
            <li>
              Copies the backend into <code>staging/app/</code> (excluding{" "}
              <code>node_modules</code>)
            </li>
            <li>
              Installs production-only backend dependencies inside{" "}
              <code>staging/app/</code>
            </li>
            <li>
              Runs NSIS to compile the installer (<code>VIDYA-x64.exe</code>)
            </li>
          </ol>

          <div className="docs-callout">
            <h4>Script Requirements</h4>
            <ul>
              <li>
                <a
                  href="https://nsis.sourceforge.io/Download"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="docs-link"
                >
                  NSIS
                </a>{" "}
                installed at <code>C:\Program Files (x86)\NSIS\</code> or{" "}
                <code>C:\Program Files\NSIS\</code>
              </li>
              <li>Node.js 20+ and npm on your PATH</li>
              <li>
                The <code>tray/</code> folder must contain pre-built tray app
                binaries (see{" "}
                <a href="#tray-app" className="docs-link">
                  Tray App
                </a>{" "}
                section)
              </li>
              <li>
                The <code>node/</code> folder must contain <code>node.exe</code>{" "}
                (Windows x64 Node.js binary)
              </li>
            </ul>
          </div>

          <h3 id="build-windows-manual">Build for Windows (Manual Steps)</h3>
          <p>
            If you prefer to build manually instead of using the script, follow
            these steps:
          </p>

          <h4>Step 1: Build the Frontend</h4>
          <pre className="docs-code-block">
            <code>{`npm run build`}</code>
          </pre>
          <p>
            This creates a production-optimized React build in the{" "}
            <code>build/</code> directory.
          </p>

          <h4>Step 2: Prepare the Staging Directory</h4>
          <p>
            Create a <code>staging/app/</code> directory and copy the backend
            into it:
          </p>
          <pre className="docs-code-block">
            <code>{`# Remove old staging if exists
Remove-Item -Recurse -Force staging -ErrorAction SilentlyContinue

# Create staging directory
New-Item -ItemType Directory -Path staging\\app

# Copy backend files (exclude node_modules)
robocopy backend staging\\app /E /XD node_modules /XF "*.log"`}</code>
          </pre>

          <h4>Step 3: Install Production Dependencies</h4>
          <pre className="docs-code-block">
            <code>{`cd staging/app
npm install --production
cd ../..`}</code>
          </pre>

          <h4>Step 4: Ensure Tray App Binaries Are Present</h4>
          <p>
            The <code>tray/</code> folder must contain the pre-built .NET tray
            application. The following files are required:
          </p>
          <pre className="docs-code-block">
            <code>{`tray/
├── VIDYA.exe                   # Main tray executable
├── VIDYA.dll                   # Core library
├── VIDYA.deps.json             # Dependency manifest
├── VIDYA.runtimeconfig.json    # Runtime configuration
├── VIDYA.pdb                   # Debug symbols (optional)
├── app.ico                     # Tray icon
├── System.ServiceProcess.ServiceController.dll
└── runtimes/
    └── win/
        └── lib/
            └── net6.0/
                ├── System.Diagnostics.EventLog.Messages.dll
                └── System.ServiceProcess.ServiceController.dll`}</code>
          </pre>
          <p>
            These binaries are pre-built and included in the repository. If you
            want to build the tray app from source, see the{" "}
            <a href="#tray-app" className="docs-link">
              Tray App
            </a>{" "}
            section below.
          </p>

          <h4>Step 5: Ensure Node.js Binary Is Present</h4>
          <p>
            The <code>node/</code> folder must contain a Windows x64 Node.js
            binary:
          </p>
          <pre className="docs-code-block">
            <code>{`node/
└── node.exe    # Node.js v20 Windows x64 binary`}</code>
          </pre>
          <p>
            Download from{" "}
            <a
              href="https://nodejs.org/en/download/"
              target="_blank"
              rel="noopener noreferrer"
              className="docs-link"
            >
              nodejs.org
            </a>{" "}
            — use the Windows Binary (.zip) for x64, extract{" "}
            <code>node.exe</code>, and place it in the <code>node/</code>{" "}
            folder.
          </p>

          <h4>Step 6: Build the Installer (NSIS)</h4>
          <pre className="docs-code-block">
            <code>{`& "C:\\Program Files (x86)\\NSIS\\makensis.exe" installer.nsi`}</code>
          </pre>
          <p>
            This produces <code>VIDYA-x64.exe</code> — a full Windows installer.
          </p>

          <h3 id="build-docker">Build with Docker</h3>
          <pre className="docs-code-block">
            <code>{`docker build -t vidya .`}</code>
          </pre>
          <p>The multi-stage Dockerfile:</p>
          <ol>
            <li>
              <strong>Stage 1</strong> — Builds the React frontend
            </li>
            <li>
              <strong>Stage 2</strong> — Installs backend production
              dependencies
            </li>
            <li>
              <strong>Stage 3</strong> — Assembles the final lightweight runtime
              image
            </li>
          </ol>
          <p>Run the built image:</p>
          <pre className="docs-code-block">
            <code>{`docker run -d \\
  --name vidya \\
  -p 31415:31415 \\
  -v ./vidya-data:/data \\
  -v /path/to/your/media:/media:ro \\
  -e VIDYA_DATA_PATH=/data \\
  vidya`}</code>
          </pre>

          <h3 id="tray-app">Tray App (Windows System Tray)</h3>
          <p>
            The VIDYA tray application is a .NET 6.0 Windows Forms app that sits
            in the system tray and manages the Node.js backend process.
            Pre-built binaries are included in the <code>tray/</code> folder.
          </p>
          <p>If you want to build the tray app from source:</p>
          <ol>
            <li>
              Clone the tray app repository:
              <pre className="docs-code-block">
                <code>{`git clone https://github.com/dextify-org/vidya-tray.git`}</code>
              </pre>
            </li>
            <li>
              Build with .NET SDK 6.0:
              <pre className="docs-code-block">
                <code>{`cd vidya-tray
dotnet build -c Release`}</code>
              </pre>
            </li>
            <li>
              Copy the output files from <code>bin/Release/net6.0/</code> into
              the <code>tray/</code> folder of the main VIDYA repository. Ensure
              all files listed in Step 4 of the manual build are present.
            </li>
          </ol>

          <div className="docs-callout">
            <h4>Note</h4>
            <p>
              The tray app requires .NET 6.0 Desktop Runtime on the target
              machine. The NSIS installer expects the pre-built binaries to be
              present in <code>tray/</code> at build time.
            </p>
          </div>
        </section>

        <hr className="docs-divider" />

        <section id="post-install" className="docs-section">
          <h2>Post-Install Setup</h2>
          <p>
            Once you launch the server for the first time on{" "}
            <code>http://localhost:31415</code>, you will be greeted by the
            initial setup wizard.
          </p>

          <ol>
            <li>
              <strong>Welcome Screen:</strong> You will see the initial welcome
              greeting. Click <strong>Next</strong> to continue.
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
            </li>
            <li>
              <strong>Finish & Scan:</strong> Click <strong>Finish</strong>. The
              server will now perform an initial scan of your folders. Please
              wait a moment for the scan to complete.
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
            <code>{`Video Lectures/ (Root Folder selected during setup)
└── Master Python/ (Course Name)
    ├── 01 Introduction to python/ (Section)
    │   ├── 01 what is python.mp4 (Video Lecture)
    │   ├── 01 lecture files.zip (Supplementary Material)
    │   ├── 01 lecture files.html (Notes)
    │   └── 01 lecture files.pdf (Slides)
    ├── 02 if statement/ (Section)
    │   └── 01 basic if logic.mp4
    └── 03 conditions/ (Section)
        └── 01 nested conditions.mp4`}</code>
          </pre>

          <p>
            As long as you keep the sections and files numbered, your curriculum
            will load in perfect sequential order.
          </p>
        </section>

        <hr className="docs-divider" />

        <section id="configuration" className="docs-section">
          <h2>Configuration</h2>

          <h3>Environment Variables</h3>
          <ul>
            <li>
              <code>VIDYA_DATA_PATH</code> — Path to store database, keys, and
              assets (defaults to repository root)
            </li>
            <li>
              <code>PORT</code> — Server port (defaults to <code>31415</code>)
            </li>
          </ul>

          <h3>Data Storage Locations</h3>
          <ul>
            <li>
              <strong>Windows (Installer):</strong>{" "}
              <code>%LOCALAPPDATA%\VIDYA\</code>
            </li>
            <li>
              <strong>Docker:</strong> Mounted <code>/data</code> volume
            </li>
            <li>
              <strong>Development:</strong> Repository root directory
            </li>
          </ul>

          <h3>Data Files</h3>
          <ul>
            <li>
              <code>database.sqlite</code> — User accounts, courses, progress,
              settings
            </li>
            <li>
              <code>keys.json</code> — Auto-generated session secret key
            </li>
            <li>
              <code>assets/</code> — Thumbnails, cover images, and other media
              assets
            </li>
          </ul>
        </section>

        <hr className="docs-divider" />

        <section id="api-overview" className="docs-section">
          <h2>API Overview</h2>
          <p>
            The backend exposes a REST API at{" "}
            <code>http://localhost:31415/api/</code>:
          </p>
          <ul>
            <li>
              <code>POST /api/auth/login</code> — User authentication
            </li>
            <li>
              <code>POST /api/auth/register</code> — User registration
            </li>
            <li>
              <code>GET /api/home</code> — Home feed data
            </li>
            <li>
              <code>GET /api/course/:id</code> — Course details
            </li>
            <li>
              <code>GET /api/dashboard</code> — Dashboard statistics
            </li>
            <li>
              <code>GET /api/search</code> — Search content
            </li>
            <li>
              <code>POST /api/drive</code> — Scan media folders
            </li>
            <li>
              <code>GET /api/category</code> — List categories
            </li>
            <li>
              <code>GET /api/instructor</code> — List instructors
            </li>
            <li>
              <code>GET /api/admin</code> — Admin operations
            </li>
            <li>
              <code>GET /api/user</code> — User profile
            </li>
          </ul>
        </section>

        <hr className="docs-divider" />

        <section id="project-structure" className="docs-section">
          <h2>Project Structure</h2>
          <pre className="docs-code-block">
            <code>{`vidya/
├── backend/                # Express.js API server
│   ├── config/             # Database and path configuration
│   ├── controllers/        # Route handler logic
│   ├── middleware/          # Auth and user middleware
│   ├── models/             # Sequelize data models
│   ├── routes/             # API route definitions
│   ├── index.js            # Server entry point
│   └── package.json        # Backend dependencies
│
├── src/                    # React frontend source
│   ├── components/         # Reusable UI components
│   ├── pages/              # Page-level components
│   ├── api/                # API client utilities
│   ├── context/            # React context providers
│   ├── assets/             # Static assets (images, icons)
│   ├── App.js              # Root component
│   ├── AnimatedRoutes.js   # Route definitions with animations
│   ├── style.css           # Global stylesheet
│   └── index.js            # React entry point
│
├── public/                 # Static public files
├── assets/                 # Default server assets
├── tray/                   # Pre-built Windows tray app (.NET 6.0)
├── node/                   # Bundled Node.js binary (Windows)
├── resources/              # Installer resources (icons, bitmaps)
│
├── build-windows.ps1       # Automated Windows build script
├── installer.nsi           # NSIS installer script
├── Dockerfile              # Multi-stage Docker build
├── docker-compose.yml      # Docker Compose configuration
├── package.json            # Root package (workspaces)
└── LICENSE.txt             # GNU GPL v3`}</code>
          </pre>
        </section>

        <hr className="docs-divider" />

        <section id="clients" className="docs-section">
          <h2>Clients</h2>
          <p>
            To watch your lectures on other devices, simply download the client
            app for your device from our{" "}
            <Link href="/downloads" className="docs-link">
              Downloads page
            </Link>
            .
          </p>
          <p>
            Upon launching the app, you will be asked to connect to your server.
            Simply enter your server's IP address along with the port (e.g.,{" "}
            <code>http://192.168.1.100:31415</code>) and log in with the
            credentials you created during setup.
          </p>
          <p>Available clients:</p>
          <ul>
            <li>
              <strong>Android</strong> — Available on Google Play Store,
              F-Droid, and GitHub Releases
            </li>
            <li>
              <strong>iOS</strong> — Available on App Store
            </li>
            <li>
              <strong>Web</strong> — Access via any browser at your server's
              address
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
