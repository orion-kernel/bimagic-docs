# GEMINI.md

## Project Overview
**Bimagic** is a documentation website for the "Bimagic" tool, described as a "Git Wizard". The site is built using **Docusaurus 3** and **React 19**, providing a modern, static documentation and blog platform.

- **URL:** [https://bimagic.vercel.app](https://bimagic.vercel.app)
- **GitHub:** [https://github.com/Bimbok/bimagic](https://github.com/Bimbok/bimagic)
- **Tech Stack:** Docusaurus 3, React 19, MDX, Prism (syntax highlighting), Vanilla CSS.

## Architecture
- **Content:** Located in `docs/` (documentation) and `blog/` (blog posts). Content is written in MDX (Markdown with JSX support).
- **Configuration:** Managed via `docusaurus.config.js` for site metadata, navigation, and theme settings.
- **Sidebar:** Configured in `sidebars.js`, currently set to autogenerate based on the filesystem structure of the `docs/` directory.
- **Customization:** Custom React pages and components are in `src/pages/` and `src/components/`. Global styles are in `src/css/custom.css`.
- **Assets:** Static assets like images and favicons are stored in `static/`.

## Building and Running
The project uses `npm` (or `yarn`) for package management.

### Development
Start the local development server with hot-reloading:
```bash
npm run start
```

### Production
Build the static site for production:
```bash
npm run build
```
The output will be in the `build/` directory.

### Testing/Serving
Serve the production build locally:
```bash
npm run serve
```

### Deployment
Deploy to GitHub Pages (configured in `docusaurus.config.js`):
```bash
# Using SSH
USE_SSH=true npm run deploy

# Not using SSH
GIT_USER=<Your GitHub username> npm run deploy
```

### Utility
Clear the Docusaurus cache:
```bash
npm run clear
```

## Development Conventions
- **Documentation Structure:** Follow the hierarchy in `docs/`. Use subdirectories and `_category_.json` files to organize navigation groups.
- **MDX Usage:** Leverage MDX to include React components within documentation when interactive elements are needed.
- **Styling:** Use `src/css/custom.css` for global styles and CSS Modules (e.g., `*.module.css`) for component-specific styles.
- **Type Safety:** The configuration files (`docusaurus.config.js`, `sidebars.js`) use JSDoc for type checking and autocompletion.
- **Links:** Always check for broken links before committing, as `onBrokenLinks` is set to `throw` in the configuration.
