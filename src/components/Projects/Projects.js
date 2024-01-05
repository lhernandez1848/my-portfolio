import Header from "@/components/Header";
import Layout from "@/components/Layout";
import insights from '../../../public/insights-home.png';
import insightsHomeFull from '../../../public/insights-home-full.png';
import insightsAffordabilityFull from '../../../public/insights-affordability.png';
import insightsScore from '../../../public/insights-score.png';
import avaanz from '../../../public/avaanz.png';
import ProjectContainer from "./ProjectContainer";

export default function Projects() {
  return <Layout id='projects'>
    <Header name='My projects' />
    <ProjectContainer mainImage={insights.src} images={[insightsHomeFull.src, insightsAffordabilityFull.src, insightsScore.src]} title={'Insights'} stack={['React', 'Redux', 'Auth0']}
      description={['Insights is a data-driven analytics and credit scoring engine that provides predictive insights into customer’s financial standing. From the Home page, a user can upload a bank statement, and, once processed, can view it’s Analytics, Credit Scoring, Affordability, etc.']} />
    <ProjectContainer mainImage={insights.src} images={[insights.src, avaanz.src]} title={'Chatbot Widget'} stack={['React', 'Webflow', 'AWS']}
      description={[
        'This Chatbot widget was proposed as a way to reduce the amount of customer support emails the company received. I created the UI with React, using an API call to communicate with the backend.',
        'The app in hosted in an S3 bucket and mounted unto the website through a combination of scripts and webpage elements.']} />
    <ProjectContainer mainImage={avaanz.src} images={[insights.src, avaanz.src]} title={'Avaanz Website'} stack={['Squarespace', 'Javascript']}
      description={[
        'Avaanz Ltd. is a human environment consulting firm specializing in socio-economics, environmental services, facilitation and engagement to advance community well-being.', 
        'This website was my first ever project at Communitech, and as a recent graduate. As a team, we designed and implemented this site from the ground up based on the client’s needs.']} />
  </Layout>
}