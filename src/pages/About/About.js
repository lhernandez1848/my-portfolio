import List from '../../components/List/List'
import styles from './about.module.css'
import Layout from '../../components/Layout'

export default function About() {
  return <Layout id='about' pageName={styles.about}>
    <img src='/assets/person.png' alt='Myself'  className={styles.aboutImage} />
    <article className={styles.aboutDescContainer}>
      <h3>About me</h3>
      <h4 className={styles.aboutGreeting}>Hi, I'm <span>Lisdanay Hernandez!</span></h4>
      <p className={styles.aboutPar}>I'm a Frontend developer based in Kitchener, Ontario, currently in search of an exciting role. With over 2 years of experience in designing, 
      developing and maintaining web applications, I am looking to leverage my skills to produce applications that exceed user expectations.</p>
      <p className={styles.aboutPar}>I love building and designing clean, responsive, and accessible digital products.</p>
      <p className={styles.aboutPar}>My skills:</p>
      <div className={styles.twoColList}>
        <List listItems={['JavaScript', 'HTML', 'CSS', 'React.js']} />
        <List listItems={['Redux', 'Next.js', 'Git', 'SQL']} />
      </div>
    </article>
  </Layout> 
}