import React from 'react';
import { Link } from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';
import ReadMore from './styles/ReadMore';
import styled from 'styled-components';
var shortid = require('shortid');

const ContentCardWrapStyle = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: auto;
  max-width: 1300px;
  margin-bottom: 30px;
  @media (max-width: 900px) {
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
    margin: 20px auto;
    padding: 0 15px;
  }
  p {
    margin: 0;
  }
  &:nth-child(2n) {
    padding-left: 10px;
  }
  &:nth-child(2n + 1) {
    padding-right: 10px;
  }
  .gatsby-image-wrapper {
    margin-top: 30px;
  }
`;

class ContentCardWrap extends React.Component {
  render() {
    return (
      <ContentCardWrapStyle>
        {this.props.content.map(item => (
          <ContentCard key={shortid.generate()}>
            <Link to={item.node.fields.slug}>
              <h3>{item.node.frontmatter.title}</h3>
              <p>{item.node.frontmatter.location}</p>
              <p>{item.node.frontmatter.date}</p>
              <PreviewCompatibleImage imageInfo={item.node.frontmatter.image} />
              <h5>{item.node.frontmatter.excerpt}</h5>
              <ReadMore>Read more</ReadMore>
            </Link>
          </ContentCard>
        ))}
      </ContentCardWrapStyle>
    );
  }
}

export default ContentCardWrap;
