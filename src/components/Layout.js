import styles from './components.module.css';
import Menu from './Menu';

export default function Layout({ children, id }) {
    return <>
        <Menu items={[
            { name: 'Home', link: '/' },
            { name: 'Projects', link: '/projects' } ]} />
        <section className={styles.componentContainer} id={id}>
            { children }
        </section>
    </>
}