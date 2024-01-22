import { NavLink } from "react-router-dom";
import styles from './components.module.css'

export default function Menu(props) {
    const menuItems = props.items.map((item, i) => {
        return <NavLink to={item.link} key={i} className={({ isActive }) => isActive ? `${styles.menuItem} ${styles.activeLink}` : styles.menuItem}>{item.name}</NavLink>
    })

    return <nav className={styles.menu}>{menuItems}</nav>
}