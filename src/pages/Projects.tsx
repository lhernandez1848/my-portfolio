import { useEffect } from "react"
import Layout from "../components/Layout";
import PageCard from "../components/Cards/PageCard";
import H2 from "../components/Text/H2";
import { PROJECTS } from "../lib/data";
import ProjectContent from "../components/ProjectContent";

export default function Projects() {
  useEffect(() => {
    document.title = "Lisdanay Hernandez - Projects";
  }, [])
  
  const projects = PROJECTS.map((el, i) => {
    return <PageCard key={i}>
      <ProjectContent data={el} />
    </PageCard>
  })
  
  return <Layout>
    <div className="lh-page projects">
      <H2 title="Projects" />
      <section>
        <div className="lh-page-card-container">{projects}</div>
      </section>
    </div>
  </Layout>
}