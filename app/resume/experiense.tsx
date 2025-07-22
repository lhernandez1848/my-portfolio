import { EXPERIENCE } from "~/lib/data"

export default function Experience() {
  const experience = EXPERIENCE.map((el, i) => {
    return (
      <div className="flex flex-col" key={i}>
        <p className="text-sm font-bold dark:text-gray-200">{el.name} | {el.location}</p>
        <p className="font-semibold text-xs dark:text-gray-200">{el.timeFrame}</p>
        <p className="font-semibold text-sm dark:text-gray-200 mt-2 mb-1">Key Responsibilities</p>
        <ul className="text-sm list-disc pl-4 space-y-1">
          {el.list.map((item, j) => {
            return <li key={j}>{item}</li>
          })}
        </ul>
      </div>
    )
  })

  return <div className="flex flex-col">
    <div className="py-3">
      <div className="flex flex-col gap-4">
        {experience}
      </div>
    </div>
  </div>
}