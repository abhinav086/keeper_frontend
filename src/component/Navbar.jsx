import './Notesgroup.css';
import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {

  
  return (
    <nav className='navbar'>
      <div>
        <h2 className="drop-shadow-text" >KEEPER</h2>
      </div>
      <ul className='listitem'>
      <li className='jats'>
          <Link to ="/">Home</Link>
        </li>
        <li className='jats'>
          <Link to ="/about">About</Link>
        </li>
        <li className='jats'>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
