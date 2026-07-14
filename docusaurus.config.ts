import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'CallVibe Docs',
  tagline: 'Integration, onboarding, and AI conversation intelligence documentation',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.callvibe.ai',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'callvibe',
  projectName: 'callvibe-docs',

  onBrokenLinks: 'throw',

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
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/eswar-tp/callvibedocs/tree/main/',
        },
        // No blog for the docs site.
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  // Offline local search — no account or external crawler needed.
  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        indexBlog: false,
        docsRouteBasePath: '/docs',
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    announcementBar: {
      id: 'whatsapp_intelligence',
      content:
        'New: bring WhatsApp conversations into CallVibe — <a href="/docs/integrations/whatsapp">see the guide</a>.',
      isCloseable: true,
    },
    navbar: {
      logo: {
        alt: 'CallVibe Logo',
        src: 'img/logo.webp',
        srcDark: 'img/logo.webp',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          to: '/docs/quickstart',
          label: 'Quickstart',
          position: 'left',
        },
        {
          type: 'dropdown',
          label: 'Integrations',
          position: 'left',
          items: [
            { to: '/docs/integrations/overview', label: 'Overview' },
            { to: '/docs/integrations/whatsapp', label: 'WhatsApp' },
            { to: '/docs/integrations/crm/ghl', label: 'GoHighLevel' },
            { to: '/docs/integrations/crm/leadsquared', label: 'LeadSquared' },
          ],
        },
        {
          type: 'dropdown',
          label: 'Admin',
          position: 'left',
          items: [
            { to: '/docs/admin/settings-overview', label: 'Settings' },
            { to: '/docs/admin/team-management', label: 'Team management' },
            { to: '/docs/admin/ai-insights', label: 'AI Insights' },
            { to: '/docs/admin/usage', label: 'Usage & limits' },
          ],
        },
        {
          to: '/docs/api/overview',
          label: 'API',
          position: 'left',
        },
        {
          href: 'https://callvibe.ai',
          label: 'Website',
          position: 'right',
        },
        {
          href: 'https://www.callvibe.ai/features/',
          label: 'Product',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'Introduction', to: '/docs/intro' },
            { label: 'Quickstart', to: '/docs/quickstart' },
            { label: 'User Guide', to: '/docs/user-guide/account-and-access' },
            {
              label: 'Troubleshooting',
              to: '/docs/troubleshooting/common-issues',
            },
          ],
        },
        {
          title: 'Integrations',
          items: [
            { label: 'Overview', to: '/docs/integrations/overview' },
            { label: 'WhatsApp', to: '/docs/integrations/whatsapp' },
            { label: 'GoHighLevel', to: '/docs/integrations/crm/ghl' },
            { label: 'LeadSquared', to: '/docs/integrations/crm/leadsquared' },
          ],
        },
        {
          title: 'Admin',
          items: [
            { label: 'Settings', to: '/docs/admin/settings-overview' },
            { label: 'Team management', to: '/docs/admin/team-management' },
            { label: 'AI Insights', to: '/docs/admin/ai-insights' },
            { label: 'Usage & limits', to: '/docs/admin/usage' },
          ],
        },
        {
          title: 'Company',
          items: [
            { label: 'Website', href: 'https://callvibe.ai' },
            { label: 'Product', href: 'https://www.callvibe.ai/features/' },
            { label: 'API Reference', to: '/docs/api/overview' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} CallVibe. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
