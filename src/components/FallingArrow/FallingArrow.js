import styles from './fallingArrow.module.css'

export default function FallingArrow(props) {
  const dots = [];

  for (let i = 0; i < props.number; i++) {
    dots.push(<span className={styles.fallingArrow} key={i}>&#11247;</span>)
  }

  return dots
}