import React, { Component } from 'react';
import useVisibilitySensor from '@rooks/use-visibility-sensor';
import { useRef } from 'react';
import styled from 'styled-components';
const Fader = styled.div`
  img {
    transition: all 0.9s ease-out !important;
    overflow: hidden;
  }
  &.scale-large img {
    transform: scale(1.06);
  }
  &.scale-normal img {
    transform: scale(1);
  }
`;
export default function AnimateImage(props) {
  const rootNode = useRef(null);

  const { isVisible } = useVisibilitySensor(rootNode, {
    intervalCheck: 400,
    partialVisibility: true,
    scrollCheck: true,
    resizeCheck: true
  });

  return (
    <Fader
      ref={rootNode}
      className={isVisible ? 'scale-normal' : 'scale-large'}
    >
      {props.children}
    </Fader>
  );
}
