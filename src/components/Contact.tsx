import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.inner}>
        <span className={styles.eyebrow}>Get In Touch</span>
        <h2 className={styles.title}>Ready to Get Started?</h2>
        <p className={styles.desc}>
          Whether you're preparing to raise capital, planning an exit, or simply need
          financial clarity—we'd love to hear about your business.
        </p>
        <div className={styles.cards}>
          <a href="mailto:founders@qsvllc.com" className={styles.card}>
            <div className={styles.cardIcon}>◈</div>
            <div className={styles.cardTitle}>Founders & Startups</div>
            <div className={styles.cardBody}>Building toward your first raise or Series A? Let's build the financial story that gets you there.</div>
            <div className={styles.cardLink}>founders@qsvllc.com →</div>
          </a>
          <a href="mailto:advisory@qsvllc.com" className={styles.card}>
            <div className={styles.cardIcon}>◎</div>
            <div className={styles.cardTitle}>Business Owners</div>
            <div className={styles.cardBody}>Considering a sale, acquisition, or growth capital raise? We'll help you understand your value and options.</div>
            <div className={styles.cardLink}>advisory@qsvllc.com →</div>
          </a>
          <a href="mailto:hello@qsvllc.com" className={styles.card}>
            <div className={styles.cardIcon}>◇</div>
            <div className={styles.cardTitle}>General Inquiries</div>
            <div className={styles.cardBody}>Partnership opportunities, referrals, or just want to connect? Reach out anytime.</div>
            <div className={styles.cardLink}>hello@qsvllc.com →</div>
          </a>
        </div>
      </div>
    </section>
  )
}
