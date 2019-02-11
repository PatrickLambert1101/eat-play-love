import React from 'react';
import HeadLogo from './HeadLogo';
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
      isToggle: false
    });
  }

  toggleMenu(e) {
    if (this.state.width <= 800) {
      this.setState({
        isToggle: !this.state.isToggle
      });
    }
  }

  render() {
    let menuClassName =
      this.state.isToggle || this.state.width >= 800
        ? 'toggle-open'
        : 'toggle-closed';
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
          <AniLink activeClassName="active" fade to="/">
            <div onClick={this.toggleMenu}>HOME</div>
          </AniLink>
          <AniLink activeClassName="active" fade to="/events">
            <div onClick={this.toggleMenu}>EVENTS</div>
          </AniLink>
          <AniLink activeClassName="active" fade to="/retreats">
            <div onClick={this.toggleMenu}> RETREATS</div>
          </AniLink>
          <AniLink activeClassName="active" fade to="/about">
            <div onClick={this.toggleMenu}>ABOUT US</div>
          </AniLink>
          <AniLink activeClassName="active" fade to="/contact">
            <div onClick={this.toggleMenu}>CONTACT</div>
          </AniLink>
        </NavLinks>
      </nav>
    );
  }
}
