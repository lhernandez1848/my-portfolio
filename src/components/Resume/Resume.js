import ExperienceLayout from './ExperienseLayout';
import Header from '../Header';
import Tabs from '../Tabs/Tabs';
import { experience } from '../../data/data';
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