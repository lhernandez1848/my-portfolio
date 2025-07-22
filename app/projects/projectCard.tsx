import { useState } from "react";
import Gallery from "~/components/Gallery";
import Modal from "~/components/Modal";

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

export default function ProjectCard({ data }: ProjectContentProps ) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && 
        <Modal element={<Gallery images={data.images} />} title={data.title} callback={() => setIsOpen(false)} />
      }
      <div className="relative flex flex-col md:flex-row w-full my-6 bg-white dark:bg-gray-500 shadow-sm border border-slate-200 rounded-lg w-96">
        <div className="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden" >
          <img onClick={() => setIsOpen(true)}
            src={data.mainImage}
            alt="card-image"
            className="h-full w-full rounded-md md:rounded-lg object-cover"
          />
        </div>
        <div className="p-6">
          <h4 className="mb-2 text-slate-800 text-xl font-semibold">
            {data.title}
          </h4>
          <p className="mb-8 text-slate-600 leading-normal font-light">{data.description}</p>
          <div className="flex gap-2">
          {data.stack.map((item, y) => (
            <div key={y} className="mb-4 rounded-full bg-cyan-600 py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-auto text-center">{item}</div>
          ))}
          </div>
          {/* <div>
            <a href="#" className="text-slate-800 font-semibold text-sm hover:underline flex items-center">
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div> */}
        </div>
      </div>
    </>
  )
}