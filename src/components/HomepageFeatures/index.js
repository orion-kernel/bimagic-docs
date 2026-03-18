import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Interactive UI',
    icon: '🖥️',
    visual: '🪄',
    description: (
      <>
        Bimagic provides a user-friendly, interactive menu-driven interface for
        all your Git operations, powered by <code>gum</code>. Experience git command-line
        wizardry like never before with smooth terminal transitions.
      </>
    ),
  },
  {
    title: 'Effortless Workflow',
    icon: '⚡',
    visual: '🔮',
    description: (
      <>
        Streamline your GitHub workflow with simplified push/pull, branch management,
        and automated master-to-main renaming. Focus on code while the wizard 
        handles the plumbing.
      </>
    ),
  },
  {
    title: 'Powerful Tools',
    icon: '🪄',
    visual: '✨',
    description: (
      <>
        Includes advanced features like The Architect (.gitignore generator),
        Time Turner (Undo), and detailed contributor statistics. Everything 
        you need to maintain a pristine codebase.
      </>
    ),
  },
];

function Feature({icon, title, description, visual, index}) {
  const isReversed = index % 2 !== 0;
  return (
    <div className={clsx(styles.featureRow, isReversed && styles.featureRowReverse)}>
      <div className={styles.featureVisual}>
        <div className={styles.abstractVisual}>
          {visual}
        </div>
      </div>
      <div className={styles.featureContent}>
        <div className={styles.featureIconContainer}>
          {icon}
        </div>
        <Heading as="h2" className={styles.featureTitle}>{title}</Heading>
        <p className={styles.featureDescription}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        {FeatureList.map((props, idx) => (
          <Feature key={idx} index={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
