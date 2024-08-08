import { Link } from 'react-router-dom'
import './Footer.scss'

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='email-container'>
        <h5>Email</h5>
        <Link to='mailto:lisdanayhernandez@outlook.com' target='_blank' rel='noopener norefferer'>lisdanayhernandez@outlook.com</Link>
      </div>
      <div className='footer-links-container'>
        <Link to={'https://github.com/lhernandez1848'} target='_blank' rel='noreferrer noopener'><img src={'/assets/github-mark.png'} alt='Github logo' /></Link>
        <Link to={'https://www.linkedin.com/in/lisdanay-hernandez'} target='_blank' rel='noreferrer noopener'><img src={'/assets/linkedin.png'} alt='LinkedIn logo'/></Link>
      </div>
    </footer>
  );
}
