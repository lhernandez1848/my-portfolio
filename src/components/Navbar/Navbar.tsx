'use client'

import './Navbar.scss'
import Link from 'next/link' 
import { usePathname } from 'next/navigation'
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="navbar">
      <Link href={'/'} className='navbar-logo-container'>
        <span className='dec-square'></span>
        <h2>Lisdanay Hernandez</h2>
        <p>/</p>
        <p className='text-weight-light text-spacing-min'>FRONT-END DEVELOPER</p>
      </Link>
      <ul className='navbar-menu'>
        <li><Link href={'/'} className={`navbar-link text-weight-light ${pathname === '/' ? 'active-link' : ''}`}>ABOUT ME</Link></li>
        <li><Link href={'/resume'} className={`navbar-link text-weight-light ${pathname === '/resume' ? 'active-link' : ''}`}>RESUME</Link></li>
        <li><Link href={'/projects'} className={`navbar-link text-weight-light ${pathname === '/projects' ? 'active-link' : ''}`}>PROJECTS</Link></li>
      </ul>      
      <div className='navbar-hidden-menu'>
        <img src={isOpen 
          ? 'https://img.icons8.com/?size=100&id=83149&format=png&color=000000'
          : 'https://img.icons8.com/?size=100&id=59832&format=png&color=000000'} onClick={toggleMenu} />
        {isOpen &&
          <ul  className='navbar-hidden-menu-items'>
            <li><Link href={'/'} className={`navbar-link text-weight-light ${pathname === '/' ? 'active-link' : ''}`}>ABOUT ME</Link></li>
            <li><Link href={'/resume'} className={`navbar-link text-weight-light ${pathname === '/resume' ? 'active-link' : ''}`}>RESUME</Link></li>
            <li><Link href={'/projects'} className={`navbar-link text-weight-light ${pathname === '/projects' ? 'active-link' : ''}`}>PROJECTS</Link></li>
          </ul>
        }
      </div>
    </nav>
  );
}
