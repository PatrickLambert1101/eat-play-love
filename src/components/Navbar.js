import React from 'react';
import TransitionLink from 'gatsby-plugin-transition-link';
import HeadLogo from './HeadLogo';
import { TimelineMax, Power1 } from 'gsap';

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

    this.verticalAnimation = this.verticalAnimation.bind(this);

    this.layoutContents = React.createRef();
    this.transitionCover = React.createRef();
  }

  verticalAnimation = ({ length }, direction) => {
    const directionTo = direction === 'up' ? '-100%' : '100%';
    const directionFrom = direction === 'up' ? '100%' : '-100%';

    // convert ms to s for gsap
    const seconds = length;

    return new TimelineMax()
      .set(this.transitionCover, {
        y: directionFrom
      })
      .to(this.transitionCover, seconds / 2, {
        y: '0%',
        ease: Power1.easeInOut
      })
      .set(this.layoutContents, { opacity: 0 })
      .to(this.transitionCover, seconds / 2, {
        y: directionTo,
        ease: Power1.easeIn
      });
  };

  test(entry, node) {
    return new TimelineMax().staggerFrom(
      node.querySelectorAll('h2, p, a, pre'),
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
            to="/page-2"
            exit={{
              length: 1,
              trigger: ({ exit }) => this.verticalAnimation(exit, 'down'),
              state: { test: 'exit state' }
            }}
            entry={{
              delay: 0.5,
              trigger: ({ entry, node }) => this.test(entry, node)
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
            to="/page-2"
            exit={{
              length: 1,
              trigger: ({ exit }) => this.verticalAnimation(exit, 'down'),
              state: { test: 'exit state' }
            }}
            entry={{
              delay: 0.5,
              trigger: ({ entry, node }) => this.test(entry, node)
            }}
            to="/"
          >
            <div onClick={this.toggleMenu}>HOME</div>
          </TransitionLink>
          <TransitionLink
            to="/page-2"
            exit={{
              length: 1,
              trigger: ({ exit }) => this.verticalAnimation(exit, 'down'),
              state: { test: 'exit state' }
            }}
            entry={{
              delay: 0.5,
              trigger: ({ entry, node }) => this.test(entry, node)
            }}
            to="/events"
          >
            <div onClick={this.toggleMenu}>EVENTS</div>
          </TransitionLink>
          <TransitionLink
            to="/page-2"
            exit={{
              length: 1,
              trigger: ({ exit }) => this.verticalAnimation(exit, 'down'),
              state: { test: 'exit state' }
            }}
            entry={{
              delay: 0.5,
              trigger: ({ entry, node }) => this.test(entry, node)
            }}
            to="/retreats"
          >
            <div onClick={this.toggleMenu}> RETREATS</div>
          </TransitionLink>
          <TransitionLink
            to="/page-2"
            exit={{
              length: 1,
              trigger: ({ exit }) => this.verticalAnimation(exit, 'down'),
              state: { test: 'exit state' }
            }}
            entry={{
              delay: 0.5,
              trigger: ({ entry, node }) => this.test(entry, node)
            }}
            to="/about"
          >
            <div onClick={this.toggleMenu}>ABOUT US</div>
          </TransitionLink>
          <TransitionLink
            to="/page-2"
            exit={{
              length: 1,
              trigger: ({ exit }) => this.verticalAnimation(exit, 'down'),
              state: { test: 'exit state' }
            }}
            entry={{
              delay: 0.5,
              trigger: ({ entry, node }) => this.test(entry, node)
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
