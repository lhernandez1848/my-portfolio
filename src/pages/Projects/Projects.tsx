import Layout from '../../components/Layout'
import ProjectContainer from './ProjectContainer'
import { PROJECTS } from '../../data'
import './Projects.scss'
import Footer from '../../components/Footer/Footer'

export default function Projects() {
  return (
    <Layout>
      <section className='project-section'>
        <h2>
          My Projects
        </h2>
        <div className='project-container'>
          {PROJECTS.map((item, i) => {
            return (
              <ProjectContainer key={i} data={item} />
            )
          })}
        </div>
      </section>
      <Footer />
    </Layout>
  )
}