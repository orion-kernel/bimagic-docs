// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Bimagic",
  tagline: "Summon the Git Wizard!",
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://bimagic.vercel.app",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "orion-kernel", // Usually your GitHub org/user name.
  projectName: "bimagic-docs", // Usually your repo name.

  onBrokenLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/orion-kernel/bimagic-docs/tree/main/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/orion-kernel/bimagic-docs/tree/main/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          name: "google-site-verification",
          content: "gFurputTJW0d-GTnJHv-VcLR0X_g7NSB-N2VV71rMno",
        },
      ],
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: "Bimagic",
        logo: {
          alt: "Bimagic Logo",
          src: "img/logo.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Docs",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/orion-kernel/bimagic",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
          {
            href: "https://discord.gg/uDp2zAuUyQ",
            position: "right",
            className: "header-discord-link",
            "aria-label": "Discord server",
          },
        ],
      },
      footer: {
        style: "dark",
        logo: {
          alt: "Bimagic Logo",
          src: "img/logo.png",
          href: "https://github.com/Bimbok/bimagic",
          width: 200,
        },
        links: [
          {
            title: "Wizardry",
            items: [
              {
                label: "Introduction",
                to: "/docs/intro",
              },
              {
                label: "Installation",
                to: "/docs/installation",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/uDp2zAuUyQ",
              },
              {
                label: "X (Twitter)",
                href: "https://x.com/docusaurus",
              },
            ],
          },
          {
            title: "Connect",
            items: [
              {
                html: `
                                    <div class="footer__socials">
                                        <a href="https://github.com/Bimbok/bimagic" target="_blank" rel="noopener noreferrer" class="footer__social-link" aria-label="GitHub">
                                            <img src="/img/github.svg" alt="GitHub" />
                                        </a>
                                        <a href="https://discord.gg/uDp2zAuUyQ" target="_blank" rel="noopener noreferrer" class="footer__social-link" aria-label="Discord">
                                            <img src="/img/discord.svg" alt="Discord" />
                                        </a>
                                        <a href="https://x.com/docusaurus" target="_blank" rel="noopener noreferrer" class="footer__social-link" aria-label="X">
                                            <img src="/img/x.svg" alt="X" />
                                        </a>
                                    </div>
                                `,
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Bimagic. Crafted with ❤️ and orion-kernel.`,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ["bash", "lua"],
      },
    }),
};

export default config;
