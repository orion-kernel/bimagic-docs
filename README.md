# Bimagic - Summon the Git Wizard! 🪄✨

Welcome to the official documentation repository for **Bimagic**, the ultimate Git companion. This website provides comprehensive guides, tutorials, and reference material to help you master Git with ease.

Built with [Docusaurus 3](https://docusaurus.io/), this site is designed for performance, accessibility, and a great developer experience.

## 🌐 Live Site
Check out the live documentation at: **[https://bimagic.vercel.app](https://bimagic.vercel.app)**

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (version 20 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation
Clone the repository and install the dependencies:

```bash
git clone https://github.com/orion-kernel/bimagic-docs.git
cd bimagic-docs
npm install
```

### Local Development
Start the development server:

```bash
npm run start
```
This command starts a local development server and opens up a browser window at `http://localhost:3000`. Most changes are reflected live without having to restart the server.

---

## 🛠️ Build & Deployment

### Production Build
To generate a static production build:

```bash
npm run build
```
The static files will be generated in the `build` directory.

### Testing the Build
Preview your production build locally:

```bash
npm run serve
```

### Deployment
This site is configured for deployment via GitHub Pages or Vercel.

**For GitHub Pages:**
```bash
# Using SSH
USE_SSH=true npm run deploy

# Not using SSH
GIT_USER=<Your GitHub username> npm run deploy
```

---

## 📂 Project Structure

```text
.
├── blog/             # Blog posts and announcements
├── docs/             # Documentation MDX files
│   ├── menu-options/ # Detailed guides for specific features
│   └── ...           # Installation, Usage, Configuration, etc.
├── src/
│   ├── components/   # Custom React components
│   ├── css/          # Global CSS and styling
│   └── pages/        # Custom standalone pages (e.g., Homepage)
├── static/           # Static assets (images, logos, favicons)
├── docusaurus.config.js # Main site configuration
└── sidebars.js       # Documentation sidebar layout
```

---

## 🤝 Contributing

We welcome contributions! Whether it's fixing a typo, improving a guide, or adding new documentation:

1.  **Fork** the repository.
2.  **Create** a new branch for your feature or bugfix.
3.  **Commit** your changes with clear messages.
4.  **Push** to your branch and open a **Pull Request**.

---

## 💬 Community

- **Discord:** [Join our Discord server](https://discord.gg/uDp2zAuUyQ)
- **GitHub Issues:** [Report bugs or suggest features](https://github.com/orion-kernel/bimagic/issues)

---

## 📄 License

This project is licensed under the terms specified in the repository. Built with ❤️ by [orion-kernel](https://github.com/orion-kernel).
