import React, { Component } from 'react';
import PreviewCompatibleImage from './PreviewCompatibleImage';
import ModalButton from '../components/ModalButton';
import AnimateContent from '../components/AnimateContent';
import styled from 'styled-components';
var shortid = require('shortid');

const ContentCardWrapStyle = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: auto;
  max-width: ${props => props.theme.maxWidth};
  margin-bottom: 30px;
  @media (max-width: ${props => props.theme.mobile}) {
    flex-direction: column;
  }
`;

const ContentCard = styled.div`
  margin-bottom: 30px;
  flex-basis: 48%;
  color: ${props => props.theme.goldLight};
  h3 {
    margin-bottom: 0;
  }
  h5 {
    text-align: left;
    margin: 20px auto;
    padding: 0 15px;
  }
  p {
    margin: 0;
  }

  .gatsby-image-wrapper {
    margin-top: 30px;
    &:hover {
      img {
        transition: all 0.9s ease-out !important;
        transform: scale(1.06);
      }
    }
  }
`;

export default function EventTypeSingle(props) {
  return (
    <ContentCardWrapStyle>
      {props.content.map(item => (
        <ContentCard key={shortid.generate()}>
          <AnimateContent>
            <h3>{item.title}</h3>
            <p>{item.subtitle}</p>
            <PreviewCompatibleImage scale imageInfo={item.image} />
            <h5>{item.text}</h5>
            <ModalButton eventName={item.title} text={'MORE'} />
          </AnimateContent>
        </ContentCard>
      ))}
    </ContentCardWrapStyle>
  );
}
