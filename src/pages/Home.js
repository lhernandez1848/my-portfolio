import Fruit from '../components/Fruit'
import styles from '../app.module.css'
import AboutSvg from '../svg/About'
import ResumeSvg from '../svg/Resume'
import ProjectsSvg from '../svg/Projects'
import Tree from '../svg/Tree'
import FallingArrow from '../components/FallingArrow/FallingArrow'

export default function Home() {
  return <main className={styles.main}>
    <div className={styles.treeBg}>
      <FallingArrow number={10} />
      <Tree />
      <div className={styles.fruitContainer}>
        <Fruit style={{ top: '40%', left: '25%' }} title={'Projects'} image={<ProjectsSvg />} link={'/projects'} />
        <Fruit style={{ top: '5%', left: '50%' }} title={'Resume'} image={<ResumeSvg />} link={'/resume'} />
        <Fruit style={{ top: '30%', left: '70%' }} title={'About Me'} image={<AboutSvg />} link={'/about'} />
      </div>      
    </div>
  </main>
}