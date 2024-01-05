import styles from './modal.module.css'

export default function ModalBody({ children, header, close }) {
  return <div className={styles.modalMain}>
    <div>
      <h2>{header}</h2>
      <button onClick={close}>close</button>
    </div>
    <section>
      { children }
    </section>
  </div>
}