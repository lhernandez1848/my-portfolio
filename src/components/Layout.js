import Menu from './Menu'
import styles from './components.module.css'

export default function Layout({ children, id }) {
    return <section className={styles.componentContainer} id={id}>
        {/* <Menu items={[
            { name: 'Home', link: '/' },
            { name: 'Projects', link: '/projects' },
            { name: 'Resume', link: '/resume' },
            { name: 'About Me', link: '/about' } ]} /> */}
        { children }
    </section>
}