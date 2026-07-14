import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageSections from '@site/src/components/HomepageSections';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={styles.hero}>
      <div className={clsx('container', styles.heroInner)}>
        <span className={styles.eyebrow}>AI conversation intelligence</span>
        <Heading as="h1" className={styles.heroTitle}>
          Turn every call into{' '}
          <span className="cv-gradient-text">actionable insight</span>
        </Heading>
        <p className={styles.heroSubtitle}>
          Integration guides, onboarding playbooks, and platform documentation
          for CallVibe — capture calls and WhatsApp conversations, analyze them
          with AI, and drive smarter follow-ups.
        </p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/docs/quickstart">
            Get started
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Browse the docs
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} | AI Sales Conversation Intelligence`}
      description="Official CallVibe documentation for integration, onboarding, administration, and API usage.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomepageSections />
      </main>
    </Layout>
  );
}
