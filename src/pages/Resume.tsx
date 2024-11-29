import { useEffect } from "react"
import Layout from "../components/Layout";
import PageCard from "../components/Cards/PageCard";
import H3 from "../components/Text/H3";
import { EDUCATION, EXPERIENCE } from "../lib/data";
import H2 from "../components/Text/H2";

const resumeContent = ({ name, location, timeFrame, list }: {
  name: string,
  location: string,
  timeFrame: string,
  list: Array<string>
}) => <>
  <div className="resume-title">
    <h4 className="text-coloured text-bold">{timeFrame}</h4>
    <p>{name}</p>
    <p>{location}</p>
  </div>
  <div className="resume-description">
    {list.map((e, i) => {
      return <p key={i}>{e}</p>
    })}
  </div>
</>

export default function Resume() {
  useEffect(() => {
    document.title = "Lisdanay Hernandez - Resume";
  }, [])

  const experience = EXPERIENCE.map((el, i) => {
    return <PageCard key={i}>
      {resumeContent(el)}
    </PageCard>
  })
  
  const education = EDUCATION.map((el, i) => {
    return <PageCard key={i}>
      {resumeContent(el)}
    </PageCard>
  })
   
  return <Layout>
    <div className="lh-page resume">
      <H2 title="Resume" />
      <section>
        <H3 title="Experience" />
        <div className="lh-page-card-container">{experience}</div>
      </section>
      <section>
        <H3 title="Education" />
        <div className="lh-page-card-container">{education}</div>
      </section>
    </div>
  </Layout>
}