import Fruit from '../components/Fruit'
import styles from '../app.module.css'
import AboutSvg from '../svg/About'
import ResumeSvg from '../svg/Resume'
import ProjectsSvg from '../svg/Projects'
import Tree from '../svg/Tree'
import FallingArrow from '../components/FallingArrow/FallingArrow'
import Footer from '../components/Footer/Footer'

export default function Home() {
  return <main className={styles.main}>
    <div className={styles.treeBg}>
      <FallingArrow number={10} />
      <Tree />
      <div className={styles.fruitContainer}>
        <Fruit style={{ top: '40%', left: 'calc(50% - 25em)' }} title={'Projects'} image={<ProjectsSvg />} link={'/projects'} />
        <Fruit style={{ top: '5%', left: '50%' }} title={'Resume'} image={<ResumeSvg />} link={'/resume'} />
        <Fruit style={{ top: '30%', left: 'calc(50% + 20em)' }} title={'About Me'} image={<AboutSvg />} link={'/about'} />
      </div>
    </div>
    <Footer style={{ position: 'absolute', bottom: '0' }} />
  </main>
}