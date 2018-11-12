import React from 'react';
import { Link } from 'gatsby';
import logo from '../img/logo.svg';
import menu from '../img/menu.svg';

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={logo} alt="Eat Play Love Logo" />
          </figure>
        </Link>
        <button
          class="nav-btn"
          type="button"
          aria-expanded="false"
          aria-controls="menu-list"
        >
          <img src={menu} style={{ width: '100px' }} />
        </button>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item active" to="/blog">
          BLOG
        </Link>
        <Link className="navbar-item" to="/offerings">
          OFFERINGS
        </Link>
        <Link className="navbar-item" to="/events">
          EVENTS
        </Link>
        <Link className="navbar-item" to="/shop">
          SHOP
        </Link>
        <Link className="navbar-item" to="/about">
          ABOUT
        </Link>
        <Link className="navbar-item" to="/directorys">
          DIRECTORIES
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
