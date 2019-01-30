import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const ButtonStyle = styled.button`
  text-decoration: none;
  font-family: ${props => props.theme.georgia};
  font-size: 14px;
  padding: 6px 10px;
  transition: all 0.2s ease-out;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0);
  display: flex;
  justify-content: ${props => props.align};
  &:hover {
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
    padding: 10px 16px;
  }
  font-weight: ${props => (props.size === 'large' ? 'bold' : '')};
  font-size: ${props => (props.size === 'large' ? '28px' : '14px')};
  color: ${props =>
    props.size === 'large' ? props.theme.brown : props.theme.greyButton};
  padding: ${props => (props.size === 'large' ? '8px 22px' : '6px 10px')};
  background-color: ${props =>
    props.size === 'large' ? props.theme.lightBrown : props.theme.pink};
  border: ${props =>
    props.size === 'large' ? `1px solid ${props.theme.darkRed}` : ''};

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
        <ButtonStyle align={this.props.align} size={this.props.size}>
          <h4>{this.props.text}</h4>
        </ButtonStyle>
      </Link>
    );
  }
}
