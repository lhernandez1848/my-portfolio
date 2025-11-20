import { useParams } from "react-router"
import Body from "../components/Body"
import { PROJECTS } from "../lib/data"
import { filterClassnames } from "../lib/utils"

export default function ProjectDescription() {
  const { slug } = useParams()
  const data = PROJECTS.find(project => project.id.toString() === slug)

  return (
    <Body>
      <main className="max-w-4xl flex items-center min-h-full grow flex-wrap mx-4 lg:mx-auto my-5 lg:my-10">
        <header className="mb-4 lg:mt-10 not-format">
          <h1 className="text-3xl font-extrabold leading-tight text-gray-900 lg:text-4xl dark:text-gray-200">{data?.title}</h1>
          <p className="text-base text-gray-500 dark:text-gray-400">Role: {data?.role}</p>
          <p className="text-base text-gray-500 dark:text-gray-400">Last worked on: {data?.lastWorkedOn}</p>
        </header>
        <figure>
          <img src={data?.mainImage} alt={data?.mainImageAlt} className="w-full sm:w-3/5 rounded-lg" />
          <figcaption className="text-sm text-gray-500 dark:text-gray-400 mt-2 mb-8">{data?.mainImageCaption}</figcaption>
        </figure>
        {data && data.descriptionLong && data.descriptionLong.map((paragraph, index) => 
          <p key={index} className={filterClassnames(index === 0 ? "lead text-2xl" : "text-xl", "mb-8 text-slate-700 dark:font-light dark:text-gray-200")}>{paragraph}</p>
        )}
      </main>
    </Body>    
  )
}