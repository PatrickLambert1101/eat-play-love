import React, { Component } from 'react';
import PreviewCompatibleImage from './PreviewCompatibleImage';
import ModalButton from '../components/ModalButton';
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
  }
`;
export default class EventTypeSingle extends Component {
  render() {
    return (
      <ContentCardWrapStyle>
        {this.props.content.map(item => (
          <ContentCard key={shortid.generate()}>
            <h3>{item.title}</h3>
            <p>{item.subtitle}</p>
            <PreviewCompatibleImage imageInfo={item.image} />
            <h5>{item.text}</h5>
            <ModalButton text={'MORE'} />
          </ContentCard>
        ))}
      </ContentCardWrapStyle>
    );
  }
}
