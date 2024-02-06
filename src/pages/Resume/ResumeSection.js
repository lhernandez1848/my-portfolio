import List from '../../components/List/List'
import styles from './resume.module.css'

export default function ResumeSection(props) {
  const data = props.data;

  return <article className={styles.resumeSection}>
    <span className={styles.resumeYear}>{data.startYear}</span>
    <div className={styles.resumeLineContainer}>
      <span className={styles.resumeCircle}></span>
      <span className={styles.resumeLine}></span>
    </div>
    <div className={styles.resumeBox}>
      <h4 className={styles.expTitle}>{data.name} <span>at {data.location}</span></h4>
      <p className={styles.expSubtitle}>{data.timeFrame}</p>
      <List listItems={data.list} class={styles.expDescriptionList} />
    </div>
  </article>
}