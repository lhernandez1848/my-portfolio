import { useState } from "react";
import Gallery from "../components/Gallery";
import Modal from "../components/Modal";

interface ProjectContentProps {
  data: 
  {
    id: number,
    title: string,
    role: string,
    stack: Array<string>,
    description: Array<string>,
    mainImage: string,
    images: Array<string>,
    link?: string,
    linkTitle?: string
  }
}

export default function ProjectCard({ data }: ProjectContentProps ) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && 
        <Modal element={<Gallery images={data.images} />} title={data.title} callback={() => setIsOpen(false)} />
      }
      <div className="relative flex flex-col md:flex-row w-full my-6 shadow-2xl bg-white dark:bg-black opacity-75 border border-slate-200 dark:border-slate-900 rounded-lg w-96">
        <div className="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden" >
          <img onClick={() => setIsOpen(true)}
            src={data.mainImage}
            alt="card-image"
            className="h-full w-full cursor-pointer rounded-md md:rounded-lg object-cover"
          />
        </div>
        <div className="p-6">
          <h4 className="mb-2 text-gray-900 text-xl font-semibold dark:text-gray-200">
            {data.title}
          </h4>
          <p className="mb-8 text-gray-900 leading-normal font-light dark:text-gray-200">{data.description}</p>
          <div className="flex flex-wrap gap-2">
          {data.stack.map((item, y) => (
            <div key={y} className="mb-4 rounded-full bg-cyan-600 py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-auto text-center dark:bg-cyan-800">{item}</div>
          ))}
          </div>
          {data.link &&
            <a href={data.link} className="text-cyan-900 hover:text-cyan-600 dark:text-cyan-600 dark:hover:text-cyan-400">{data.linkTitle}</a>
          }
        </div>
      </div>
    </>
  )
}