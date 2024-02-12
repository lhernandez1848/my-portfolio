import styles from './sidebar.module.css'
import globalStyles from '../../app.module.css'
import Gallery from '../Gallery/Gallery'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import { useRef } from 'react';

export default function Sidebar(props) {
  const data = props.data;
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        props.callback(false)
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, props])

  return <aside className={styles.sidebar} ref={ref}>
    <button onClick={() => props.callback(false)} className={styles.sidebarCloseButton} title='close'>&#129106;</button>
    <section>
      <h4 className={styles.sidebarTitle}>{data.title}</h4>
      <Gallery images={data.images} />
      <article className={styles.sidebarDescription}>
        {data.description.map((item, i) => {
          return <p key={i}>{item}</p>
        })}
      </article>
      {data.link &&
        <Link to={data.link} className={globalStyles.linkWithIcon} target='_blank' rel='noopener noreferrer'>{data.linkTitle} <div className={styles.linkIcon}>&#129125;</div></Link >
      }
      <br />
      <p>Technologies used:</p>
      {data.stack &&
        <ul className={styles.projectStack}>
          {data.stack.map((e, i) => <li key={i}>{e}</li>)}
        </ul>
      }   
    </section>
  </aside>    
}