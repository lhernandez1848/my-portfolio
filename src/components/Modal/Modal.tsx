import React, { useEffect } from 'react'
import './Modal.scss'
import { useRef } from 'react'

export default function Modal(props: { element: React.ReactNode, callback: () => void }) {
  const ref = useRef<any>(null);
  
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        props.callback()
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref])

  return <section className='modal-overlay'>
    <div className='modal' ref={ref}>
      <button onClick={() => props.callback()} className='close-button'><img src='/assets/close.svg' alt='close' /></button>
      {props.element}
    </div>    
  </section>
}