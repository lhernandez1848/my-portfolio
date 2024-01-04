import styles from './list.module.css';

export default function List(props) {
  const listItems = props.listItems;

  return <ul className={props.class}>
    {listItems.map((e, i) => {
      return <li key={i}><div className={styles.listBulletSquare}>&#9632;</div><div className={styles.listText}>{e}</div></li>
    })}
  </ul>
}