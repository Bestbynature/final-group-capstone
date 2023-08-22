import React from 'react';
import { Link, NavLink } from 'react-router-dom';
// import './styles/navbar.css';


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="brand">
        <Link to='/'><h2> Brand</h2></Link>
      </div>

      <nav>
      <ul>
          <li><p><NavLink exact to='/' activeClassName='active'>Flights</NavLink></p>
            
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
      <div className="social">
        <div className="icons">
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-google-plus-g"></i>
          <i className="fa-brands fa-vimeo-v"></i>
          <i className="fa-brands fa-pinterest-p"></i>
        </div>
        <p>&copy; 2023 Brand Consult Ltd</p>
      </div>
    </div>
  );
};

export default Navbar;