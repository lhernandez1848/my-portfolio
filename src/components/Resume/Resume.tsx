import { EDUCATION, EXPERIENCE } from '../../data'
import './Resume.scss'
import ExperienceLayout from './ExperienseLayout'
import Tabs from '../../components/Tabs/Tabs'

export default function Resume() {
  const expTabArray = EXPERIENCE.map(element => {
    return { name: element.name, tabName: element.tabName, body: <ExperienceLayout data={element} /> }
  });

  const eduTabArray = EDUCATION.map(element => {
    return { name: element.name, tabName: element.tabName, body: <ExperienceLayout data={element} /> }
  });

  const tiers = [
    {
      title: 'Experience',
      element: <Tabs tabs={expTabArray} />
    },
    {
      title: 'Education',
      element: <Tabs tabs={eduTabArray} />
    },
  ]

  return <section className='resume' >
    {tiers.map((tier, i) => (
      <div key={i}>
        <h2 className='resume-tier-title'> 
          {tier.title}
        </h2>
        {tier.element}
      </div>
    ))}
  </section>  
}