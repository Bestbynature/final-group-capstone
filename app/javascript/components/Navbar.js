import React from 'react';
import { Link, NavLink } from 'react-router-dom';
// import './styles/navbar.css';


const Navbar = () => {
  return (
    <nav className='navbar'>
      <h2 className='brand'><Link to='/'>Brand</Link></h2>
      <ul className='navlink'>
        <li>
          <NavLink exact to='/' activeClassName='active'>Flights</NavLink>
        </li>
        <li>
          <NavLink to='/add_flight' activeClassName='active'>Add Flight</NavLink>
        </li>
        <li>
          <NavLink to='/delete_flight' activeClassName='active'>Delete Flights</NavLink>
        </li>
        <li>
          <NavLink to='/reserve_flight' activeClassName='active'>Reserve Flight</NavLink>
        </li>
        <li>
          <NavLink to='/reservations' activeClassName='active'>Reservations</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
