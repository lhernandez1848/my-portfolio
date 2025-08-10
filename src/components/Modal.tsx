import React, { useEffect } from 'react'
import { useRef } from 'react'
import '../css/modal.scss'

type ModalProps = {
  element: React.ReactNode,
  title: string,
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

  return (
    <div className='modal-overlay bg-gray-500/75 transition-opacity z-30'>
      <div className='modal bg-white rounded-lg shadow-sm dark:bg-gray-700' ref={ref}>
        <div className="flex items-center justify-between p-4 w-full md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">{props.title}</h3>
          <button type="button" onClick={() => props.callback()} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="extralarge-modal">
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        <div className='modal-content'>
          {props.element}
        </div>      
      </div>    
    </div>
  )
}