import { useState } from "react"
import { Link } from "react-router-dom"
import Modal from "./Modal";
import Gallery from "./Gallery";
import List from "./List";

interface ProjectContentProps {
  data: 
  {
    title: string,
    role: string,
    stack: Array<string>,
    shortDescription: string,
    description: Array<string>,
    mainImage: string,
    images: Array<string>,
    link?: string,
    linkTitle?: string
  }
}

export default function ProjectContent({ data }: ProjectContentProps ) {
  const [isOpen, setIsOpen] = useState(false);

  return <>  
    {isOpen && 
      <Modal element={<Gallery images={data.images} />} callback={() => setIsOpen(false)} />
    }
    <div className="project-description">
      <div className="project-title-container">
        <h4 className="text-coloured">{data.title}</h4>
        <h6>{data.role}</h6>
      </div>
      {data.description.map((el, i) => {
        return <p key={i}>{el}</p>
      })}
      <br />
      <p className="text-medium-bold">Stack Used:</p>
      <List listItems={data.stack} />
      {data.link && <Link to={data.link} className="project-link" target="_blank" rel="noreferrer noopener">{data.linkTitle}</Link>
      }
    </div>
    <div className="project-image-container" onClick={() => setIsOpen(true)}>
      <img src={data.mainImage} />
    </div> 
  </>
}