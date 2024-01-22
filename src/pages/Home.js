import Fruit from '../components/Fruit'
import styles from '../app.module.css'
import AboutSvg from '../svg/About'
import ResumeSvg from '../svg/Resume'
import ProjectsSvg from '../svg/Projects'
import Tree from '../svg/Tree'
import FallingArrow from '../components/FallingArrow/FallingArrow'
import About from '../components/About/About'
import Modal from 'react-modal'
import { useState } from 'react'
import ModalBody from '../components/Modal/ModalBody'
import Resume from '../components/Resume/Resume'

export default function Home() {
  const [aboutModalIsOpen, setAboutModalIsOpen] = useState(false);
  const [resumeModalIsOpen, setResumeModalIsOpen] = useState(false);

  const customStyles = {
    overlay: {
      background: "rgba(60, 67, 80, 0.75)"
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      maxWidth: '90%',
      minWidth: 'auto',
      backgroundColor: '#171E2E',
      border: 'none',
      borderRadius: '10px',
      overflow: 'hidden'
    },
  };

  function afterOpenModal() { }

  function closeAboutModal() { setAboutModalIsOpen(false) }
  function closeResumeModal() { setResumeModalIsOpen(false) }

  return <main className={styles.main}>
    <Modal isOpen={aboutModalIsOpen} style={customStyles} onAfterOpen={afterOpenModal} onRequestClose={closeAboutModal}>
      <ModalBody close={() => closeAboutModal()}>
        <About />
      </ModalBody>
    </Modal>
    <Modal isOpen={resumeModalIsOpen} style={customStyles} onAfterOpen={afterOpenModal} onRequestClose={closeResumeModal}>
      <ModalBody close={() => closeResumeModal()}>
        <Resume />
      </ModalBody>
    </Modal>
    <div className={styles.treeBg}>
      <FallingArrow number={10} />
      <Tree />
      <Fruit style={{ top: '40%', left: '25%' }} title={'Projects'} image={<ProjectsSvg />} link={'/projects'} />
      <Fruit style={{ top: '5%', left: '50%' }} title={'Resume'} image={<ResumeSvg />} modalCallback={() => setResumeModalIsOpen(true)} />
      <Fruit style={{ top: '30%', left: '70%' }} title={'About Me'} image={<AboutSvg />} modalCallback={() => setAboutModalIsOpen(true)} />
    </div>
  </main>
}