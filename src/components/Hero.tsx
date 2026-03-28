import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.badge}>Venture Capital · Early Stage</div>
        <h1 className={styles.headline}>
          Where Data Meets<br />
          <span className={styles.accent}>Investment Conviction</span>
        </h1>
        <p className={styles.sub}>
          Quantified Strategies and Valuation LLC is a data-driven venture capital fund
          backing exceptional founders building the next generation of transformative companies.
        </p>
        <div className={styles.actions}>
          <a href="#thesis" className={styles.primaryBtn}>Our Thesis</a>
          <a href="#contact" className={styles.secondaryBtn}>Connect With Us</a>
        </div>
      </div>
      <div className={styles.gradientBar} />
    </section>
  )
}
