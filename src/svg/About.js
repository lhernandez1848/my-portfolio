import styles from '../components/components.module.css'

export default function AboutSvg() {
  return <svg width="233" height="260" viewBox="0 0 233 260" className={styles.fruitImage} id={styles.aboutImage}>
    <defs>
      <clipPath id="clip-about">
        <rect width="233" height="260"/>
      </clipPath>
    </defs>
    <g id="about" clipPath="url(#clip-about)">
      <g id="Group_4" data-name="Group 4" transform="translate(-1.937 1)">
        <circle id="Ellipse_64" data-name="Ellipse 64" cx="70" cy="70" r="70" transform="translate(48)" fill="#317c9c"/>
        <path id="Path_60" data-name="Path 60" d="M113.063,0c62.443,0,113.063,38.594,113.063,86.2s-50.62,4.125-113.063,4.125S0,133.811,0,86.2,50.62,0,113.063,0Z" transform="translate(4.937 150)" fill="#317c9c"/>
      </g>
    </g>
  </svg>
}