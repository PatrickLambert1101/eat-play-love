import React from 'react';

import styled from 'styled-components';

const ReadMoreStyle = styled.div`
  margin-top: ${props => (props.secondBtn ? '50px' : '10px')};
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    color: #333;
    justify-content: center;
    transition: 0.3s all ease;
    &:hover {
      color: ${props => props.theme.lightPink};
    }
    &:focus {
      text-decoration: none;
    }
    &:active {
      color: #fff;
    }
    font-size: 0.85em;
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: bold;
    position: relative;
    &:after {
      transition: 0.3s all ease;
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      border: 3px solid ${props => props.theme.lightPink};
    }
    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
      background: ${props => props.theme.offWhite};
      z-index: -1;
    }
    &:hover {
      &:after {
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
      }
    }
    &:active {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
      &:before {
        background-color: ${props => props.theme.offWhite};
      }
      &:after {
        border-color: ${props => props.theme.offWhite};
      }
    }
  }
`;

export default function ReadMore(props) {
  return (
    <ReadMoreStyle secondBtn={props.secondBtn}>
      <span>{props.text}</span>
    </ReadMoreStyle>
  );
}
