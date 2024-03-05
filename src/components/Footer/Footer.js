import styles from './footer.module.css'
import IconButton from '@mui/material/IconButton'
import FacebookIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

export default function Footer(props) {
  return <footer className={styles.footer} style={props.style}>
    <IconButton target='_blank' rel='noopener noreferrer'
      color="inherit"
      href="https://github.com/lhernandez1848"
      aria-label="GitHub"
      sx={{ alignSelf: 'center' }}
    >
      <FacebookIcon />
    </IconButton>
    <IconButton target='_blank' rel='noopener noreferrer'
      color="inherit"
      href="https://www.linkedin.com/in/lisdanay-hernandez"
      aria-label="LinkedIn"
      sx={{ alignSelf: 'center' }}
    >
      <LinkedInIcon />
    </IconButton>
  </footer>
}