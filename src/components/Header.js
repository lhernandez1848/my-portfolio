import styles from './components.module.css'

export default function Header(props) {
  return <div className={styles.header} style={props.style}>
    <h3>{props.name}</h3>
    <div className={styles.headerLine}></div>
  </div>
}