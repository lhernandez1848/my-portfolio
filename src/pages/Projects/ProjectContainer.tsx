import { useState } from 'react';
import Gallery from '../../components/Gallery/Gallery';
import List from '../../components/List/List';
import './Projects.scss'
import Modal from '../../components/Modal/Modal';
import { Link } from 'react-router-dom';

type ProjectProps = {
  data: any
}

export default function ProjectContainer(props: ProjectProps) {
  const data = props.data;
  const [isOpen, setIsOpen] = useState(false);

  return <div className='project-card'>
    {isOpen && 
      <Modal element={<Gallery images={data.images} />} callback={() => setIsOpen(false)} />
    }
    <div className='project-image-container'>
      <img src={data.mainImage} alt='' />
      <div className='image-overlay' onClick={() => setIsOpen(true)}></div>
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
        <Link to={data.link} target='_blank' rel='noreferrer noopener'>{data.linkTitle}</Link>
      </div>
    </div>
  </div>
}