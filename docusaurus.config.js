const lightCodeTheme = require('prism-react-renderer/themes/duotoneLight');
const darkCodeTheme = require('prism-react-renderer/themes/duotoneDark');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Truss Engineering Playbook',
  tagline: 'Repository of documentation on how we do Software Engineering at TrussWorks.',
  url: 'https://playbook.truss.dev',
  baseUrl: '/',
  organizationName: 'trussworks',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',
  projectName: 'Engineering-Playbook',
  themeConfig: {
    navbar: {
      title: 'Engineering Playbook',
      logo: {
        alt: 'Truss Logo',
        src: 'img/truss-icon-light.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'README',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/trussworks/Engineering-Playbook',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Resources',
          items: [
            {
              label: 'Docusaurus Official Docs',
              href: 'https://6130eb5cde15830007fdf57b--docusaurus-2.netlify.app/docs',
            },
          ],
        },
      ],
      copyright: `Copyright ${new Date().getFullYear()} TrussWorks, Inc. Built with Docusaurus.`
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/trussworks/Engineering-Playbook/edit/main/',
          remarkPlugins: [require('mdx-mermaid')],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    require.resolve('@cmfcmf/docusaurus-search-local'),
  ],
};
