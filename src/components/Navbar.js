import React from 'react';
import HeadLogo from './HeadLogo';
import TransitionLink from 'gatsby-plugin-transition-link';
import NavbarBrand from './styles/NavbarBrand';
import NavLinks from './styles/NavLinks';
import DropButton from './DropButton';
import HamburgerMenu from './HamburgerMenu';
import NavButton from './styles/NavButton';
const isEntryExit = {
  exit: { length: 0.5 },
  entry: { delay: 0.5 },
  activeClassName: 'active'
};
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
    if (this.state.width <= 800) {
      window.removeEventListener('resize', this.updateWindowDimensions);
    }
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
          <TransitionLink {...isEntryExit} to="/" className="navbar-item">
            <HeadLogo alt="Eat Play Love Logo" onClick={this.toggleMenu} />
          </TransitionLink>
          <NavButton type="button" aria-expanded="false">
            <HamburgerMenu
              isOpen={this.state.isToggle}
              menuClicked={this.toggleMenu.bind(this)}
              color={'#c58021'}
              width={55}
              strokeWidth={2}
              height={30}
            />
          </NavButton>
        </NavbarBrand>
        <NavLinks className={menuClassName}>
          <TransitionLink {...isEntryExit} to="/">
            <div onClick={this.toggleMenu}>HOME</div>
          </TransitionLink>
          <DropButton {...isEntryExit} />
          <TransitionLink {...isEntryExit} to="/retreats">
            <div onClick={this.toggleMenu}> RETREATS</div>
          </TransitionLink>
          <TransitionLink {...isEntryExit} to="/about">
            <div onClick={this.toggleMenu}>ABOUT US</div>
          </TransitionLink>
          <TransitionLink {...isEntryExit} to="/contact">
            <div onClick={this.toggleMenu}>CONTACT</div>
          </TransitionLink>
        </NavLinks>
      </nav>
    );
  }
}
