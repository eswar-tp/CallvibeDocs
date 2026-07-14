import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  to: string;
  icon: ReactNode;
  description: ReactNode;
};

/* Inline, dependency-free icons (stroke inherits the brand color). */
const iconProps = {
  width: 28,
  height: 28,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Quickstart',
    to: '/docs/quickstart',
    description:
      'Go from sign-up to your first analyzed call in five steps — connect a source, start the worker, and validate data flow.',
    icon: (
      <svg {...iconProps}>
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" />
      </svg>
    ),
  },
  {
    title: 'Integrations',
    to: '/docs/integrations/overview',
    description:
      'Step-by-step setup for 12+ telephony and call-tracking providers, plus manual audio upload.',
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
        <path d="M14 6.5h3a2 2 0 0 1 2 2V11M10 17.5H7a2 2 0 0 1-2-2V13" />
      </svg>
    ),
  },
  {
    title: 'WhatsApp',
    to: '/docs/integrations/whatsapp',
    description:
      'Bring WhatsApp conversations into CallVibe with a simple webhook and message events.',
    icon: (
      <svg {...iconProps}>
        <path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 21l2.1-5.4A8.5 8.5 0 1 1 21 11.5Z" />
        <path d="M8.5 9.5c0 3 2 5 5 5" />
      </svg>
    ),
  },
  {
    title: 'Admin & Settings',
    to: '/docs/admin/settings-overview',
    description:
      'Manage your team, roles, notifications, customer tagging, lead pipeline, and usage limits.',
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-2.9 1.2V21a2 2 0 1 1-4 0v-.1A1.7 1.7 0 0 0 7 19.4a1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0-1.2-2.9H1a2 2 0 1 1 0-4h.1A1.7 1.7 0 0 0 2.3 7l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 2.9-1.2V3a2 2 0 1 1 4 0v.1A1.7 1.7 0 0 0 17 4.6a1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0 1.2 2.9h.1a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.6 1Z" />
      </svg>
    ),
  },
  {
    title: 'AI Insights',
    to: '/docs/admin/ai-insights',
    description:
      'Turn calls into transcripts, summaries, buying signals, and configurable custom insights with scoring.',
    icon: (
      <svg {...iconProps}>
        <path d="M12 3a6 6 0 0 0-3.6 10.8c.5.4.8 1 .8 1.6v.6h5.6v-.6c0-.6.3-1.2.8-1.6A6 6 0 0 0 12 3Z" />
        <path d="M9 20h6M10 22h4" />
      </svg>
    ),
  },
  {
    title: 'API Reference',
    to: '/docs/api/overview',
    description:
      'Endpoint groups, authentication model, and webhook patterns for building on top of CallVibe.',
    icon: (
      <svg {...iconProps}>
        <path d="m8 6-6 6 6 6M16 6l6 6-6 6M14 4l-4 16" />
      </svg>
    ),
  },
];

function Feature({ title, to, icon, description }: FeatureItem) {
  return (
    <Link to={to} className={styles.featureCard}>
      <span className={styles.featureIcon} aria-hidden="true">
        {icon}
      </span>
      <Heading as="h3" className={styles.featureTitle}>
        {title}
      </Heading>
      <p className={styles.featureDesc}>{description}</p>
      <span className={styles.featureArrow} aria-hidden="true">
        Learn more →
      </span>
    </Link>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHead}>
          <Heading as="h2">Everything you need to get value from CallVibe</Heading>
          <p>Jump straight to the guide you need.</p>
        </div>
        <div className={styles.featureGrid}>
          {FeatureList.map((props) => (
            <Feature key={props.title} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
