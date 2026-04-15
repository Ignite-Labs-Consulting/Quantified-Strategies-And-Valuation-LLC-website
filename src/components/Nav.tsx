import styles from './Nav.module.css'

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <span className={styles.logoMark}>QSV</span>
          <span className={styles.logoText}>Quantified Strategy & Valuation</span>
        </div>
        <div className={styles.links}>
          <a href="#services" className={styles.link}>Services</a>
          <a href="#about" className={styles.link}>About</a>
          <a href="#contact" className={styles.link}>Contact</a>
          <a href="mailto:hello@qsvllc.com" className={styles.cta}>Get In Touch</a>
        </div>
      </div>
    </nav>
  )
}
