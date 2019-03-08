import React from 'react';
import { TransitionState } from 'gatsby-plugin-transition-link';
import styled from 'styled-components';
import posed from 'react-pose';

const Spin = posed.div({
  hidden: {
    opacity: 0,
    transition: {
      opacity: { ease: 'easeOut', duration: 400, delay: 200 }
    }
  },
  visible: {
    opacity: 1,
    transition: {
      opacity: { ease: 'easeOut', duration: 400 }
    }
  }
});

const Spinner = styled.div`
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  img {
    position: absolute;
    width: 120px;
    left: 50%;
    top: 50vh;
    margin-left: -60px;
    opacity: 1;
    animation: spin 1.5s linear infinite;
  }
`;
export default function Loader() {
  return (
    <div>
      <TransitionState>
        {({ transitionStatus }) => {
          return (
            <Spin
              pose={
                ['exiting'].includes(transitionStatus) ? 'visible' : 'hidden'
              }
            >
              <Spinner>
                <img src="../img/epl.png" />
              </Spinner>
            </Spin>
          );
        }}
      </TransitionState>
    </div>
  );
}
