// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "North of Zero",
  tagline: "Scale Your Tech Startup",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.northofzero.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "northofzero", // Usually your GitHub org/user name.
  projectName: "noz-docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [require.resolve("docusaurus-lunr-search")],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.js",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          // sitemap: {
          //   changefreq: "weekly",
          //   priority: 0.5,
          // },
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
      // Replace with your project's social card
      image: "img/social-card.jpg",
      navbar: {
        // title: "North of Zero",
        logo: {
          src: "img/logo.svg",
          alt: "North of Zero",
        },
        items: [
          // Position the search bar here
          {
            type: "search",
            position: "left",
          },
          // {
          //   type: "html",
          //   value:
          //     '<img src="/img/logo.svg" width="100%" alt="North of Zero" />',
          //   position: "left",
          // },
          {
            type: "docSidebar",
            sidebarId: "sidebar",
            position: "right",
            label: "Tutorial",
          },
          {
            href: "https://github.com/northofzero",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Build a SaaS",
                to: "/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/company/north-of-zero/",
              },
              {
                label: "Perks",
                href: "https://perks.northofzero.dev/",
              },
            ],
          },
          {
            title: "Our Work",
            items: [
              {
                label: "Never FT",
                href: "https://neverft.com",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} All rights reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
