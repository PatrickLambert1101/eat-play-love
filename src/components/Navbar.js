import React from 'react';
import { Link } from 'gatsby';
import logo from '../img/logo.svg';
import menu from '../img/menu.svg';

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="navbar-brand">
      <Link to="/" className="navbar-item">
        <figure className="image">
          <img src={logo} alt="Eat Play Love Logo" />
        </figure>
      </Link>
      <button
        className="nav-btn"
        type="button"
        aria-expanded="false"
        aria-controls="menu-list"
      >
        <img src={menu} style={{ width: '100px' }} alt="menu" />
      </button>
    </div>
    <div className="navbar-start">
      <Link className="navbar-item" to="/experinces">
        EXPERIENCES
      </Link>
      <Link className="navbar-item" to="/offerings">
        OFFERINGS
      </Link>
      <Link className="navbar-item" to="/retreats">
        RETREATS
      </Link>
      <Link className="navbar-item" to="/contact">
        CONTACT
      </Link>
    </div>
  </nav>
);

export default Navbar;
