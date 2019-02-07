import React from 'react';
import TransitionLink from 'gatsby-plugin-transition-link';
import HeadLogo from './HeadLogo';
import { TimelineMax } from 'gsap';

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

    this.layoutContents = React.createRef();
    this.transitionCover = React.createRef();
  }

  in(exit, node) {
    return new TimelineMax().staggerFrom(
      node.querySelectorAll('h1, p'),
      1,
      { opacity: 1, y: '-=50' },
      0.1
    );
  }
  out(entry, node) {
    return new TimelineMax().staggerFrom(
      node.querySelectorAll('h1, p, a, pre'),
      1,
      { opacity: 0, y: '+=50' },
      0.1
    );
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
          <TransitionLink
            exit={{
              delay: 0,
              trigger: ({ exit, node }) => this.in(exit, node)
            }}
            entry={{
              delay: 0.5,
              trigger: ({ entry, node }) => this.out(entry, node)
            }}
            to="/"
            className="navbar-item"
          >
            <HeadLogo alt="Eat Play Love Logo" onClick={this.toggleMenu} />
          </TransitionLink>
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
          <TransitionLink
            exit={{
              delay: 0,
              trigger: ({ exit, node }) => this.in(exit, node)
            }}
            entry={{
              delay: 0.5,
              trigger: ({ entry, node }) => this.out(entry, node)
            }}
            to="/"
          >
            <div onClick={this.toggleMenu}>HOME</div>
          </TransitionLink>
          <TransitionLink
            exit={{
              delay: 0,
              trigger: ({ exit, node }) => this.in(exit, node)
            }}
            entry={{
              delay: 0.5,
              trigger: ({ entry, node }) => this.out(entry, node)
            }}
            to="/events"
          >
            <div onClick={this.toggleMenu}>EVENTS</div>
          </TransitionLink>
          <TransitionLink
            exit={{
              delay: 0,
              trigger: ({ exit, node }) => this.in(exit, node)
            }}
            entry={{
              delay: 0.5,
              trigger: ({ entry, node }) => this.out(entry, node)
            }}
            to="/retreats"
          >
            <div onClick={this.toggleMenu}> RETREATS</div>
          </TransitionLink>
          <TransitionLink
            exit={{
              delay: 0,
              trigger: ({ exit, node }) => this.in(exit, node)
            }}
            entry={{
              delay: 0.5,
              trigger: ({ entry, node }) => this.out(entry, node)
            }}
            to="/about"
          >
            <div onClick={this.toggleMenu}>ABOUT US</div>
          </TransitionLink>
          <TransitionLink
            exit={{
              delay: 0,
              trigger: ({ exit, node }) => this.in(exit, node)
            }}
            entry={{
              delay: 0.5,
              trigger: ({ entry, node }) => this.out(entry, node)
            }}
            to="/contact"
          >
            <div onClick={this.toggleMenu}>CONTACT</div>
          </TransitionLink>
        </NavLinks>
      </nav>
    );
  }
}
