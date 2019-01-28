import React from 'react';
import { Link } from 'gatsby';
import menu from '../img/menu.svg';
import HeadLogo from './HeadLogo';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggle: false
    };

    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  s;

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
        <div className="navbar-start" onClick={this.closeMenu}>
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              <HeadLogo onClick={this.closeMenu} alt="Eat Play Love Logo" />
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
          <Link className="navbar-item" to="/events">
            EVENTS
          </Link>
          <Link className="navbar-item" to="/retreats">
            RETREATS
          </Link>
          <Link className="navbar-item" to="/about">
            ABOUT
          </Link>
          <Link className="navbar-item" to="/contact">
            CONTACT
          </Link>
        </div>
      </nav>
    );
  }
}
