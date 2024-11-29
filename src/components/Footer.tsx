import '../css/footer.scss'
import { ABOUT } from '../lib/data';
import CustomLink from './Link'
import H5 from './Text/H5';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='email-container'>
        <H5 title='Email'/>
        <CustomLink link={`mailto:${ABOUT.email}`} target='_blank' rel='noopener norefferer'>{ABOUT.email}</CustomLink>
      </div>
      <div className='footer-links-container'>
        <CustomLink link={'https://github.com/lhernandez1848'} target='_blank' rel='noreferrer noopener'>
          <img src={'/assets/github-mark.png'} alt='Github logo' className="link-icons" />
        </CustomLink>
        <CustomLink link={'https://www.linkedin.com/in/lisdanay-hernandez'} target='_blank' rel='noreferrer noopener'>
          <img src={'/assets/linkedin.png'} alt='LinkedIn logo' className="link-icons"/>
        </CustomLink>
      </div>
    </footer>
  );
}
