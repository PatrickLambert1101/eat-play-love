import React, { Component } from 'react';
import TransitionLink from 'gatsby-plugin-transition-link';
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
  transform: translateX(-50%);
  text-align: center;
  transition: all 0.7s ease;
  border: 1px solid ${props => props.theme.goldLight};
  @media (max-width: ${props => props.theme.mobile}) {
    display: none;
  }
  & > a {
    padding: 10px 30px;
    transition: all 0.4s ease;
    float: left;
    &:hover {
      background-color: ${props => props.theme.goldLight};
      color: #fff;
    }
  }
`;
export default class DropButton extends Component {
  constructor(props) {
    super(props);

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  onMouseEnter() {
    this.setState({ dropdownOpen: true });
  }

  onMouseLeave() {
    this.setState({ dropdownOpen: false });
  }

  render() {
    return (
      <div onMouseOver={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
        <TransitionLink
          exit={{ length: 0.5 }}
          entry={{ delay: 0.5 }}
          activeClassName="active"
          to="/events"
        >
          <div onClick={this.toggleMenu}>EVENTS</div>
        </TransitionLink>
        <InnerDrop openIt={this.state.dropdownOpen}>
          <TransitionLink
            exit={{ length: 0.5 }}
            entry={{ delay: 0.5 }}
            activeClassName="active"
            to="/events-type/private-events"
          >
            Private Events
          </TransitionLink>
          <TransitionLink
            exit={{ length: 0.5 }}
            entry={{ delay: 0.5 }}
            activeClassName="active"
            to="/events-type/weddings"
          >
            Weddings
          </TransitionLink>
          <TransitionLink
            exit={{ length: 0.5 }}
            entry={{ delay: 0.5 }}
            activeClassName="active"
            to="/events-type/holistic-events"
          >
            Holistic Events
          </TransitionLink>
          <TransitionLink
            exit={{ length: 0.5 }}
            entry={{ delay: 0.5 }}
            activeClassName="active"
            to="/events-type/flowers"
          >
            Flowers
          </TransitionLink>
        </InnerDrop>
      </div>
    );
  }
}
