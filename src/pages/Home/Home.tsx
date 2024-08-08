import { useState } from 'react'
import './Home.scss'
import FallingArrow from '../../components/FallingArrow/FallingArrow'
import Tree from '../../svg/Tree'
import { FRUITS } from '../../data'
import Fruit from '../../components/Fruit/Fruit'
import Modal from '../../components/Modal/Modal'
import Footer from '../../components/Footer/Footer'
import Layout from '../../components/Layout/Layout'

export default function Home() {
  const [isOpen, setIsOpen] = useState({ state: false, index: 0 });
  
  return (
    <Layout isHome={true} >
      {isOpen.state && 
        <Modal element={FRUITS[isOpen.index].element} callback={() => setIsOpen({ state: false, index: 0 })} />
      }
      <div className='treeBg'>
        <FallingArrow number={10} />
        <Tree />
        <div className='fruitContainer'>
          {FRUITS.map((el, i) => {
            return <Fruit key={i} style={el.style} title={el.title} image={el.image} index={i} link={el.link}
            callback={(state: boolean, index: number) => setIsOpen({ state: state, index: index })} />
          })}
        </div>
      </div>
      <Footer isHome={true} />
    </Layout>
  )
}