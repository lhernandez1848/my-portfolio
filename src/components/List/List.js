import styles from '../components.module.css';

export default function List(props) {
  const listItems = props.listItems;

  return <ul className={`${styles.unorderedList} ${props.class}`}>
    {listItems.map((e, i) => {
      return <li key={i}><div className={styles.listBulletSquare}>&#9632;</div><div className={styles.listText}>{e}</div></li>
    })}
  </ul>
}