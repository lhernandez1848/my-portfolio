interface CardProps {
  data: 
  {
    name: string,
    tabName: string,
    location: string,
    startYear: string,
    timeFrame: string,
    list: Array<string>
  }
}

export default function ProjectCard({ data }: CardProps ) {
  return <article className='card_lh resume-card'>
    <div className='resume-title'>
      <h4 className='text-coloured text-bold'>{data.timeFrame}</h4>
      <p>{data.name}</p>
      <p>{data.location}</p>
    </div>
    <div className='resume-description'>
      {data.list.map((el, i) => {
        return <p key={i}>{el}</p>
      })}
    </div>
  </article>
}