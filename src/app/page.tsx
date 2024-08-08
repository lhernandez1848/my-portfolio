import './page.scss'
import lisdanay from '../../public/assets/lisdanay.png'
import github from '../../public/assets/github-mark.png'
import linkedin from '../../public/assets/linkedin.png'
import Link from 'next/link';

export default function Home() {
  return (
    <main className='home-main'>
      <section>
        <div className='profile-container card_lh'>
          <div className='profile-main'>
            <img src={lisdanay.src} alt='A headshot of Lis Hernandez' />
            <h3 className=''>Lisdanay Hernandez</h3>
            <span className='text-divider'></span>
            <p className='text-spacing-min'>FRONT-END DEVELOPER</p>
          </div>
          <div className='profile-footer'>
            <Link href={'https://github.com/lhernandez1848'} target='_blank' rel='noreferrer noopener'><img src={github.src} alt='Github logo' /></Link>
            <Link href={'https://www.linkedin.com/in/lisdanay-hernandez'} target='_blank' rel='noreferrer noopener'><img src={linkedin.src} alt='LinkedIn logo'/></Link>
          </div>
        </div>
        <div className='description-container'>
          <div>
            <h1 className=''>Hello</h1>
            <p className='text-size-large'>Get to know me & what I do</p>
          </div>          
          <div className='decription-buttons'>
            <Link href={'/resume'} className='btn-pill btn-colour'>RESUME</Link>
            <Link href={'/projects'} className='btn-pill'>PROJECTS</Link>
          </div>
          <p className='text-spacing-min'>
          I'm a Front-end Developer based in Kitchener, Ontario. With over 2 years of experience in designing, developing and maintaining web applications, I am looking to leverage my skills to produce applications that exceed user expectations.
          </p>
        </div>
      </section>
    </main>
  );
}
