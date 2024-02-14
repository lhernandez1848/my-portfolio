import styles from './projects.module.css'
import globalStyles from '../../app.module.css'

export default function ProjectContainer(props) {
  const data = props.data;

  return <article className={styles.projectCard}>
    <img className={styles.projectImage} src={data.mainImage} alt={data.title} />      
    <div className={styles.projectDescriptionContainer}>
      <h3 className={styles.projectTitle}>{data.title}</h3>
      <div className={styles.projectDescription}>
        <p>{data.shortDescription}</p>
      </div>
      <button className={globalStyles.linkWithIcon} onClick={() => props.sidebarCallback(true, data)}>Read more <div className={globalStyles.linkIconIn}>&#10784;</div></button>
    </div>
  </article>
}