import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className='navbar'>
      <div className='links'>
        <Link className='link' to='/'>
          Converter
        </Link>
        <Link className='link' to='/exchange'>
          Exchange rates
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
