import React from 'react';
import { Link, NavLink } from 'react-router-dom';
// import './styles/navbar.css';


const Navbar = () => {
  return (
    <div className='navbar'>
      <h2 className='brand'><Link to='/'>Brand</Link></h2>

      <nav>
        <ul>
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
      <div className="social">
            <ul>
                <li><i className="fa-brands fa-twitter"></i></li>
                <li><i className="fa-brands fa-facebook"></i></li>
                <li><i className="fa-brands fa-google-plus-g"></i></li>
                <li><i className="fa-brands fa-vimeo-v"></i></li>
                <li><i className="fa-brands fa-pinterest-p"></i></li>
            </ul>
            <p>&copy; 2023 Brand Consult Ltd</p>
      </div>

    </div>
  );
};

export default Navbar;
