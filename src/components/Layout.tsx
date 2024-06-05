import { ReactNode, useState } from 'react'
import './Layout.scss'
import Toggle from '../components/Toggle/Toggle'
import Menu from './Menu/Menu'

type LayoutProps = {
  children: ReactNode,
  isHome?: boolean
}

export default function Layout(props: LayoutProps) {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const localPref = localStorage.getItem("isDark");
  const [isDark, setIsDark] = useState(localPref === 'true' ? true : preference)

  return <main  className='main' data-theme={isDark ? "dark" : "light"}>
    <nav className='navbar'>
      {!props.isHome &&
        <Menu />
      }
    </nav>    
    <Toggle isChecked={isDark} handleChange={() => { localStorage.setItem('isDark', (!isDark).toString()); setIsDark(!isDark)}} />
    {props.children}
  </main>
}