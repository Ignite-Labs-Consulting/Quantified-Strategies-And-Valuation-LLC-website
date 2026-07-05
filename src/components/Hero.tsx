import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.photo} aria-hidden="true" />
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Finance & Transaction Advisory</p>
        <h1 className={styles.headline}>
          Transaction Advisory<br />
          for Startups and Growing Businesses
        </h1>
        <div className={styles.rule} />
        <p className={styles.sub}>
          We help founders and operators evaluate deals, understand business value, and
          prepare for growth, acquisitions, capital raises, or exits.
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
