import styles from './ComingSoon.module.css'

export default function ComingSoon() {
  return (
    <div className={styles.page}>
      <div className={styles.bg} />

      <header className={styles.header}>
        <div className={styles.logoMark}>QSV</div>
        <span className={styles.logoText}>Quantified Strategies & Valuation LLC</span>
      </header>

      <main className={styles.main}>
        <div className={styles.badge}>Coming Soon</div>

        <h1 className={styles.headline}>
          Where Data Meets<br />
          <span className={styles.accent}>Investment Conviction</span>
        </h1>

        <p className={styles.sub}>
          A data-driven venture capital fund backing exceptional founders
          building the next generation of transformative companies.
        </p>

        <div className={styles.divider} />

        <p className={styles.notify}>
          Interested in learning more when we launch?
        </p>
        <a href="mailto:hello@qsvllc.com" className={styles.emailBtn}>
          hello@qsvllc.com
        </a>
      </main>

      <footer className={styles.footer}>
        <span className={styles.utBadge}>🤘 UT Austin Student Founded</span>
        <span className={styles.legal}>
          © {new Date().getFullYear()} Quantified Strategies and Valuation LLC
        </span>
      </footer>
    </div>
  )
}
