import styles from './footer.module.css'
import { Link } from 'react-router-dom'

export default function Footer(props) {
  return <footer className={styles.footer} style={props.style}>
    <Link to='https://www.linkedin.com/in/lisdanay-h-bb9181105' className={styles.footerLink} target='_blank' rel='noopener noreferrer'>
      <img src='/assets/LI-In-Bug.png' alt='LinkedIn logo' className={styles.footerLinkImage} />
    </Link >
    <Link to={'https://github.com/lhernandez1848'} className={styles.footerLink} target='_blank' rel='noopener noreferrer'>
      <img src='/assets/github-mark-white.png' alt='GitHub logo' className={styles.footerLinkImage} />
    </Link >
  </footer>
}