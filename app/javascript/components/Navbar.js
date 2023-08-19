import React from 'react';
import { Link } from 'react-router-dom';
// import './styles/navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <h2 className='brand'><Link to='/'>Brand</Link></h2>
      <ul className='navlink'>
        <li>
          <Link to='/'>Flights</Link>
        </li>
        <li>
          <Link to='/add_flight'>Add Flight</Link>
        </li>
        <li>
          <Link to='/delete_flight'>Delete Flights</Link>
        </li>
        <li>
          <Link to='/reserve_flight'>Reserve Flight</Link>
        </li>
        <li>
          <Link to='/reservations'>Reservations</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
