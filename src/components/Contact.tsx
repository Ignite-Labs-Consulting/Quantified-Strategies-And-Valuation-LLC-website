import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.inner}>
        <span className={styles.eyebrow}>Get In Touch</span>
        <h2 className={styles.title}>Let's Build Something Together</h2>
        <p className={styles.desc}>
          Whether you're a founder looking for a data-driven partner, or an LP interested
          in our approach—we'd love to hear from you.
        </p>
        <div className={styles.cards}>
          <a href="mailto:founders@qsvllc.com" className={styles.card}>
            <div className={styles.cardIcon}>◈</div>
            <div className={styles.cardTitle}>Founders</div>
            <div className={styles.cardBody}>Pitch us your vision and let's explore whether we're the right partner for your journey.</div>
            <div className={styles.cardLink}>founders@qsvllc.com →</div>
          </a>
          <a href="mailto:lp@qsvllc.com" className={styles.card}>
            <div className={styles.cardIcon}>◎</div>
            <div className={styles.cardTitle}>Limited Partners</div>
            <div className={styles.cardBody}>Learn more about our Fund I and investment approach for accredited investors.</div>
            <div className={styles.cardLink}>lp@qsvllc.com →</div>
          </a>
          <a href="mailto:hello@qsvllc.com" className={styles.card}>
            <div className={styles.cardIcon}>◇</div>
            <div className={styles.cardTitle}>General Inquiries</div>
            <div className={styles.cardBody}>Partnership opportunities, media, or just want to connect? Reach out anytime.</div>
            <div className={styles.cardLink}>hello@qsvllc.com →</div>
          </a>
        </div>
      </div>
    </section>
  )
}
