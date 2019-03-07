import React from 'react';
import TransitionLink from 'gatsby-plugin-transition-link';
import useHover from './useHover';
import isEntryExit from './isEntryExit';
import styled from 'styled-components';

const InnerDropStyle = styled.div`
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
export default function InnerDrop() {
  const [hoverRef, isHovered] = useHover();

  return (
    <div ref={hoverRef}>
      <TransitionLink {...isEntryExit} to="events">
        <div>EVENTS</div>
      </TransitionLink>
      <InnerDropStyle openIt={isHovered}>
        <TransitionLink {...isEntryExit} to="events-type/private-events">
          Private Events
        </TransitionLink>
        <TransitionLink {...isEntryExit} to="events-type/weddings">
          Weddings
        </TransitionLink>
        <TransitionLink {...isEntryExit} to="events-type/holistic-events">
          Holistic Events
        </TransitionLink>
        <TransitionLink {...isEntryExit} to="events-type/flowers">
          Flowers
        </TransitionLink>
      </InnerDropStyle>
    </div>
  );
}
