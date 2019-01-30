import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const ButtonStyle = styled.button`
  text-decoration: none;
  font-family: ${props => props.theme.georgia};
  font-size: 14px;
  color: ${props => props.theme.greyButton};
  padding: 6px 10px;
  background-color: ${props => props.theme.pink};
  transition: all 0.2s ease-out;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0);
  display: flex;
  justify-content: ${props => props.align}
  &:hover {
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
    padding: 10px 16px;
  }
  /* &.large {
    font-weight: bold;
    font-family: 'Georgia', Arial, Helvetica, sans-serif;
    font-size: 28px;
    padding: 8px 22px;
    color: #ebe6e1;
    background-color: #824706;
    border: 1px solid #a93a3a;
  } */
  a {
    background-color: #f9decf;
    padding: 15px 17px;
    font-size: 1.3em;
    h4 {
      color: #824706;
      margin: 0;
    }
  }
`;

export default class Button extends React.Component {
  render() {
    return (
      <Link to={`${this.props.to}`}>
        <ButtonStyle align={this.props.align}>
          <h4>{this.props.text}</h4>
        </ButtonStyle>
      </Link>
    );
  }
}
