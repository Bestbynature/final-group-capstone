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
          <NavLink to='/delete_flight' activeClassName='active'>Delete Flights</NavLink>
        </li>
        <li>
          <NavLink to='/reserve_flight' activeClassName='active'>Reserve</NavLink>
        </li>
        <li>
          <NavLink to='/reservations' activeClassName='active'>Reservations</NavLink>
        </li>
        <li><button type="button" className="add-button" data-bs-toggle="modal" data-bs-target="#addModal">
          Add Flight
          </button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
