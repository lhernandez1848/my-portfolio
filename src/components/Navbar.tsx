import '../css/navbar.scss'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import H3 from './Text/H3';
import P from './Text/P';
import List from './List';
import CustomLink from './Link';
import { ABOUT } from '../lib/data';

const navLinks = [
  <NavLink to={'/'} className={({ isActive }) => isActive ? 'navbar-link text-weight-light active-link' : 'navbar-link text-weight-light'}>ABOUT ME</NavLink>,
  <NavLink to={'/resume'} className={({ isActive }) => isActive ? 'navbar-link text-weight-light active-link' : 'navbar-link text-weight-light'}>RESUME</NavLink>,
  <NavLink to={'/projects'} className={({ isActive }) => isActive ? 'navbar-link text-weight-light active-link' : 'navbar-link text-weight-light'}>PROJECTS</NavLink>
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="navbar">
      <CustomLink link='/' type='navbar-logo-container'>
        <span className='dec-square'></span>
        <H3 title={ABOUT.name} type='heading-full' />        
        <H3 title={ABOUT.initials} type='heading-initials' />
        <P>/</P>
        <P type='text-weight-light text-spacing-min'>{ABOUT.title}</P>
      </CustomLink>
      <List listItems={navLinks} type='navbar-menu' />
      <div className='navbar-hidden-menu'>
        <img src={isOpen 
          ? 'https://img.icons8.com/?size=100&id=83149&format=png&color=000000'
          : 'https://img.icons8.com/?size=100&id=59832&format=png&color=000000'} alt={isOpen ? 'close' : 'open'} onClick={toggleMenu} />
        {isOpen &&
          <List listItems={navLinks} type={'navbar-hidden-menu-items'} />
        }
      </div>
    </nav>
  );
}
