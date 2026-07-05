import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <div className={styles.logoMark}>QSV</div>
          <div className={styles.brandName}>Quantified Strategy & Valuation LLC</div>
        </div>

        <div className={styles.col}>
          <div className={styles.colLabel}>Services</div>
          <a href="#services" className={styles.colLink}>Business Growth & Capital Readiness</a>
          <a href="#services" className={styles.colLink}>Transaction, Exit & Acquisition Advisory</a>
          <a href="#services" className={styles.colLink}>Valuation Support</a>
          <a href="#services" className={styles.colLink}>Financial Planning</a>
        </div>

        <div className={styles.col}>
          <div className={styles.colLabel}>Contact</div>
          <a href="mailto:business@qsvadvisory.com" className={`${styles.colLink} ${styles.contactLink}`}>
            <span className={styles.contactIcon} aria-hidden="true">✉</span>
            business@qsvadvisory.com
          </a>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.bottomInner}>
          <p className={styles.legal}>
            © 2026 Quantified Strategy & Valuation LLC. All rights reserved.
          </p>
          <p className={styles.disclaimer}>
            Quantified Strategy & Valuation LLC does not provide legal, tax, or securities
            brokerage services. All engagements are limited to financial analysis and advisory services.
          </p>
        </div>
      </div>
    </footer>
  )
}
