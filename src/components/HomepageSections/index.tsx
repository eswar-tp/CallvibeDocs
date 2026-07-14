import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

/* ------------------------------------------------------------------ */
/* Get started by role                                                 */
/* ------------------------------------------------------------------ */
type RolePath = {
  role: string;
  blurb: string;
  cta: string;
  to: string;
};

const roles: RolePath[] = [
  {
    role: 'Administrators',
    blurb:
      'Set up your workspace: connect integrations, invite your team, and configure lead pipelines and notifications.',
    cta: 'Open the Admin Guide',
    to: '/docs/admin/settings-overview',
  },
  {
    role: 'Sales & Ops teams',
    blurb:
      'Learn the daily workflows — review calls, act on AI insights, and keep your pipeline moving.',
    cta: 'See daily workflows',
    to: '/docs/user-guide/daily-workflows',
  },
  {
    role: 'Developers',
    blurb:
      'Explore the API, authentication model, and webhooks to build on top of CallVibe.',
    cta: 'Read the API reference',
    to: '/docs/api/overview',
  },
];

function RolePaths(): ReactNode {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.head}>
          <Heading as="h2">Get started by role</Heading>
          <p>Pick the path that matches how you use CallVibe.</p>
        </div>
        <div className={styles.roleGrid}>
          {roles.map((r) => (
            <div key={r.role} className={styles.roleCard}>
              <Heading as="h3" className={styles.roleTitle}>
                {r.role}
              </Heading>
              <p className={styles.roleBlurb}>{r.blurb}</p>
              <Link to={r.to} className={styles.roleLink}>
                {r.cta} →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Integrations grid                                                   */
/* ------------------------------------------------------------------ */
type Integration = { name: string; to: string };
type IntegrationGroup = { label: string; to: string; items: Integration[] };

const integrationGroups: IntegrationGroup[] = [
  {
    label: 'Telephony',
    to: '/docs/category/telephony',
    items: [
      { name: 'SalesTrail', to: '/docs/integrations/providers/salestrail' },
      { name: 'MobileCRM', to: '/docs/integrations/providers/mobilecrm' },
      { name: 'Smartflo', to: '/docs/integrations/providers/smartflo' },
      { name: 'Exotel', to: '/docs/integrations/providers/exotel' },
      { name: 'Kaleyra', to: '/docs/integrations/providers/kaleyra' },
      { name: '8x8', to: '/docs/integrations/providers/8x8' },
      { name: 'Zadarma', to: '/docs/integrations/providers/zadarma' },
      { name: 'RingCentral', to: '/docs/integrations/providers/ringcentral' },
      { name: 'Callyzer', to: '/docs/integrations/providers/callyzer' },
      { name: 'Bonvoice', to: '/docs/integrations/providers/bonvoice' },
      { name: 'Zoom Phone', to: '/docs/integrations/providers/zoom-phone' },
    ],
  },
  {
    label: 'CRM',
    to: '/docs/category/crm',
    items: [
      { name: 'GoHighLevel', to: '/docs/integrations/crm/ghl' },
      { name: 'LeadSquared', to: '/docs/integrations/crm/leadsquared' },
    ],
  },
  {
    label: 'Messaging & Upload',
    to: '/docs/integrations/overview',
    items: [
      { name: 'WhatsApp', to: '/docs/integrations/whatsapp' },
      { name: 'Upload Center', to: '/docs/integrations/providers/manual-upload' },
    ],
  },
];

function IntegrationsGrid(): ReactNode {
  return (
    <section className={styles.sectionAlt}>
      <div className="container">
        <div className={styles.head}>
          <Heading as="h2">Connect your stack</Heading>
          <p>
            CallVibe captures calls and messages from the tools you already use.
          </p>
        </div>
        <div className={styles.integrationGroups}>
          {integrationGroups.map((group) => (
            <div key={group.label} className={styles.integrationGroup}>
              <Link to={group.to} className={styles.groupLabel}>
                {group.label}
              </Link>
              <div className={styles.pillGrid}>
                {group.items.map((i) => (
                  <Link key={i.name} to={i.to} className={styles.pill}>
                    {i.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className={styles.centerLink}>
          <Link to="/docs/integrations/overview">
            View all integrations →
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Popular docs / final CTA                                            */
/* ------------------------------------------------------------------ */
const popular = [
  { label: 'Quickstart', to: '/docs/quickstart' },
  { label: 'Team management', to: '/docs/admin/team-management' },
  { label: 'Lead statuses', to: '/docs/admin/lead-statuses' },
  { label: 'Usage & limits', to: '/docs/admin/usage' },
  { label: 'Common issues', to: '/docs/troubleshooting/common-issues' },
];

function PopularDocs(): ReactNode {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.ctaCard}>
          <div>
            <Heading as="h2" className={styles.ctaTitle}>
              Ready to dive in?
            </Heading>
            <p className={styles.ctaText}>
              Start with the quickstart, or jump to a popular topic.
            </p>
            <div className={styles.popularLinks}>
              {popular.map((p) => (
                <Link key={p.to} to={p.to} className={styles.popularLink}>
                  {p.label}
                </Link>
              ))}
            </div>
          </div>
          <Link className="button button--primary button--lg" to="/docs/quickstart">
            Get started
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function HomepageSections(): ReactNode {
  return (
    <>
      <RolePaths />
      <IntegrationsGrid />
      <PopularDocs />
    </>
  );
}
