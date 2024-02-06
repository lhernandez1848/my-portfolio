import { education, experience } from '../../data/data'
import styles from './resume.module.css'
import Layout from '../../components/Layout'
import ResumeSection from './ResumeSection'

export default function Resume() {
  const experienceSection = experience.map(element => {
    return <ResumeSection data={element} />
  });
  
  const educationSection = education.map(element => {
    return <ResumeSection data={element} />
  });

  return <Layout id='resume' pageName={styles.resume}>
    <h3>Experience</h3>
    {experienceSection}
    <h3>Education</h3>
    {educationSection}
  </Layout>  
}