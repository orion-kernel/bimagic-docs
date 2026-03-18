import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx(styles.heroBanner, 'slanted-bg')}>
      <div className={clsx('container', styles.heroContent)}>
        <div className={styles.heroText}>
          <Heading as="h1" className={clsx(styles.heroTitle, 'glossy-text')}>
            {siteConfig.title}
          </Heading>
          <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={styles.getStartedButton}
              to="/docs/intro">
              Get Started 🚀
            </Link>
            <Link
              className={styles.learnMoreButton}
              to="/docs/intro">
              Learn More
            </Link>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <div className="hero__visual">
            <div className="cube-container">
              <div className="cube-face cube-front">🪄</div>
              <div className="cube-face cube-back">🔮</div>
              <div className="cube-face cube-right">🧙</div>
              <div className="cube-face cube-left">✨</div>
              <div className="cube-face cube-top">🌟</div>
              <div className="cube-face cube-bottom">💎</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
