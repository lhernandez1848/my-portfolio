import { Metadata } from 'next'
import './page.scss'
import Header from '@/components/Header/Header'
import { EDUCATION, EXPERIENCE } from '@/data'
import ResumeCard from '@/components/Cards/ResumeCard'

export const metadata: Metadata = {
  title: "Lisdanay Hernandez - Resume",
  description: "This is a page containing Lisdanay's education and experience",
};

export default function Resume() {
  const experience = EXPERIENCE.map((el, i) => {
    return <ResumeCard key={i} data={el} />
  })
  
  const education = EDUCATION.map((el, i) => {
    return <ResumeCard key={i} data={el} />
  })
   
  return <main className='resume-main'>
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
}