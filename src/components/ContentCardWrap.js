import React from 'react';
import TransitionLink from 'gatsby-plugin-transition-link';
import PreviewCompatibleImage from './PreviewCompatibleImage';
import ReadMore from './ReadMore';
import isEntryExit from './isEntryExit';
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
  margin-bottom: 20px;
  flex-basis: 48%;
  color: ${props => props.theme.goldLight};
  h3 {
    margin-bottom: 0;
  }
  h5 {
    text-align: left;
    margin: 20px auto 40px;
    padding: 0 15px;
  }
  p {
    margin: 0;
  }
  &:nth-child(2n) {
    padding-left: 10px;
    @media (max-width: ${props => props.theme.mobile}) {
      padding-left: 0px;
    }
  }
  &:nth-child(2n + 1) {
    padding-right: 10px;
    @media (max-width: ${props => props.theme.mobile}) {
      padding-right: 0px;
    }
  }
  .gatsby-image-wrapper {
    margin-top: 30px;
  }
`;

export default function ContentCardWrap(props) {
  return (
    <ContentCardWrapStyle>
      {props.content.map(item => (
        <ContentCard key={shortid.generate()}>
          <TransitionLink {...isEntryExit} to={item.node.fields.slug}>
            <h3>{item.node.frontmatter.title}</h3>
            <p>{item.node.frontmatter.location}</p>
            <p>{item.node.frontmatter.date}</p>
            <PreviewCompatibleImage
              scale
              imageInfo={item.node.frontmatter.image}
            />
            <h5>{item.node.frontmatter.excerpt}</h5>
            <ReadMore text={'MORE'} />
          </TransitionLink>
        </ContentCard>
      ))}
    </ContentCardWrapStyle>
  );
}
