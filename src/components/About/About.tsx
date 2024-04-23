import { SKILLS, TOOLS } from '../../data'
import List from '../List/List'
import './About.scss'

export default function About() {
  return <section className='about'>
    <img src='/assets/lisdanay.png' alt='Myself'  className='aboutImage' />
    <div>
      <h2 className='about-greeting header-text-xl'>Hi, I'm <span className='secondary-text'>Lisdanay Hernandez!</span></h2>
      <p className='about-par'>
        I'm a Front-end developer based in Kitchener, Ontario, currently in search of an exciting role. With over 2 years of experience in designing, developing and maintaining web applications, I am looking to leverage my skills to produce applications that exceed user expectations.
      </p>
      <p className='about-par'>
        Back in 2014, I was freshly graduated and working in Accounting. I quickly came to the realization that this career path was not for me, and by the following year had plans to return to school, but struggled to decide what truly interested me. After all, this would be my second career and I wanted to be sure it would be something I enjoyed. So, I didn't like accounting, but there must have been something that initially attracted me to it, right? The answer was Excel; I enjoyed writing formulas and building macros, essentially programming a spreadsheet to be more user friendly. And so, in 2017 I was enrolled in college for computer programming, and never looked back.
      </p>
      <p>My skills:</p>
      <List listItems={SKILLS} class={'list-pill'}/>
      <List listItems={TOOLS} class={'list-pill'}/>
    </div>
  </section>
}