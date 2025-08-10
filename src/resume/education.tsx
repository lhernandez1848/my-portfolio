import { EDUCATION } from "../lib/data"

export default function Education() {
  const schools = EDUCATION.map((el, i) => {
    return (
      <div className="flex flex-col" key={i}>
        <p className="font-semibold text-xs text-gray-700 dark:text-gray-200">{el.timeFrame}</p>
        <p className="text-sm font-medium mb-2 text-gray-700 dark:text-gray-400">
          <span className="text-cyan-700 dark:text-cyan-600">{el.name}</span>, {el.location}
        </p>
        {el.list.map((item, j) => <p key={j} className="font-bold text-xs text-gray-700 dark:text-gray-400 mb-2">{item}</p>)}
      </div>
    )
  })
  return <div className="py-3 sm:order-none order-1">
    <div className="flex flex-col space-y-1">
      {schools}
    </div>
  </div>
}