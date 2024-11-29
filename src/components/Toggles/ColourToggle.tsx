import { useEffect, useRef, useState } from 'react'
import { COLOR_MODE } from '../../lib/data'
import '../../css/toggle.scss'

type ColourToggleProps = {
  mode: string,
  handleChange: (mode: string) => void
}

export default function ColourToggle({mode, handleChange}: ColourToggleProps) {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef<any>(null);

  const colorMode = COLOR_MODE.map((el, i) => {
    return <button key={i} onClick={() => handleChange(el)} data-mode={el} title={el}
      className={`toggle-button ${mode === el ? 'active-color-mode' : ''}`}></button>
  })

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref])

  return (
    <div className='toggle-container' ref={ref}>
      <div className='toggle-image-container' onClick={() => setIsOpen(!isOpen)}>
        <img src='/assets/brush.png' alt='edit theme' />
      </div>
      {isOpen &&
        <div className='toggle-button-container'>{colorMode}</div> 
      }    
    </div>
  )
}