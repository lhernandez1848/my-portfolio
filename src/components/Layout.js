import styles from './components.module.css';
import Menu from './Menu';

export default function Layout({ children, id, pageName }) {
    return <main className={styles.componentMain} style={{ backgroundImage: 'url(/assets/circuit.png)' }}>
        <Menu items={[
            { name: 'Home', link: '/' },
            { name: 'Projects', link: '/projects' },
            { name: 'Resume', link: '/resume' },
            { name: 'About', link: '/about' } ]} />
        <section className={`${styles.componentContainer} ${pageName}`} id={id}>
            { children }
        </section>
    </main>
}