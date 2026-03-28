import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <div className={styles.logoMark}>QSV</div>
          <div>
            <div className={styles.brandName}>Quantified Strategies & Valuation LLC</div>
            <div className={styles.brandSub}>A UT Austin Student Founded Venture Fund</div>
          </div>
        </div>
        <div className={styles.right}>
          <p className={styles.legal}>
            © {new Date().getFullYear()} Quantified Strategies and Valuation LLC. All rights reserved.
          </p>
          <p className={styles.disclaimer}>
            This website is for informational purposes only and does not constitute an offer
            to sell or solicitation to buy securities.
          </p>
        </div>
      </div>
    </footer>
  )
}
