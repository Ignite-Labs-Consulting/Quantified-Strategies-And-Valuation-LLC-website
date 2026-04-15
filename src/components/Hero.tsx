import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Finance & Strategy Advisory</p>
        <h1 className={styles.headline}>
          Finance & Strategy Advisory<br />
          for Startups and Business Owners
        </h1>
        <div className={styles.rule} />
        <p className={styles.sub}>
          We help founders and operators translate their business into clear financial models,
          valuation insights, and actionable growth or exit strategies.
        </p>
        <div className={styles.actions}>
          <a href="#services" className={styles.primaryBtn}>Our Services</a>
          <a href="#contact" className={styles.secondaryBtn}>Connect With Us</a>
        </div>
      </div>
      <div className={styles.accentBar} />
    </section>
  )
}
