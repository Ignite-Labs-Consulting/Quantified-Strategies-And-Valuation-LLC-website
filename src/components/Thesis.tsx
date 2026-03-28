import styles from './Thesis.module.css'

const pillars = [
  {
    icon: '◈',
    title: 'Quantitative Rigor',
    body: 'We apply systematic, data-driven frameworks to evaluate market size, competitive dynamics, and unit economics—removing bias from early-stage investment decisions.',
  },
  {
    icon: '◎',
    title: 'Founder-First',
    body: 'Exceptional founders are the single greatest predictor of outsized returns. We back visionary teams with deep domain expertise and relentless execution ability.',
  },
  {
    icon: '◇',
    title: 'Valuation Discipline',
    body: 'Entry price matters. We employ rigorous valuation methodologies to ensure every investment is priced to deliver meaningful returns for our LPs.',
  },
  {
    icon: '◉',
    title: 'Sector Agnostic',
    body: 'Opportunity doesn\'t respect industry lines. We invest across technology-enabled businesses wherever compelling risk-adjusted returns exist.',
  },
]

export default function Thesis() {
  return (
    <section className={styles.section} id="thesis">
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Investment Thesis</span>
          <h2 className={styles.title}>Built on a Quantified Foundation</h2>
          <p className={styles.desc}>
            We believe the best venture outcomes come from combining rigorous analytical frameworks
            with conviction in transformative founders.
          </p>
        </div>
        <div className={styles.grid}>
          {pillars.map((p) => (
            <div key={p.title} className={styles.card}>
              <span className={styles.icon}>{p.icon}</span>
              <h3 className={styles.cardTitle}>{p.title}</h3>
              <p className={styles.cardBody}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
