'use client'

import { useState } from 'react';
import styles from '../components.module.css'
import Modal from 'react-modal'

export default function ProjectContainer(props) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };  

  // function openModal() {  setIsOpen(true) }

  function afterOpenModal() { }

  function closeModal() { setIsOpen(false) }

  return <section className={styles.projectMain}>
    <div className={styles.projectImageContainer} onClick={() => setIsOpen(true) }>
      <img className={styles.projectImage} src={props.image} />
    </div>
    <article className={styles.projectDescriptionContainer}>
      <h4 className={styles.projectTitle}>{props.title}</h4>
      <div className={styles.projectDescription}>
        {props.description.map((e, i) => <p key={i}>{e}</p>)}
      </div>
      {props.stack &&
        <ul className={styles.projectStack}>
          {props.stack.map((e, i) => <li key={i}>{e}</li>)}
        </ul>
      }      
    </article>
    <Modal isOpen={modalIsOpen} style={customStyles} onAfterOpen={afterOpenModal} onRequestClose={closeModal} contentLabel="Example Modal">
      <p>Modal is open</p>
    </Modal>
  </section>
}