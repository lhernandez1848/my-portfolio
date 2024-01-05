import List from '../List/List';
import styles from '../components.module.css';

export default function ExperienceLayout(props) {
  const data = props.data;

  return <div className={styles.expMain}>
    <h4 className={styles.expTitle}>{data.name} <span>at {data.location}</span></h4>
    <p className={styles.expSubtitle}>{data.timeFrame}</p>
    <List listItems={data.list} class={styles.expDescriptionList} />
  </div>
}