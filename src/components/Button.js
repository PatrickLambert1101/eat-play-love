import React from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.button`
  text-decoration: none;
  font-family: ${props => props.theme.georgia};
  transition: all 0.2s ease-out;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0);
  display: flex;
  width: ${props => (props.fullWidth ? '100%' : 'auto')};
  justify-content: ${props => props.align};

  font-weight: ${props => (props.size === 'large' ? 'bold' : '')};
  color: ${props =>
    props.brown ? props.theme.lightBrown : props.theme.lightBrown};
  font-size: ${props => (props.size === 'large' ? '28px' : '24px')};
  padding: ${props => (props.size === 'large' ? '8px 22px' : '6px 10px')};
  background-color: ${props => (props.brown ? '#fff' : '#fff')};
  border: ${props =>
    props.brown
      ? `1px solid ${props.theme.goldLight}`
      : `1px solid ${props.theme.goldLight}`};
  border-left: ${props => (props.align === 'flex-end' ? 'none' : '')};

  &:hover {
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
    opacity: 0.8;
    transition: all 0.25s ease-in-out;
    -moz-transition: all 0.25s ease-in-out;
    -webkit-transition: all 0.25s ease-in-out;
    background-color: ${props =>
      props.brown ? props.theme.goldLight : props.theme.goldLight};
    color: #fff;
  }
`;

export default class Button extends React.Component {
  render() {
    return (
      <ButtonStyle
        brown={this.props.brown}
        align={this.props.align}
        size={this.props.size}
        fullWidth={this.props.fullWidth}
      >
        {this.props.text}
      </ButtonStyle>
    );
  }
}
