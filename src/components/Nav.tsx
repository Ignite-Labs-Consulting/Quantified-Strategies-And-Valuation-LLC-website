import styles from './Nav.module.css'

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <span className={styles.logoMark}>QSV</span>
          <span className={styles.logoText}>Quantified Strategies & Valuation</span>
        </div>
        <a href="mailto:contact@qsvllc.com" className={styles.cta}>
          Get in Touch
        </a>
      </div>
    </nav>
  )
}
