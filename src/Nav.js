import React from 'react';
import sanfran from './image2vector.svg';
import homeicon from './home.png';
import { Link } from 'react-router-dom';
import './App.css';

function Nav(){
    return (
          <nav>
          <ul>

          <li><Link className='linkER' to="/contact">Contact</Link></li>
          <li><Link className='linkER' to="/projects">Projects</Link></li>
          <li><Link className='linkER' to="/about">About</Link></li>
          <li ><Link className='linkER' to="/"><img className='homeIcon' src={homeicon}/></Link></li>
            </ul>
          </nav>
    );
}

export default Nav;

   