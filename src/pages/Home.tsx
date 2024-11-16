import Layout from "../components/Layout";
import Paragraph from "../components/Paragraph";
import H1 from "../components/Headers/H1";
import CustomLink from "../components/Link";
import H3 from "../components/Headers/H3";
import { ABOUT } from "../lib/data";

export default function Home() {
  return <Layout>
    <section className="home">
      <div className="home-container">
        <div className='profile-container card_lh'>
          <div className='profile-main'>
            <img src={'/assets/lisdanay.png'} alt='A headshot of Lis Hernandez' />
            <H3 title={ABOUT.name} />
            <span className='text-divider'></span>
            <Paragraph type='text-spacing-min'>{ABOUT.title}</Paragraph>
          </div>
          <div className='profile-footer'>
            <CustomLink link={'https://github.com/lhernandez1848'} target='_blank' rel='noreferrer noopener'>
              <img src={'/assets/github-mark.png'} alt='Github logo' className="link-icons" />
            </CustomLink>
            <CustomLink link={'https://www.linkedin.com/in/lisdanay-hernandez'} target='_blank' rel='noreferrer noopener'>
              <img src={'/assets/linkedin.png'} alt='LinkedIn logo' className="link-icons"/>
            </CustomLink>
          </div>
        </div>
        <div className='description-container'>
          <div>
            <H1 title={ABOUT.greeting} />
            <Paragraph type='text-size-large'>{ABOUT.subgreeting}</Paragraph>
          </div>          
          <div className='decription-buttons'>
            <CustomLink link={'/resume'} type="btn-pill btn-colour">RESUME</CustomLink>
            <CustomLink link={'/projects'} type="btn-pill">PROJECTS</CustomLink>
          </div>
          <Paragraph type='text-spacing-min'>{ABOUT.description}</Paragraph>
        </div>
      </div>
    </section>
  </Layout>
}