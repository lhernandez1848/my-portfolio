
import ProjectCard from "~/projects/projectCard";
import type { Route } from "./+types/home";
import { PROJECTS } from "~/lib/data";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Lisdanay Hernandez - Projects" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Projects() {
  const projects = PROJECTS.map((el, i) => {
    return <ProjectCard key={i} data={el} />
  })

  return (
    <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-4 lg:mx-auto my-32">
      <h1 className="mb-2 text-slate-800 text-xl font-semibold dark:text-gray-200">Projects</h1>
      {projects}
    </div>    
  )
}