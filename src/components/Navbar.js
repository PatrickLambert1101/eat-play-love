import React from 'react';
import { Link } from 'gatsby';
import HeadLogo from './HeadLogo';
import NavbarBrand from './styles/NavbarBrand';
import NavLinks from './styles/NavLinks';
import NavButton from './styles/NavButton';

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
    let current = this.props.page;
    console.log('TCL: Navbar -> render -> current', current);
    return (
      <nav className={`navbar is-transparent ${menuClassName}`}>
        <NavbarBrand>
          <Link to="/" className="navbar-item">
            <HeadLogo onClick={this.closeMenu} alt="Eat Play Love Logo" />
          </Link>
          <NavButton
            type="button"
            aria-expanded="false"
            aria-controls="menu-list"
            onClick={this.toggleMenu}
          >
            <HeadLogo />
          </NavButton>
        </NavbarBrand>
        <NavLinks onClick={this.closeMenu}>
          <Link to="/events" className={current === '/events' ? 'active' : ''}>
            EVENTS
          </Link>
          <Link
            to="/retreats"
            className={current === '/retreats' ? 'active' : ''}
          >
            RETREATS
          </Link>
          <Link to="/about" className={current === '/about' ? 'active' : ''}>
            ABOUT
          </Link>
          <Link
            to="/contact"
            className={current === '/contact' ? 'active' : ''}
          >
            CONTACT
          </Link>
        </NavLinks>
      </nav>
    );
  }
}
