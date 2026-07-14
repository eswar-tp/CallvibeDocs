import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './404.module.css';

const suggestions = [
  { label: 'Quickstart', to: '/docs/quickstart' },
  { label: 'Integrations', to: '/docs/integrations/overview' },
  { label: 'Admin Guide', to: '/docs/admin/settings-overview' },
  { label: 'Troubleshooting', to: '/docs/troubleshooting/common-issues' },
];

export default function NotFound(): ReactNode {
  return (
    <Layout title="Page not found">
      <main className={styles.wrap}>
        <div className={styles.glow} aria-hidden="true" />
        <div className={styles.content}>
          <span className={styles.code}>404</span>
          <Heading as="h1" className={styles.title}>
            This page took an <span className="cv-gradient-text">unplanned call</span>
          </Heading>
          <p className={styles.text}>
            We couldn&apos;t find the page you were looking for. It may have moved,
            or the link might be out of date.
          </p>
          <div className={styles.buttons}>
            <Link className="button button--primary button--lg" to="/">
              Back to home
            </Link>
            <Link className="button button--secondary button--lg" to="/docs/intro">
              Browse the docs
            </Link>
          </div>
          <div className={styles.suggestions}>
            <span className={styles.suggestLabel}>Popular pages</span>
            <div className={styles.pills}>
              {suggestions.map((s) => (
                <Link key={s.to} to={s.to} className={styles.pill}>
                  {s.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
