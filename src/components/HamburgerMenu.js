import React, { useState } from 'react';
import styled from 'styled-components';

const Hamburger = styled.button`
  @media (min-width: 901px) {
    display: none;
  }
  @media (max-width: ${props => props.theme.mobile}) {
    margin-right: 15px;
  }
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: inherit;
  border: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  :focus {
    outline: none !important;
  }
  .menu-toggle {
    cursor: pointer;
    display: flex;
    position: relative;
    height: 30px;
    width: 50px;
    align-items: center;

    &:before,
    &:after,
    & em {
      content: '';
      position: absolute;
      display: inline-block;
      width: 100%;
      height: 2px;
      background: ${props => props.theme.goldLight};
      border-radius: 10px;
      left: 0px;
      transition: all 0.3s ease;
    }

    &:before {
      top: 0px;
    }

    &:after {
      bottom: 0px;
    }

    & em {
      position: relative;
    }

    /* adjust percentage accordingly */
    &.open::before {
      top: calc(30px - 55%);
      transform: rotate(-45deg);
    }

    /* adjust percentage accordingly */
    &.open::after {
      bottom: 14px;
      transform: rotate(45deg);
    }

    &.open em {
      opacity: 0;
    }
  }
`;

const HamburgerMenu = () => {
  const [isActive, setIsActive] = useState(false);

  function handleMenuClick() {
    setIsActive(!isActive);
  }

  return (
    <Hamburger>
      <span
        className={`menu-toggle ${isActive ? 'open' : ''}`}
        onClick={handleMenuClick}
      >
        <em />
      </span>
    </Hamburger>
  );
};
export default HamburgerMenu;
