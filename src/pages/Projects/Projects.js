import Header from "../../components/Header";
import Layout from "../../components/Layout";
import styles from './projects.module.css';
import { projects } from "../../data/data";
import ProjectContainer from './ProjectContainer';

export default function Projects() {
  return <Layout id='projects'>
    <Header name='My projects' />
    <section className={styles.projectSection}>
      {projects.map((item, i) => {
        return (
          <ProjectContainer key={i} mainImage={item.mainImage} images={item.images} title={item.title} stack={item.stack} description={item.description} />
        )
      })}
    </section>
  </Layout>
}