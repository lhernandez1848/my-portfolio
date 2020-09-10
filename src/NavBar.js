import React from 'react';
import { Link } from 'react-router-dom';
import home_icon from './images/home.png';

const NavBar = () => (
    <nav id="navbar">
        <Link to="/">
            <img src={home_icon} id="home_icon"/>
        </Link>
    </nav>
);

export default NavBar;