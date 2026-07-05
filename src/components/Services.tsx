import styles from './Services.module.css'

const left = {
  title: 'Business Growth & Capital Readiness',
  items: [
    'Quarterly KPI tracking toward your next business goal',
    'Support across startup & growth-stage business needs',
    'Capital raise preparation',
    'Financial modeling & scenario analysis',
    'Budgeting, runway & cash planning',
    'Investor-ready financial materials',
  ],
}

const right = {
  title: 'Transaction, Exit & Acquisition Advisory',
  items: [
    'Business valuation: DCF, comps, & precedent transactions',
    'Buy-side & sell-side transaction support',
    'Acquisition strategy & target evaluation',
    'Exit planning & scenario analysis',
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
          <p className={styles.desc}>
            Built for founders and owners who need clear financial guidance, cost-effective
            advisory support, and CFO-style planning before they are ready for a traditional
            investment bank or consulting firm.
          </p>
        </div>

        <div className={styles.grid}>
          {[left, right].map((service) => (
            <div key={service.title} className={styles.card}>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <ul className={styles.list}>
                {service.items.map((item) => (
                  <li key={item} className={styles.listItem}>
                    <span className={styles.bullet} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className={styles.note}>
          For businesses without complete financial statements, our accounting support can
          help organize financial records and prepare usable financial numbers for valuation,
          capital readiness, or transaction planning.
        </p>
      </div>
    </section>
  )
}
