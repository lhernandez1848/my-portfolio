import { useEffect } from 'react';
import Layout from '../../components/Layout/Layout';
import './Home.scss'
import { Link } from 'react-router-dom'

export default function Home() {
  useEffect(() => {
    document.title = 'Lisdanay Hernandez - Portfolio';
  }, [])

  return (
    <Layout>
      <main className='home-main'>
        <section>
          <div className='profile-container card_lh'>
            <div className='profile-main'>
              <img src={'/assets/lisdanay.png'} alt='A headshot of Lis Hernandez' />
              <h3 className=''>Lisdanay Hernandez</h3>
              <span className='text-divider'></span>
              <p className='text-spacing-min'>FRONT-END DEVELOPER</p>
            </div>
            <div className='profile-footer'>
              <Link to={'https://github.com/lhernandez1848'} target='_blank' rel='noreferrer noopener'><img src={'/assets/github-mark.png'} alt='Github logo' /></Link>
              <Link to={'https://www.linkedin.com/in/lisdanay-hernandez'} target='_blank' rel='noreferrer noopener'><img src={'/assets/linkedin.png'} alt='LinkedIn logo'/></Link>
            </div>
          </div>
          <div className='description-container'>
            <div>
              <h1 className=''>Hello</h1>
              <p className='text-size-large'>Get to know me & what I do</p>
            </div>          
            <div className='decription-buttons'>
              <Link to={'/resume'} className='btn-pill btn-colour'>RESUME</Link>
              <Link to={'/projects'} className='btn-pill'>PROJECTS</Link>
            </div>
            <p className='text-spacing-min'>
            I'm a Front-end Developer based in Kitchener, Ontario. With over 2 years of experience in designing, developing and maintaining web applications, I am looking to leverage my skills to produce applications that exceed user expectations.
            </p>
          </div>
        </section>
      </main>
    </Layout>    
  );
}
