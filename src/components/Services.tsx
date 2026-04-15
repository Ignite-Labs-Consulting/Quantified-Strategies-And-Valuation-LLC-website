import styles from './Services.module.css'

const left = {
  eyebrow: 'Section 01',
  title: 'Startup Financial Strategy & Investor Readiness',
  desc: 'We translate your business fundamentals into the financial clarity investors demand — from day one through your raise.',
  items: [
    'Financial modeling & multi-scenario projections',
    'Investor-ready pitch deck financials',
    'KPI framework design & unit economics',
    'Capital raise preparation & deal structuring',
    'Runway analysis & budget planning',
  ],
}

const right = {
  eyebrow: 'Section 02',
  title: 'Valuation & Exit Strategy Advisory',
  desc: 'We provide rigorous, data-backed valuation work and strategic roadmaps to help you negotiate from a position of strength.',
  items: [
    'Business valuation (DCF, comps, precedent transactions)',
    'M&A advisory preparation',
    'Exit scenario modeling & timing analysis',
    'Deal structure & term sheet guidance',
    'Growth strategy & value creation planning',
  ],
}

export default function Services() {
  return (
    <section className={styles.section} id="services">
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>What We Do</span>
          <h2 className={styles.title}>Advisory Built Around Your Business</h2>
          <p className={styles.desc}>
            Rigorous financial analysis and clear strategic guidance — delivered by advisors
            who understand the language of founders and investors alike.
          </p>
        </div>

        <div className={styles.grid}>
          {[left, right].map((service) => (
            <div key={service.title} className={styles.card}>
              <span className={styles.cardNum}>{service.eyebrow}</span>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.desc}</p>
              <ul className={styles.list}>
                {service.items.map((item) => (
                  <li key={item} className={styles.listItem}>
                    <span className={styles.bullet} />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={styles.cardLink}>
                Learn More <span aria-hidden="true">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
