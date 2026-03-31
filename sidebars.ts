import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    'quickstart',
    {
      type: 'category',
      label: 'User Guide',
      items: [
        'user-guide/account-and-access',
        'user-guide/platform-navigation',
        'user-guide/daily-workflows',
      ],
    },
    {
      type: 'category',
      label: 'Integrations',
      items: [
        'integrations/overview',
        'integrations/providers/salestrail',
        'integrations/providers/smartflo',
        'integrations/providers/exotel',
        'integrations/providers/kaleyra',
        'integrations/providers/8x8',
        'integrations/whatsapp',
      ],
    },
    {
      type: 'category',
      label: 'Admin Guide',
      items: [
        'admin/team-management',
        'admin/notifications',
        'admin/customer-management',
      ],
    },
    {
      type: 'category',
      label: 'API Reference',
      items: ['api/overview'],
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      items: ['troubleshooting/common-issues'],
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
