import styles from './components.module.css'
import Typography from '@mui/material/Typography'

export default function Fruit(props) {
  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
    }
  };

  return <button className={styles.fruit} style={props.style} onClick={() => scrollToSection(props.section)}>
    {props.image}
    <Typography className={styles.fruitTitle}
      component="h3" variant="h3"
      sx={{ color: (theme) => theme.palette.mode === 'light' ? 'primary.main' : '#e2fdf6' }}> 
      {props.title}
    </Typography>
  </button>
}