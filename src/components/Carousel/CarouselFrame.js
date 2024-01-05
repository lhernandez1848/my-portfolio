import styles from './carousel.module.css'

export default function CarouselFrame(props) {
  return (
    <div className={styles.carouselImageframe}>
      <img className={styles.carouselFrameImage} src={props.imgSrc} />
    </div>
  )
}