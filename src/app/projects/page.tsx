import { Metadata } from 'next';
import './page.scss'
import Header from '@/components/Header/Header';
import { PROJECTS } from '@/data';
import ProjectCard from '@/components/Cards/ProjectCard';

export const metadata: Metadata = {
  title: "Lisdanay Hernandez - Projects",
  description: "This is a page containing Lisdanay's featured projects",
};

export default function Projects() { 
  const projects = PROJECTS.map((el, i) => {
    return <ProjectCard key={i} data={el} />
  })
  
  return <main className='projects-main'>
    <Header title='Projects' />
    <section>
      {projects}
    </section>
  </main>
}