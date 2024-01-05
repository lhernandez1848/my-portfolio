import Fruit from '@/components/Fruit'
import bg from '../../public/tree.png'
import styles from './page.module.css'
import AboutSvg from '@/svg/About'
import ResumeSvg from '@/svg/Resume'
import ProjectsSvg from '@/svg/Projects'
import Projects from '@/components/Projects/Projects'
import About from '@/components/About/About'
import Resume from '@/components/Resume/Resume'

export default function App() {
  return (
    <main className={styles.main}>
      <div className={styles.treeBg} style={{ backgroundImage: `url(${bg.src}), radial-gradient(ellipse at top, rgba(1,65,136,1) 0%, rgb(0, 14, 31) 50%, rgba(0, 2, 5, 1) 70%)`}}>
        <Fruit style={{ top: '40%', left: '25%' }} title={'Projects'} image={<ProjectsSvg />} link={'#projects'} />
        <Fruit style={{ top: '5%', left: '50%' }} title={'Resume'} image={<ResumeSvg />} link={'#resume'} />
        <Fruit style={{ top: '30%', left: '70%' }} title={'About Me'} image={<AboutSvg />} link={'#about'} />
      </div>
      <About />
      <Resume />
      <Projects modalCallback={() => setIsOpen(true)} />
    </main>
  )
}
