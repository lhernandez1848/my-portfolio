import ExperienceLayout from './ExperienseLayout';
import Header from '../../components/Header';
import Tabs from '../../components/Tabs/Tabs';
import { experience } from '../../data/data'
import styles from '../components.module.css'

export default function Resume() {
  const tabArray = [];
  experience.forEach(element => {
    tabArray.push({ name: element.name, body: <ExperienceLayout data={element} /> })
  });

  return <article className={styles.resume}>
    <Header name='Experience' style={{ padding: '0 0 1em 0' }} />
    <Tabs tabs={tabArray} />
  </article>
}