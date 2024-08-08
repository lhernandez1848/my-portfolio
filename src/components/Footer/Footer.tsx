import Link from 'next/link'
import './Footer.scss'
import github from '../../../public/assets/github-mark.png'
import linkedin from '../../../public/assets/linkedin.png'

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='email-container'>
        <h5>Email</h5>
        <Link href='mailto:lisdanayhernandez@outlook.com' target='_blank' rel='noopener norefferer'>lisdanayhernandez@outlook.com</Link>
      </div>
      <div className='footer-links-container'>
        <Link href={'https://github.com/lhernandez1848'} target='_blank' rel='noreferrer noopener'><img src={github.src} alt='Github logo' /></Link>
        <Link href={'https://www.linkedin.com/in/lisdanay-hernandez'} target='_blank' rel='noreferrer noopener'><img src={linkedin.src} alt='LinkedIn logo'/></Link>
      </div>
    </footer>
  );
}
