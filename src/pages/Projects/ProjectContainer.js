import { useState } from 'react';
import styles from './projects.module.css'
import Modal from 'react-modal'
import ModalBody from '../../components/Modal/ModalBody';
import Gallery from '../../components/Gallery/Gallery';

export default function ProjectContainer(props) {
  const [modalIsOpen, setIsOpen] = useState(false);
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

  function closeModal() { setIsOpen(false) }

  return <div className={styles.projectCard}>
    {/* <div className={styles.projectImageContainer} onClick={() => setIsOpen(true) }>
      <img className={styles.projectImage} src={props.mainImage} alt={props.title} />
    </div> */}
    <img className={styles.projectImage} src={props.mainImage} alt={props.title} />
    <article className={styles.projectDescriptionContainer}>
      <h3 className={styles.projectTitle}>{props.title}</h3>
      <div className={styles.projectDescription}>
        {props.description.map((e, i) => <p key={i}>{e}</p>)}
      </div>
      {props.stack &&
        <ul className={styles.projectStack}>
          {props.stack.map((e, i) => <li key={i}>{e}</li>)}
        </ul>
      }      
    </article>
    <Modal isOpen={modalIsOpen} style={customStyles} onAfterOpen={afterOpenModal} onRequestClose={closeModal}>
      <ModalBody close={() => closeModal()}>
        <Gallery images={props.images} />
      </ModalBody>
    </Modal>
  </div>
}