import { Link } from 'react-router-dom'
import styles from './projects.module.css'

export default function ProjectContainer(props) {
  const data = props.data;

  return <article className={styles.projectCard}>
    <img className={styles.projectImage} src={data.mainImage} alt={data.title} />      
    <div className={styles.projectDescriptionContainer}>
      <h3 className={styles.projectTitle}>{data.title}</h3>
      <div className={styles.projectDescription}>
        {data.description.map((e, i) => <p key={i}>{e}</p>)}
      </div>
      {data.link 
        ? <Link to={data.link} className={styles.projectLink} target='_blank' rel='noopener noreferrer'>{data.linkTitle} <div className={styles.linkIcon}>&#129125;</div></Link >
        : <button className={styles.projectLink} onClick={() => props.sidebarCallback(true, data)}>{data.linkTitle} <div className={styles.linkIconIn}>&#10784;</div></button>
      }      
      {data.stack &&
        <ul className={styles.projectStack}>
          {data.stack.map((e, i) => <li key={i}>{e}</li>)}
        </ul>
      }      
    </div>
  </article>
}