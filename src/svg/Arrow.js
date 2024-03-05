import styles from '../components/FallingArrow/fallingArrow.module.css'

export default function Arrow() {
  return <svg width="23" height="28" viewBox="0 0 23 28" fill="none" className={styles.fallingArrow}>
  <g filter="url(#filter0_d_131_2)">
  <path d="M11.7224 6H10.6698V10.5778H6L10.2748 15.7333H6L11.1962 22L16.3923 15.7333H12.1175L16.3923 10.5778H11.7224V6Z" fill="#317C9C"/>
  </g>
  <defs>
  <filter id="filter0_d_131_2" x="0" y="0" width="22.3923" height="28" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
  <feOffset/>
  <feGaussianBlur stdDeviation="3"/>
  <feComposite in2="hardAlpha" operator="out"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0.192157 0 0 0 0 0.486275 0 0 0 0 0.611765 0 0 0 0.25 0"/>
  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_131_2"/>
  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_131_2" result="shape"/>
  </filter>
  </defs>
  </svg>
}