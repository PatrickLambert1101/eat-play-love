import React, { Component } from 'react';
import useVisibilitySensor from '@rooks/use-visibility-sensor';
import { useRef } from 'react';
import styled from 'styled-components';
const Fader = styled.div`
  transition: all 0.6s ease;
`;
export default function AnimateContent(props) {
  const rootNode = useRef(null);

  console.log('TCL: AnimateContent -> props', rootNode);
  const { isVisible, visibilityRect } = useVisibilitySensor(rootNode, {
    intervalCheck: 400,
    partialVisibility: true,
    scrollCheck: true,
    resizeCheck: true
  });

  return (
    <Fader
      ref={rootNode}
      style={
        isVisible
          ? { opacity: 1, transform: 'translateY(0) ' }
          : { opacity: 0, transform: 'translateY(10px)' }
      }
    >
      {props.children}
    </Fader>
  );
}
