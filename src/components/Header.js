import styles from './components.module.css'

export default function Header(props) {
  return <div className={styles.header} style={props.style}>
    <h2>{props.name}</h2>
    <div className={styles.headerLine}></div>
  </div>
}