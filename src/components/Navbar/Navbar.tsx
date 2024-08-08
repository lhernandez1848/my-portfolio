'use client'

import './Navbar.scss'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="navbar">
      <Link to={'/'} className='navbar-logo-container'>
        <span className='dec-square'></span>
        <h2>Lisdanay Hernandez</h2>
        <p>/</p>
        <p className='text-weight-light text-spacing-min'>FRONT-END DEVELOPER</p>
      </Link>
      <ul className='navbar-menu'>
        <li><NavLink to={'/'} className={({ isActive }) => isActive ? 'navbar-link text-weight-light active-link' : 'navbar-link text-weight-light'}>ABOUT ME</NavLink></li>
        <li><NavLink to={'/resume'} className={({ isActive }) => isActive ? 'navbar-link text-weight-light active-link' : 'navbar-link text-weight-light'}>RESUME</NavLink></li>
        <li><NavLink to={'/projects'} className={({ isActive }) => isActive ? 'navbar-link text-weight-light active-link' : 'navbar-link text-weight-light'}>PROJECTS</NavLink></li>
      </ul>      
      <div className='navbar-hidden-menu'>
        <img src={isOpen 
          ? 'https://img.icons8.com/?size=100&id=83149&format=png&color=000000'
          : 'https://img.icons8.com/?size=100&id=59832&format=png&color=000000'} onClick={toggleMenu} />
        {isOpen &&
          <ul  className='navbar-hidden-menu-items'>
            <li><NavLink to={'/'} className={({ isActive }) => isActive ? 'navbar-link text-weight-light active-link' : 'navbar-link text-weight-light'}>ABOUT ME</NavLink></li>
            <li><NavLink to={'/resume'} className={({ isActive }) => isActive ? 'navbar-link text-weight-light active-link' : 'navbar-link text-weight-light'}>RESUME</NavLink></li>
            <li><NavLink to={'/projects'} className={({ isActive }) => isActive ? 'navbar-link text-weight-light active-link' : 'navbar-link text-weight-light'}>PROJECTS</NavLink></li>
          </ul>
        }
      </div>
    </nav>
  );
}
