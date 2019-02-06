import React from 'react';
import { Link } from 'gatsby';
import PreviewCompatibleImage from '../PreviewCompatibleImage';
import ReadMore from './styles/ReadMore';
import styled from 'styled-components';

const ContentCardWrapStyle = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 30px;
  h2 {
    text-align: left;
  }
  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
    h2 {
      text-align: center;
    }
    &:nth-child(2n + 1) {
      flex-direction: column;
    }
  }
`;

const ContentCard = styled.div`
  flex-basis: 100%;
`;

class ContentCardWrap extends React.Component {
  render() {
    return (
      <ContentCardWrapStyle>
        {this.props.content.map(item => (
          <ContentCard>
            <Link to={item.fields.link}>
              <PreviewCompatibleImage imageInfo={item.frontmatter.image} />
              <h2>{item.frontmatter.title}</h2>
              <h4>{item.frontmatter.excerpt}</h4>
              <ReadMore>Read more</ReadMore>
            </Link>
          </ContentCard>
        ))}
      </ContentCardWrapStyle>
    );
  }
}

export default ContentCardWrap;
