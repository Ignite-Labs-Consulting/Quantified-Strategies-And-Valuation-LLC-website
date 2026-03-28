import styles from './About.module.css'

export default function About() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.inner}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>About the Fund</span>
          <h2 className={styles.title}>A New Kind of Venture Fund</h2>
          <p className={styles.body}>
            Quantified Strategies and Valuation LLC was founded with a clear mission: bring
            analytical discipline to early-stage venture investing. We believe that combining
            quantitative rigor with hands-on founder support creates a differentiated model
            for generating superior returns.
          </p>
          <p className={styles.body}>
            We are currently in the process of launching our first fund and are eager to
            connect with founders, limited partners, and fellow investors who share our vision
            for a more disciplined approach to venture capital.
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
            <div className={styles.statNum}>Seed</div>
            <div className={styles.statLabel}>Target Stage</div>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <div className={styles.statNum}>Pre-Seed</div>
            <div className={styles.statLabel}>Also Considered</div>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <div className={styles.statNum}>Data-Driven</div>
            <div className={styles.statLabel}>Investment Philosophy</div>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <div className={styles.statNum}>Fund I</div>
            <div className={styles.statLabel}>Coming Soon</div>
          </div>
        </div>
      </div>
    </section>
  )
}
