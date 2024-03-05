
import Box from '@mui/material/Box';
import Fruit from '../components/Fruit'
import styles from '../app.module.css'
import AboutSvg from '../svg/About'
import ResumeSvg from '../svg/Resume'
import ProjectsSvg from '../svg/Projects'
import Tree from '../svg/Tree'
import FallingArrow from '../components/FallingArrow/FallingArrow'

export default function Hero() {
  return (
    <Box id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
            : 'linear-gradient(#02294F, #090E10)',
        backgroundSize: '100% 20%',
        backgroundRepeat: 'no-repeat',
      })} >
      <div className={styles.treeBg}>
        <FallingArrow number={10} />
        <Tree />
        <div className={styles.fruitContainer}>
          <Fruit style={{ top: '40%', left: 'calc(50% - 32em)' }} title={'Projects'} image={<ProjectsSvg />} section={'projects'} />
          <Fruit style={{ top: '5%', left: '50%' }} title={'Resume'} image={<ResumeSvg />} section={'resume'} />
          <Fruit style={{ top: '32%', left: 'calc(50% + 27em)' }} title={'About Me'} image={<AboutSvg />} section={'about'} />
        </div>
      </div>
    </Box>
  );
}