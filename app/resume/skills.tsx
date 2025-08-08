export default function Skills(){
  const skills = resources.map((skill, i) => {
    return <li key={i}>{skill}</li>
  })
  return <div className="py-3 sm:order-none order-2">
    <div>
      <ul className="text-sm list-disc pl-3 space-y-1">
        {skills}
      </ul>
    </div>
  </div>
}

const resources = [
  "HTML, CSS, JavaScript, TypeScript",
  "Tailwind CSS",
  "React, Next",
  "Redux, Firebase",
  "C#, Java"
]