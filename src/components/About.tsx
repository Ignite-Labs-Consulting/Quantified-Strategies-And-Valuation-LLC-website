import styles from './About.module.css'

export default function About() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.inner}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>About Us</span>
          <h2 className={styles.title}>Advisory Built on Analytical Rigor</h2>
          <p className={styles.body}>
            Quantified Strategy & Valuation LLC was founded with a clear mission: help
            founders and business owners gain the financial clarity they need to grow,
            raise capital, or execute a successful exit. We combine quantitative discipline
            with real-world advisory experience to deliver work that actually moves the needle.
          </p>
          <p className={styles.body}>
            Whether you're preparing for your first investor conversation or mapping out a
            long-term exit, we translate the complexity of your business into financial
            models and strategies that tell a compelling, defensible story.
          </p>
          <div className={styles.utBadge}>
            <div className={styles.utBadgeInner}>
              <span className={styles.utIcon}>🤘</span>
              <div>
                <div className={styles.utLabel}>UT Austin Student Founded</div>
                <div className={styles.utSub}>The University of Texas at Austin</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.statsCol}>
          <div className={styles.stat}>
            <div className={styles.statNum}>Financial</div>
            <div className={styles.statLabel}>Modeling & Projections</div>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <div className={styles.statNum}>Valuation</div>
            <div className={styles.statLabel}>DCF · Comps · Transactions</div>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <div className={styles.statNum}>Growth</div>
            <div className={styles.statLabel}>& Exit Strategy</div>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <div className={styles.statNum}>Investor</div>
            <div className={styles.statLabel}>Readiness & Preparation</div>
          </div>
        </div>
      </div>
    </section>
  )
}
