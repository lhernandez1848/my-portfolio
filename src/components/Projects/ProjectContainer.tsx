import './Projects.scss'
import Gallery from '../Gallery/Gallery'
import List from '../List/List';

export default function ProjectContainer(props: { data: any }) {
  const data = props.data;

  return <div className='project-card'>
    <div className='project-images-container'>
      <Gallery images={data.images} />
    </div>
    <div className='projectDescriptionContainer'>
      <h4 className='projectTitle'>
        {data.title}
      </h4>
      <div className='projectDescription'>
        <p>{data.description}</p>
        <br />
        <h6>Stack used:</h6>
        <List listItems={data.stack} class={'list-row-simple'} />
      </div>
    </div>
  </div>
}