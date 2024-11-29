import Layout from "../components/Layout";
import P from "../components/Text/P";
import H1 from "../components/Text/H1";
import CustomLink from "../components/Link";
import H3 from "../components/Text/H3";
import { ABOUT } from "../lib/data";
import Card from "../components/Cards/Card";

export default function Home() {
  return <Layout>
    <section className="lh-page home">
      <div className="home-container">
        <Card type="profile-container">
          <div className="profile-main">
            <img src={"/assets/lisdanay.png"} alt="A headshot of Lis Hernandez" />
            <H3 title={ABOUT.name} />
            <span className="text-divider"></span>
            <P type="text-spacing-min">{ABOUT.title}</P>
          </div>
          <div className="profile-footer">
            <CustomLink link={"https://github.com/lhernandez1848"} target="_blank" rel="noreferrer noopener">
              <img src={"/assets/github-mark.png"} alt="Github logo" className="link-icons" />
            </CustomLink>
            <CustomLink link={"https://www.linkedin.com/in/lisdanay-hernandez"} target="_blank" rel="noreferrer noopener">
              <img src={"/assets/linkedin.png"} alt="LinkedIn logo" className="link-icons"/>
            </CustomLink>
          </div>
        </Card>
        <div className="description-container">
          <div>
            <H1 title={ABOUT.greeting} />
            <P type="text-size-large">{ABOUT.subgreeting}</P>
          </div>          
          <div className="decription-buttons">
            <CustomLink link={"/resume"} type="btn-pill btn-colour">RESUME</CustomLink>
            <CustomLink link={"/projects"} type="btn-pill">PROJECTS</CustomLink>
          </div>
          <P type="text-spacing-min">{ABOUT.description}</P>
        </div>
      </div>
    </section>
  </Layout>
}