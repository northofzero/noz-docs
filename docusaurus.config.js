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

  // Add scripts here
  scripts: [
    {
      src: "https://elevenlabs.io/convai-widget/index.js",
      async: true,
    },
  ],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  // plugins: [require.resolve("docusaurus-lunr-search")],

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
      // Set default theme to dark and disable switching
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
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
            type: "html",
            value:
              '<a href="https://calendly.com/northofzero/noz-startup-session?month=2025-04" style="color: gray; font-weight: 200;">Book a Call</a>',
            position: "right",
          },
          {
            type: "html",
            value:
              '<a href="https://www.northofzero.dev/work" target="_blank" style="color: gray; font-weight: 200;">Work</a>',
            position: "right",
          },
          {
            type: "html",
            value:
              '<a href="https://www.northofzero.dev/offer" target="_blank" style="color: gray; font-weight: 200;">Offers</a>',
            position: "right",
          },
          {
            type: "html",
            value:
              '<a href="https://northofzero.dev#contact" target="_blank" style="color: gray; font-weight: 200;">Enquire</a>',
            position: "right",
          },
          {
            type: "html",
            value:
              '<a href="https://northofzero.dev" target="_blank" style="padding-left: 26px; padding-top: 10px; color: gray; font-weight: 200;"><img src="/img/globe.svg" style="padding-top:5px;" width="20px" alt="North of Zero" /></a>',
            position: "right",
          },
          {
            type: "html",
            value:
              '<a href="https://www.linkedin.com/company/north-of-zero/" target="_blank" style="padding-top: 10px; color: gray; font-weight: 200;"><img src="/img/linkedin.svg" style="padding-top:5px;" width="20px" alt="North of Zero" /></a>',
            position: "right",
          },

          // {
          //   href: "https://northofzero.com#contact",
          //   label: "Enquire",
          //   position: "right",
          // },
        ],
      },
      // footer: {
      //   style: "light",
      //   hideOnScreen: true,
      //   links: [
      //     {
      //       title: "Docs",
      //       items: [
      //         {
      //           label: "Build a SaaS",
      //           to: "/index",
      //         },
      //       ],
      //     },
      //     {
      //       title: "Community",
      //       items: [
      //         {
      //           label: "LinkedIn",
      //           href: "https://www.linkedin.com/company/north-of-zero/",
      //         },
      //         {
      //           label: "Perks",
      //           href: "https://perks.northofzero.dev/",
      //         },
      //       ],
      //     },
      //     {
      //       title: "Our Work",
      //       items: [
      //         {
      //           label: "Never FT",
      //           href: "https://neverft.com",
      //         },
      //       ],
      //     },
      //   ],
      //   copyright: `Copyright © ${new Date().getFullYear()} All rights reserved.`,
      // },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
