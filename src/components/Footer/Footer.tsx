import './Footer.scss'
import { Link } from 'react-router-dom'

export default function Footer() {
  return <footer className='footer'>
    <Link to='https://www.linkedin.com/in/lisdanay-hernandez' className='footerLink' target='_blank' rel='noopener noreferrer'>
      <img src='/assets/LI-In-Bug.png' alt='LinkedIn logo' className='footerLinkImage' />
    </Link >
    '<Link to={'https://github.com/lhernandez1848'} className='footerLink' target='_blank' rel='noopener noreferrer'>
      <img src='/assets/github-mark-white.png' alt='GitHub logo' className='footerLinkImage' />
    </Link >
  </footer>
}