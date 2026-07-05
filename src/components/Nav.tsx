import { useEffect, useState } from 'react'
import styles from './Nav.module.css'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <span className={styles.logoMark}>QSV</span>
          <span className={styles.logoText}>Quantified Strategy & Valuation LLC</span>
        </div>
        <div className={styles.links}>
          <a href="#services" className={styles.link}>Services</a>
          <a href="#about" className={styles.link}>About</a>
          <a href="#contact" className={styles.link}>Contact</a>
          <a href="mailto:business@qsvadvisory.com" className={styles.cta}>Get In Touch</a>
        </div>
      </div>
    </nav>
  )
}
