import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';
import logo from '../../assets/logo.png';
const Navigation = () => {
  return (
    <nav className='navbar'>
      <img className='logo' src={logo} alt='' />
      <div className='links-container'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='about'>About</NavLink>
        <NavLink to='activities'>Activities</NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
