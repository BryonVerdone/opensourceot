import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';
import logo from '../../assets/logo.png';
const Navigation = () => {
  return (
    <header className='header'>
      <nav className='navbar'>
        <img className='logo' src={logo} alt='' />
        <div className='links-container'>
          <ul className='nav-list'>
            <li>
              <NavLink className='nav-link' to='/'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className='nav-link' to='about'>
                About
              </NavLink>
            </li>
            <li>
              <NavLink className='nav-link' to='activities'>
                Activities
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
