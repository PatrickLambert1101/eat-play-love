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
    this.state = { isToggle: false, width: 0, height: 0 };

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  UNSAFE_componentWillMount() {
    this.setState({
      isToggle: !this.state.isToggle
    });
  }

  toggleMenu(e) {
    if (this.state.width <= 480) {
      this.setState({
        isToggle: !this.state.isToggle
      });
    }
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
            <div onClick={this.toggleMenu}>HOME</div>
          </Link>
          <Link to="/events" className={current === '/events' ? 'active' : ''}>
            <div onClick={this.toggleMenu}>EVENTS</div>
          </Link>
          <Link
            to="/retreats"
            className={current === '/retreats' ? 'active' : ''}
          >
            <div onClick={this.toggleMenu}>RETREATS</div>
          </Link>
          <Link to="/about" className={current === '/about' ? 'active' : ''}>
            <div onClick={this.toggleMenu}>ABOUT</div>
          </Link>
          <Link
            to="/contact"
            className={current === '/contact' ? 'active' : ''}
          >
            <div onClick={this.toggleMenu}>CONTACT</div>
          </Link>
        </NavLinks>
      </nav>
    );
  }
}
