import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <div className={styles.logoMark}>QSV</div>
          <div className={styles.brandName}>Quantified Strategy & Valuation LLC</div>
          <div className={styles.brandSub}>A UT Austin Student Founded Advisory Firm</div>
        </div>

        <div className={styles.col}>
          <div className={styles.colLabel}>Services</div>
          <a href="#services" className={styles.colLink}>Startup Financial Strategy</a>
          <a href="#services" className={styles.colLink}>Investor Readiness</a>
          <a href="#services" className={styles.colLink}>Valuation Advisory</a>
          <a href="#services" className={styles.colLink}>Exit Strategy</a>
        </div>

        <div className={styles.col}>
          <div className={styles.colLabel}>Contact</div>
          <a href="mailto:founders@qsvllc.com" className={styles.colLink}>founders@qsvllc.com</a>
          <a href="mailto:advisory@qsvllc.com" className={styles.colLink}>advisory@qsvllc.com</a>
          <a href="mailto:hello@qsvllc.com" className={styles.colLink}>hello@qsvllc.com</a>
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
