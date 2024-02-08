import Header from "../../components/Header"
import Layout from "../../components/Layout"
import styles from './projects.module.css'
import { projects } from "../../data/data"
import ProjectContainer from './ProjectContainer'
import { useState } from "react"
import Sidebar from '../../components/Sidebar/Sidebar'

export default function Projects() {
  const [sidebar, setIsOpen] = useState({ isOpen: false, data: null });

  return <>
    {sidebar.isOpen === true && <Sidebar data={sidebar.data} callback={() => setIsOpen(false)} />}
    <Layout id='projects'>
      <Header name='My projects' />
      <section className={styles.projectSection}>
        {projects.map((item, i) => {
          return (
            <ProjectContainer key={i} data={item} sidebarCallback={(bool, description) => setIsOpen({ isOpen: bool, data: description })} />
          )
        })}
      </section>
    </Layout>
  </>
}