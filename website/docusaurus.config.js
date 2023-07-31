// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Onion',
  tagline: 'OS overhaul for Miyoo Mini',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'OnionUI', // Usually your GitHub org/user name.
  projectName: 'Onion', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve('./sidebars.js')
        },
        blog: {
          showReadingTime: true
        },
        theme: {
          customCss: require.resolve('./src/style/custom.scss'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/onion_banner.png',
      navbar: {
        logo: {
          alt: 'Onion Logo',
          src: 'img/onion_logo_purple.svg',
          // srcDark: 'img/onion_logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/OnionUI/Onion',
            label: 'GitHub',
            position: 'left',
          },
          {
            href: 'https://www.youtube.com/@OnionUIOfficial',
            label: 'YouTube',
            position: 'left',
          },
          {
            href: 'https://github.com/OnionUI/Ports-Collection/blob/main/README.md',
            label: 'Ports',
            position: 'left',
          },
          {
            href: 'https://github.com/OnionUI/Themes/blob/main/README.md',
            label: 'Themes',
            position: 'left',
          },
          {
            type: 'search',
            position: 'right',
          },
          // {
          //   type: 'docsVersionDropdown',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub Discussions',
                href: 'https://github.com/OnionUI/Onion/discussions',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/Jd2azKX',
              },
              {
                label: 'Reddit',
                href: 'https://reddit.com/r/miyoomini',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/groups/1090249395102552',
              },
            ],
          },
          {
            title: 'Donate ❤️',
            items: [
              {
                label: 'Ko-fi',
                href: 'https://ko-fi.com/Aemiii91',
              },
              {
                label: 'GitHub Sponsors',
                href: 'https://github.com/sponsors/Aemiii91',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/OnionUI/Onion',
              },
              {
                href: 'https://www.youtube.com/@OnionUIOfficial',
                label: 'YouTube',
              },
              {
                href: 'https://github.com/OnionUI/Ports-Collection/blob/main/README.md',
                label: 'Ports',
              },
              {
                href: 'https://github.com/OnionUI/Themes/blob/main/README.md',
                label: 'Themes',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} The Onion UI Development Team. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true,
      },
    }),

  plugins: [
    require.resolve('docusaurus-plugin-sass')
  ],
};

module.exports = config;