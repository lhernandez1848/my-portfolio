'use client'

import { useState } from 'react'
import Modal from '@/components/Modal/Modal'
import Gallery from '@/components/Gallery/Gallery'

interface CardProps {
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

export default function ProjectCard({ data }: CardProps ) {
  const [isOpen, setIsOpen] = useState(false);

  return <>  
    {isOpen && 
      <Modal element={<Gallery images={data.images} />} callback={() => setIsOpen(false)} />
    }
    <article className='card_lh project-card'>
      <div className='project-description'>
        <div className='project-title-container'>
          <h4 className='text-coloured'>{data.title}</h4>
          <h6>{data.role}</h6>
        </div>
        {data.description.map((el, i) => {
          return <p key={i}>{el}</p>
        })}
        <br />
        <p className='text-medium-bold'>Stack Used:</p>
        <ul>
          {data.stack.map((el, i) => {
            return <li key={i}>{el}</li>
          })}
        </ul>
        {data.link &&
          <>
            <br />
            <a href={data.link} className='project-link'>{data.linkTitle}</a>
          </>
        }
      </div>
      <div className='project-image-container' onClick={() => setIsOpen(true)}>
        <img src={data.mainImage} />
      </div>
    </article>  
  </>
}