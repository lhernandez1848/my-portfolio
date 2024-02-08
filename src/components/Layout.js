import styles from './components.module.css'
import Menu from './Menu'
import Footer from './Footer/Footer'

export default function Layout({ children, id, pageName }) {
  return <main className={styles.componentMain} style={{ backgroundImage: 'url(/assets/circuit.svg)' }}>
    <Menu items={[
      { name: 'Home', link: '/' },
      { name: 'Projects', link: '/projects' },
      { name: 'Resume', link: '/resume' },
      { name: 'About', link: '/about' } ]} />
    <section className={`${styles.componentContainer} ${pageName}`} id={id}>
      { children }
    </section>
    <Footer />
  </main>
}