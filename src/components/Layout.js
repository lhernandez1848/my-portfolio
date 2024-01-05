import styles from './components.module.css'

export default function Layout({ children, id }) {
    return <section className={styles.componentContainer} id={id}>
        { children }
    </section>
}