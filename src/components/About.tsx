import styles from './About.module.css'

export default function About() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.inner}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>About Us</span>
          <h2 className={styles.title}>About Us</h2>
          <p className={styles.body}>
            Quantified Strategy & Valuation LLC is a small advisory firm founded by UT
            McCombs students. We help startups and growing businesses with valuation,
            financial planning, capital readiness, and transaction support, delivering
            high-quality work at an accessible cost.
          </p>
          <p className={styles.body}>
            Our team is made up of passionate business students with diverse backgrounds in
            finance, accounting, and marketing. We combine our skills to provide practical,
            thoughtful advisory services, focusing on clear analysis, useful financial
            models, and straightforward guidance for founders and business owners.
          </p>

          <div className={styles.getInTouch} id="contact">
            <span className={styles.eyebrow}>Get In Touch</span>
            <h2 className={styles.title}>Have a Project in Mind?</h2>
            <p className={styles.desc}>
              Whether you are preparing for growth, raising capital, planning an exit, or just
              need clearer financial numbers, we would be happy to learn more about your business.
            </p>
            <a href="mailto:business@qsvadvisory.com" className={styles.emailLink}>
              <span className={styles.emailIcon} aria-hidden="true">✉</span>
              business@qsvadvisory.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
