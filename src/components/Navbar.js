import React from 'react';
import HeadLogo from './HeadLogo';
import { TimelineMax } from 'gsap';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

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
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    });
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
    return (
      <nav>
        <NavbarBrand>
          <AniLink fade to="/" className="navbar-item">
            <HeadLogo alt="Eat Play Love Logo" onClick={this.toggleMenu} />
          </AniLink>
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
          <AniLink fade to="/">
            <div activeClassName="active" onClick={this.toggleMenu}>
              HOME
            </div>
          </AniLink>
          <AniLink fade to="/events">
            <div activeClassName="active" onClick={this.toggleMenu}>
              EVENTS
            </div>
          </AniLink>
          <AniLink fade to="/retreats">
            <div activeClassName="active" onClick={this.toggleMenu}>
              {' '}
              RETREATS
            </div>
          </AniLink>
          <AniLink fade to="/about">
            <div activeClassName="active" onClick={this.toggleMenu}>
              ABOUT US
            </div>
          </AniLink>
          <AniLink fade to="/contact">
            <div activeClassName="active" onClick={this.toggleMenu}>
              CONTACT
            </div>
          </AniLink>
        </NavLinks>
      </nav>
    );
  }
}
