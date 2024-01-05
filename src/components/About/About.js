import Header from '@/components/Header'
import List from '../List/List'
import styles from '../components.module.css'
import Layout from '../Layout'

export default function About() {
  return <Layout id={'about'}>
    <Header name='About me' />
    <p className={styles.aboutPar}>I'm a Front-End developer based in Kitchener, Ontario, currently in search of an exciting role. With over 2 years of experience in designing, 
    developing and maintaining web applications, I am looking to leverage my skills to produce applications that exceed user expectations.</p>
    <br />
    <p className={styles.aboutPar}>I love building (and sometimes designing) clean, responsive, and accessible digital products.</p>
    <br />
    <p className={styles.aboutPar}>My stack:</p>
    <div className={styles.twoColList}>
      <List listItems={['JavaScript', 'HTML', 'CSS', 'React.js']} class={styles.expDescriptionList} />
      <List listItems={['Redux', 'Next.js', 'Git', 'SQL']} class={styles.expDescriptionList} />
    </div>
  </Layout>
}