
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  
  return (
    <nav className='navbar'>
      <div>
        <h2>KEEPER</h2>
      </div>
      <ul className='listitem'>
      <li>
          <Link to ="/">Home</Link>
        </li>
        <li>
          <Link to ="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
