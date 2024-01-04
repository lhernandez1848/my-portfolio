'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './components.module.css'

export default function Menu(props) {
    const pathname = usePathname()

    const menuItems = props.items.map((item, i) => {
        return <Link href={item.link} key={i} className={`${styles.menuItem} ${pathname == item.link ? styles.activeLink : ''}`}>{item.name}</Link>
    })

    return <div className={styles.menu}>{menuItems}</div>
}