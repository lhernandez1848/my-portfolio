import styles from './sidebar.module.css'
import globalStyles from '../../app.module.css'
import Gallery from '../Gallery/Gallery'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useRef } from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'

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

  return <Container className={styles.sidebar} ref={ref} sx={{ color: (theme) =>
    theme.palette.mode === 'light' ? '#000' : '#c4ceed', bgcolor: (theme) => theme.palette.mode === 'light' ? '#fbfcfe' : '#04070a' }}>
    <button onClick={() => props.callback(false)} className={styles.sidebarCloseButton} title='close'>&#129106;</button>
    <section>
      <Typography className={styles.sidebarTitle} component="h4" variant="h4" >
        {data.title}
      </Typography>
      <Gallery images={data.images} />
      <article className={styles.sidebarDescription}>
        {data.description.map((item, i) => {
          return <Typography component="p" variant="body1" key={i}>{item}</Typography>
        })}
      </article>
      {data.link &&
        <Link to={data.link} className={globalStyles.linkWithIcon} target='_blank' rel='noopener noreferrer'>{data.linkTitle} <div className={styles.linkIcon}>&#129125;</div></Link >
      }
      <br />
      <Typography component="p" variant="p">Technologies used:</Typography>
      {data.stack &&
        <ul className={styles.projectStack}>
          {data.stack.map((e, i) => <li key={i}><Box className={styles.stackItem} sx={{ 
            bgcolor: (theme) => theme.palette.mode === 'light' ? '#55a6f64d' : '#121820' 
          }}>{e}</Box></li>)}
        </ul>
      }   
    </section>
  </Container>
}