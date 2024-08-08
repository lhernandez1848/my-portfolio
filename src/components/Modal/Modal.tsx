'use client'

import React, { useEffect } from 'react'
import './Modal.scss'
import { useRef } from 'react'

type ModalProps = {
  element: React.ReactNode,
  callback: () => void
}

export default function Modal(props: ModalProps) {
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

  return <div className='modal-overlay'>
    <div className='modal' ref={ref}>
      <button onClick={() => props.callback()} className='close-button'><img src='/assets/close.svg' alt='close' /></button>
      <div className='modal-content'>
        {props.element}
      </div>      
    </div>    
  </div>
}