import './modal.css'

export default function ModalBody({ children, header, close }) {
  return <div className='modalMain'>
    <div className='modalHeaderRow'>
      <h2>{header}</h2>
      <button onClick={close} className='modalCloseButton'>
        <img src='/assets/close.png' alt='close' className='modalCloseButtonImage' />
      </button>
    </div>
    { children }
  </div>
}