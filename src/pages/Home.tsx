import { useState } from 'react'
import './Home.scss'
import FallingArrow from '../components/FallingArrow/FallingArrow'
import Tree from '../svg/Tree'
import { FRUITS } from '../data'
import Fruit from '../components/Fruit/Fruit'
import Modal from '../components/Modal/Modal'
import Toggle from '../components/Toggle/Toggle'
import Footer from '../components/Footer/Footer'

export default function Home() {  
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const localPref = localStorage.getItem("isDark");
  const [isDark, setIsDark] = useState(localPref === 'true' ? true : preference);
  const [isOpen, setIsOpen] = useState({ state: false, index: 0 });
  
  return (
    <main className='main' data-theme={isDark ? "dark" : "light"}>
      {isOpen.state && 
        <Modal element={FRUITS[isOpen.index].element} callback={() => setIsOpen({ state: false, index: 0 })} />
      }
      <Toggle isChecked={isDark} handleChange={() => { localStorage.setItem('isDark', (!isDark).toString()); setIsDark(!isDark)}} />
      <div className='treeBg'>
        <FallingArrow number={10} />
        <Tree />
        <div className='fruitContainer'>
          {FRUITS.map((el, i) => {
            return <Fruit key={i} style={el.style} title={el.title} image={el.image} index={i} 
            callback={(state: boolean, index: number) => setIsOpen({ state: state, index: index })} />
          })}
        </div>
      </div>
      <Footer />
    </main>
  )
}