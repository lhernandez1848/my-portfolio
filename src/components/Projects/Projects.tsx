import './Projects.scss'
import ProjectContainer from './ProjectContainer'
import { PROJECTS } from '../../data'

export default function Projects() {
  return <section className='project-section'>
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
}