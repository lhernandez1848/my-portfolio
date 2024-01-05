import styles from './components.module.css'

export default function Fruit(props) {
  return <a className={styles.fruit} style={props.style} href={props.link}>
    {props.image}
    <h3 className={styles.fruitTitle}>{props.title}</h3>
  </a>
}