import React, { Component } from 'react';
import { Link } from 'gatsby';
import Button from './Button';
import styled from 'styled-components';

const SingleSideButtonStyle = styled.div`
  display: flex;
  justify-content: center;
  @media (min-width: ${props => props.theme.mobile}) {
    margin-top: ${props => (props.secondSideButton ? '-43px' : '')};
    justify-content: ${props => props.align || 'center'};
  }
  @media (max-width: ${props => props.theme.mobile}) {
    a {
      width: 100%;
      padding: 15px;
    }
  }
`;

export default class SingleSideButton extends Component {
  render() {
    return (
      <SingleSideButtonStyle
        secondSideButton={this.props.secondSideButton}
        align={this.props.align}
      >
        <Link to={this.props.to}>
          <Button
            isLarge
            fullWidth
            text={this.props.text}
            align={this.props.align}
          />
        </Link>
      </SingleSideButtonStyle>
    );
  }
}
