import { useEffect, useRef, useState } from 'react'
import { COLOR_MODE } from '../lib/data'
import '../css/toggle.scss'

type ToggleProps = {
  mode: string,
  theme: boolean,
  handleChange: (mode: string) => void,
  handleThemeChange: () => void
}

export default function Toggle({mode, theme, handleChange, handleThemeChange}: ToggleProps) {
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
        <div className='toggle-button-container'>
          <button onClick={handleThemeChange}>{theme ? 'light' : 'dark'}</button>
          {colorMode}
        </div> 
      }    
    </div>
  )
}