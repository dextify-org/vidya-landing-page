# VIDYA Landing Page

The official marketing and documentation website for the [VIDYA Media Server](https://github.com/dextify-org/vidya) project. Built with Next.js and hosted at [vidya.media](https://vidya.media).

## About

This repository contains the source code for the VIDYA landing page, including:

- **Home** — Hero section, platform availability, screenshot carousel
- **Docs** — Full installation and build documentation
- **Downloads** — Platform-specific download links (Windows, macOS, Linux, Android, iOS)
- **About** — Privacy policy, terms of service, and server policy
- **Contact** — Community links, support workflow, and contribution guide

## Tech Stack

- [Next.js](https://nextjs.org/) — React framework (App Router)
- CSS — Custom styling with CSS variables and responsive design

## Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Build for production:

```bash
npm run build
npm start
```

## Project Structure

```
landing-page/
├── app/
│   ├── page.js            # Home page
│   ├── docs/page.js       # Documentation
│   ├── downloads/page.js  # Downloads
│   ├── about/page.js      # About / Legal
│   ├── contact/page.js    # Contact / Community
│   ├── components/
│   │   ├── Navbar.js
│   │   └── ScreenshotCarousel.js
│   └── globals.css
└── public/                # Static assets and screenshots
```

## Community

- **GitHub** — [github.com/dextify-org/vidya](https://github.com/dextify-org/vidya)
- **Discord** — [discord.gg/uavHJumK5v](https://discord.gg/uavHJumK5v)
- **Reddit** — [r/VidyaMedia](https://reddit.com/r/VidyaMedia)
- **X / Twitter** — [@vidya_server](https://x.com/vidya_server)

## License

This source code is made publicly available for transparency. You may **not** copy, redistribute, or deploy this website as your own product or service. See [LICENSE.txt](LICENSE.txt) for full terms.

© 2026 [DEXTIFY](https://dextify.org)
