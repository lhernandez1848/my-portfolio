
import ProjectCard from "../projects/projectCard";
import { PROJECTS } from "../lib/data";
import Body from "../components/Body";
import { useEffect } from "react";

export default function Projects() {
  useEffect(() => {
      document.title = "Lisdanay Hernandez - Projects";
    }, [])
  

  const projects = PROJECTS.map((el, i) => {
    return <ProjectCard key={i} data={el} />
  })

  return (
    <Body>
      <div className="max-w-4xl flex items-center h-full flex-wrap mx-4 lg:mx-auto my-32 lg:my-20">
        <h1 className="mb-2 lg:mt-10 text-slate-800 text-xl font-semibold dark:text-gray-200">Projects</h1>
        {projects}
      </div>
    </Body>
  )
}