// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Wire Integrations',
  tagline: 'Customizable Secure Messaging for Your Unique Needs',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://dev.wire.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  onBrokenLinks: 'warn', // TODO: switch to 'throw' once docs are publicly accessible

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Wire Integrations',
        logo: {
          alt: 'Wire Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            href: 'https://github.com/wireapp/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Wire',
                href: 'https://wire.com/',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/wire-secure-communication',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/wireapp/',
              },
              {
                label: '✏️ Contribute',
                href: 'https://github.com/wireapp/integration-docs/tree/main/docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Wire Swiss GmbH`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['java'],
      },
      mermaid: {
        theme: { light: 'neutral' },
        options: {
          themeVariables: {
            fontFamily: '@site/static/fonts',
          },
        },
      },
    }),
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  headTags: [
    {
      tagName: "link",
      attributes: {
        rel: "preconnect",
        href: "https://dev.wire.com/",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "stylesheet",
        href: "fonts/inter.css",
      },
    },
  ],
};

export default config;
