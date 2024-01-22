import styles from './modal.module.css'

export default function ModalBody({ children, header, close }) {
  return <div className={styles.modalMain}>
    <div className={styles.modalHeaderRow}>
      <h2>{header}</h2>
      <button onClick={close} className={styles.modalCloseButton}>
        <img src='/assets/close.png' alt='close' className={styles.modalCloseButtonImage} />
      </button>
    </div>
    { children }
  </div>
}