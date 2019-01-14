import React, { Component } from 'react';
import { Link } from 'gatsby';
import logo from '../img/logo.svg';
import menu from '../img/menu.svg';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggle: false
    };

    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  closeMenu() {
    this.setState({ isToggle: false });
  }

  toggleMenu(e) {
    e.preventDefault();
    this.setState({ isToggle: !this.state.isToggle });
  }

  render() {
    let menuClassName = this.state.isToggle ? 'toggle-open' : 'toggle-closed';

    return (
      <nav className={`navbar is-transparent ${menuClassName}`}>
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <figure className="image" onClick={this.closeMenu}>
              <img src={logo} alt="Eat Play Love Logo" />
            </figure>
          </Link>
          <button
            className="nav-btn"
            type="button"
            aria-expanded="false"
            aria-controls="menu-list"
            onClick={this.toggleMenu}
          >
            <img src={menu} style={{ width: '100px' }} alt="menu" />
          </button>
        </div>
        <div className="navbar-start" onClick={this.closeMenu}>
          <Link className="navbar-item" to="/events">
            EVENTS
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
  }
}
