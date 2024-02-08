import styles from './sidebar.module.css'
import Gallery from '../Gallery/Gallery'

export default function Sidebar(props) {
  const data = props.data;

  return <aside className={styles.sidebar}>
    <button onClick={() => props.callback(false)} className={styles.sidebarCloseButton} title='close'>&#129106;</button>
    <section>
      <h4 className={styles.sidebarTitle}>{data.title}</h4>
      <Gallery images={data.images} />
      <article className={styles.sidebarDescription}>
        {data.description.map((item, i) => {
          return <p key={i}>{item}</p>
        })}
      </article>
      {data.stack &&
        <ul className={styles.projectStack}>
          {data.stack.map((e, i) => <li key={i}>{e}</li>)}
        </ul>
      }
    </section>
  </aside>    
}