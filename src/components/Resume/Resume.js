import ExperienceLayout from '@/components/Resume/ExperienseLayout';
import Header from '@/components/Header';
import Tabs from '@/components/Tabs/Tabs';
import { experience } from '@/data/data';
import styles from '../components.module.css';
import Layout from '../Layout';

export default function Resume() {
  const tabArray = [];
  experience.forEach(element => {
    tabArray.push({ name: element.name, body: <ExperienceLayout data={element} /> })
  });

  return <Layout id={'resume'}>
    <Header name='Experience' />
    <Tabs tabs={tabArray} />
  </Layout>
}