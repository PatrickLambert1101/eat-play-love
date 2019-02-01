import React from 'react';
import { Link } from 'gatsby';
import HeadLogo from './HeadLogo';
import NavbarBrand from './styles/NavbarBrand';
import NavLinks from './styles/NavLinks';
import NavButton from './styles/NavButton';
import menu from '../img/menu.svg';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggle: false };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(e) {
    this.setState({
      isToggle: !this.state.isToggle
    });
  }

  render() {
    let menuClassName = this.state.isToggle ? 'toggle-open' : 'toggle-closed';
    let current = this.props.page;
    return (
      <nav>
        <NavbarBrand>
          <Link to="/" className="navbar-item">
            <HeadLogo alt="Eat Play Love Logo" onClick={this.toggleMenu} />
          </Link>
          <NavButton
            type="button"
            aria-expanded="false"
            aria-controls="menu-list"
          >
            <img
              src={menu}
              onClick={this.toggleMenu}
              style={{ width: '100px' }}
              alt="menu"
            />
          </NavButton>
        </NavbarBrand>
        <NavLinks className={menuClassName}>
          <Link to="/" className={current === '/' ? 'active' : ''}>
            <a onClick={this.toggleMenu}>HOME</a>
          </Link>
          <Link to="/events" className={current === '/events' ? 'active' : ''}>
            <a onClick={this.toggleMenu}>EVENTS</a>
          </Link>
          <Link
            to="/retreats"
            className={current === '/retreats' ? 'active' : ''}
          >
            <a onClick={this.toggleMenu}>RETREATS</a>
          </Link>
          <Link to="/about" className={current === '/about' ? 'active' : ''}>
            <a onClick={this.toggleMenu}>ABOUT</a>
          </Link>
          <Link
            to="/contact"
            className={current === '/contact' ? 'active' : ''}
          >
            <a onClick={this.toggleMenu}>CONTACT</a>
          </Link>
        </NavLinks>
      </nav>
    );
  }
}
