import './page.scss'
import Header from '../../components/Header/Header'
import { EDUCATION, EXPERIENCE } from '../../data'
import ResumeCard from '../../components/Cards/ResumeCard'
import Layout from '../../components/Layout/Layout'
import { useEffect } from 'react'

export default function Resume() {
  useEffect(() => {
    document.title = 'Lisdanay Hernandez - Resume';
  }, [])

  const experience = EXPERIENCE.map((el, i) => {
    return <ResumeCard key={i} data={el} />
  })
  
  const education = EDUCATION.map((el, i) => {
    return <ResumeCard key={i} data={el} />
  })
   
  return <Layout>
    <main className='resume-main'>
      <Header title='Resume' />
      <section>
        <h2>Experience</h2>
        {experience}
      </section>
      <section>
        <h2>Education</h2>
        {education}
      </section>
    </main>
  </Layout>
}