import styles from '../components.module.css'
import Typography from '@mui/material/Typography'

export default function List(props) {
  const listItems = props.listItems;

  return <ul className={`${styles.unorderedList} ${props.class}`}>
    {listItems.map((e, i) => {
      return <li key={i}>
        <div className={styles.listBulletSquare}>&#9632;</div>
        <Typography component="span" variant="p" >{e}</Typography>
        {/* <div className={styles.listText}>{e}</div> */}
      </li>
    })}
  </ul>
}