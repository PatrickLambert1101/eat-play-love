import React from 'react';
import HeadLogo from './HeadLogo';
import TransitionLink from 'gatsby-plugin-transition-link';
import NavbarBrand from './styles/NavbarBrand';
import NavLinks from './styles/NavLinks';
import HamburgerMenu from './HamburgerMenu';
import NavButton from './styles/NavButton';
import isEntryExit from './isEntryExit';
import styled from 'styled-components';

const InnerDrop = styled.div`
  visibility: ${props => (props.openIt ? 'visible' : 'hidden')};
  opacity: ${props => (props.openIt ? '1' : '0')};
  max-height: ${props => (props.openIt ? '500px' : '0')};
  position: absolute;
  background-color: #fff;
  z-index: 4;
  top: 110%;
  left: 50%;
  width: 100px;
  font-size: 14px;
  font-family: ${props => props.theme.georgia};
  transform: translateX(-50%);
  text-align: center;
  transition: all 0.7s ease;
  border: 1px solid #fdefc5;
  @media (max-width: ${props => props.theme.mobile}) {
    display: none;
  }
  & > a {
    width: 100%;
    padding: 10px 0px;
    transition: all 0.4s ease;
    float: left;
    &:hover {
      background-color: #fdefc5;
    }
  }
`;
export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggle: false, width: 0, height: 0, dropdownOpen: false };

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }
  onMouseEnter() {
    this.setState({ dropdownOpen: true });
  }

  onMouseLeave() {
    this.setState({ dropdownOpen: false });
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
          <div onMouseOver={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
            <TransitionLink {...this.props.isEntryExit} to="events">
              <div onClick={this.toggleMenu}>EVENTS</div>
            </TransitionLink>
            <InnerDrop openIt={this.state.dropdownOpen}>
              <TransitionLink
                {...this.props.isEntryExit}
                to="events-type/private-events"
              >
                Private Events
              </TransitionLink>
              <TransitionLink
                {...this.props.isEntryExit}
                to="events-type/weddings"
              >
                Weddings
              </TransitionLink>
              <TransitionLink
                {...this.props.isEntryExit}
                to="events-type/holistic-events"
              >
                Holistic Events
              </TransitionLink>
              <TransitionLink
                {...this.props.isEntryExit}
                to="events-type/flowers"
              >
                Flowers
              </TransitionLink>
            </InnerDrop>
          </div>
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
