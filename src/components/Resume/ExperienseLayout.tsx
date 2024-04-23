import List from '../../components/List/List'
import './Resume.scss'

export default function ExperienceLayout(props: { data: any }) {
  const data = props.data;

  return <div className='resume-main'>
    <h3>
      {data.name} &nbsp;
      <span className='secondary-text'>
        at {data.location}
      </span>
    </h3>
    <p className='expSubtitle' >
      {data.timeFrame}
    </p>
    {data.list && <List listItems={data.list} class='list-resume' />}
  </div>
}