import Header from '../Header'
import List from '../List/List'
import styles from '../components.module.css'

export default function About() {
  return <article className={styles.about}>
    <Header name='About me' style={{ padding: '0 0 1em 0' }} />
    <p className={styles.aboutPar}>I'm a Frontend developer based in Kitchener, Ontario, currently in search of an exciting role. With over 2 years of experience in designing, 
    developing and maintaining web applications, I am looking to leverage my skills to produce applications that exceed user expectations.</p>
    <p className={styles.aboutPar}>I love building and designing clean, responsive, and accessible digital products.</p>
    <p className={styles.aboutPar}>My stack:</p>
    <div className={styles.twoColList}>
      <List listItems={['JavaScript', 'HTML', 'CSS', 'React.js']} class={styles.expDescriptionList} />
      <List listItems={['Redux', 'Next.js', 'Git', 'SQL']} class={styles.expDescriptionList} />
    </div>
  </article>
}