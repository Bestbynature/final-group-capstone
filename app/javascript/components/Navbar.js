import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleMobileMenuKeyPress = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      toggleMobileMenu();
    }
  };

  return (
    <>
      <div
        className="mobile-menu-icon"
        onClick={toggleMobileMenu}
        onKeyDown={handleMobileMenuKeyPress}
        tabIndex="0"
        role="button"
      >
        <i className="fas fa-bars" />
      </div>

      <div className={`navbar ${mobileMenuOpen ? 'mobile-open' : ''}`}>
        <div className="brand">
          <Link to="/" onClick={toggleMobileMenu} type="button">
            <h2>10-Gano</h2>
          </Link>
        </div>

        <nav className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <ul>
            <li>
              <NavLink exact to="/" onClick={toggleMobileMenu} type="button" activeClassName="active">
                Flights
              </NavLink>
            </li>
            <li>
              <NavLink to="/delete_flight" onClick={toggleMobileMenu} type="button" activeClassName="active">
                Delete Flights
              </NavLink>
            </li>
            <li>
              <NavLink to="/reserve_flight" onClick={toggleMobileMenu} type="button" activeClassName="active">
                Reserve
              </NavLink>
            </li>
            <li>
              <NavLink to="/reservations" onClick={toggleMobileMenu} type="button" activeClassName="active">
                Reservations
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={toggleMobileMenu}
                type="button"
                to="/add"
                activeClassName="active"
                data-bs-toggle="modal"
                data-bs-target="#addModal"
              >
                Add Flight
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="social">
          <div className="icons">
            <i className="fa-brands fa-twitter" />
            <i className="fa-brands fa-facebook" />
            <i className="fa-brands fa-google-plus-g" />
            <i className="fa-brands fa-vimeo-v" />
            <i className="fa-brands fa-pinterest-p" />
          </div>
          <p>&copy; 2023 Brand Consult Ltd</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
