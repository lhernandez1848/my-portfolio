import styles from '../components/components.module.css'

export default function ResumeSvg() {
  return <svg width="243" height="323" viewBox="0 0 243 323" className={styles.fruitImage} id={styles.lineImage}>
    <defs>
      <clipPath id="clip-resume">
        <rect width="243" height="323"/>
      </clipPath>
    </defs>
    <g clipPath="url(#clip-resume)">
      <path id="Path_56" data-name="Path 56" d="M1908.418,334.985h-220v-300h220v300" transform="translate(-1676.418 -22.985)" fill="none" stroke="#317c9c" strokeLinecap="round" strokeLinejoin="round" strokeWidth="20"/>
      <rect id="Rectangle_30" data-name="Rectangle 30" width="149" height="16" rx="8" transform="translate(47.5 165.5)" fill="#317c9c"/>
      <g id="Group_5" data-name="Group 5" transform="translate(77.937 43)">
        <ellipse id="Ellipse_64" data-name="Ellipse 64" cx="24.224" cy="21.732" rx="24.224" ry="21.732" transform="translate(19.839)" fill="#317c9c"/>
        <path id="Path_60" className={styles.fruitPathSpecialFill} data-name="Path 60" d="M39.126,0C60.735,0,78.253,11.982,78.253,26.763s-17.518,1.281-39.126,1.281S0,41.543,0,26.763,17.518,0,39.126,0Z" transform="translate(4.937 46.569)" fill="#317c9c"/>
      </g>
      <rect id="Rectangle_32" data-name="Rectangle 32" width="149" height="16" rx="8" transform="translate(47.5 208.75)" fill="#317c9c"/>
      <rect id="Rectangle_33" data-name="Rectangle 33" width="149" height="16" rx="8" transform="translate(47.5 252)" fill="#317c9c"/>
    </g>
  </svg>
}