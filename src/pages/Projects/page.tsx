import './page.scss'
import Header from '../../components/Header/Header'
import { PROJECTS } from '../../data'
import ProjectCard from '../../components/Cards/ProjectCard'
import Layout from '../../components/Layout/Layout'
import { useEffect } from 'react'

export default function Projects() {
  useEffect(() => {
    document.title = 'Lisdanay Hernandez - Projects';
  }, [])
  
  const projects = PROJECTS.map((el, i) => {
    return <ProjectCard key={i} data={el} />
  })
  
  return <Layout>
    <main className='projects-main'>
      <Header title='Projects' />
      <section>
        {projects}
      </section>
    </main>
  </Layout>
}