const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Lab Book',
  tagline: 'Hier ist nix. andunix.',
  url: 'https://lab.andunix.net',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'andunix',
  projectName: 'lab-book',
  themeConfig: {
    navbar: {
      title: 'andunix.net',
      logo: {
        alt: 'andunix Logo',
        src: 'img/andunix_192.png',
      },
      items: [
        {to: '/', label: 'Lab Book', position: 'left'},
        {to: 'https://andunix.net/info/', label: 'Infos', position: 'right'},
        {to: 'https://shaarli.andunix.net/', label: 'Links', position: 'right'},
     ],
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic', {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
