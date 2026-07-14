import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * The sidebar is defined explicitly (not generated from the filesystem) so we
 * control ordering. Each category has a `generated-index` link, which gives it
 * a polished auto-generated landing page with card links to its docs.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    'quickstart',
    {
      type: 'category',
      label: 'User Guide',
      link: {
        type: 'generated-index',
        title: 'User Guide',
        description:
          'Everything you need to sign in, navigate the platform, and run your day-to-day workflows in CallVibe.',
        slug: '/category/user-guide',
      },
      items: [
        'user-guide/account-and-access',
        'user-guide/platform-navigation',
        'user-guide/daily-workflows',
      ],
    },
    {
      type: 'category',
      label: 'Integrations',
      link: {
        type: 'generated-index',
        title: 'Integrations',
        description:
          'Connect CallVibe to your telephony, call-tracking, messaging, and CRM tools. Follow the provider guide that matches your stack.',
        slug: '/category/integrations',
      },
      items: [
        'integrations/overview',
        {
          type: 'category',
          label: 'Telephony',
          link: {
            type: 'generated-index',
            title: 'Telephony & Call Providers',
            description:
              'Connect a telephony or call-recording provider so CallVibe can ingest your calls automatically.',
            slug: '/category/telephony',
          },
          items: [
            'integrations/providers/salestrail',
            'integrations/providers/mobilecrm',
            'integrations/providers/smartflo',
            'integrations/providers/exotel',
            'integrations/providers/kaleyra',
            'integrations/providers/8x8',
            'integrations/providers/zadarma',
            'integrations/providers/ringcentral',
            'integrations/providers/callyzer',
            'integrations/providers/bonvoice',
            'integrations/providers/zoom-phone',
          ],
        },
        {
          type: 'category',
          label: 'CRM',
          link: {
            type: 'generated-index',
            title: 'CRM Integrations',
            description:
              'Sync leads, notes, and tasks between CallVibe and your CRM.',
            slug: '/category/crm',
          },
          items: [
            'integrations/crm/ghl',
            'integrations/crm/leadsquared',
          ],
        },
        'integrations/whatsapp',
        'integrations/providers/manual-upload',
      ],
    },
    {
      type: 'category',
      label: 'Admin Guide',
      link: {
        type: 'generated-index',
        title: 'Admin Guide',
        description:
          'Configure your workspace: team and roles, notifications, customer management, lead pipeline, AI insights, and usage limits.',
        slug: '/category/admin',
      },
      items: [
        'admin/settings-overview',
        'admin/team-management',
        'admin/notifications',
        'admin/customer-management',
        'admin/lead-statuses',
        'admin/lead-custom-fields',
        'admin/usage',
        'admin/marketing-sources',
        'admin/ai-insights',
      ],
    },
    {
      type: 'category',
      label: 'API Reference',
      link: {
        type: 'generated-index',
        title: 'API Reference',
        description:
          'Build on top of CallVibe: endpoint groups, authentication, and webhook patterns.',
        slug: '/category/api',
      },
      items: ['api/overview'],
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      link: {
        type: 'generated-index',
        title: 'Troubleshooting',
        description:
          'Fix common issues with workers, data flow, access, WhatsApp, and account recovery.',
        slug: '/category/troubleshooting',
      },
      items: ['troubleshooting/common-issues'],
    },
  ],
};

export default sidebars;
