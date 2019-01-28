import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import AltCard from '../components/styles/AltCard';
import AltCardWrap from '../components/styles/AltCardWrap';
import SideButton from '../components/styles/SideButton';
import Content from '../components/styles/Content';
import ReadMore from '../components/styles/ReadMore';

export default class RetreatsPage extends React.Component {
  render() {
    const { data } = this.props;
    console.log('data:', data);
    const { edges: retreats } = data.retreats;

    return (
      <div>
        <Content>
          <h1>Retreats</h1>
          {retreats.map(({ node: retreat }) => (
            <AltCardWrap key={retreat.id}>
              <Link to={retreat.fields.slug}>
                <PreviewCompatibleImage
                  key={retreat.frontmatter.image.id}
                  imageInfo={retreat.frontmatter.image}
                />
              </Link>
              <AltCard>
                <Link to={retreat.fields.slug}>
                  <h2>{retreat.frontmatter.title}</h2>
                </Link>
                <h4>{retreat.frontmatter.excerpt}</h4>
                <Link to={retreat.fields.slug}>
                  <ReadMore>Read more</ReadMore>
                </Link>
              </AltCard>
            </AltCardWrap>
          ))}
        </Content>
        <SideButton>
          <Link to={'/contact'}>
            <h4>Contact us for more info</h4>
          </Link>
        </SideButton>
      </div>
    );
  }
}

RetreatsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query RetreatsQuery {
    retreats: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "retreats-post" } } }
    ) {
      edges {
        node {
          html
          fields {
            slug
          }
          frontmatter {
            title
            image {
              childImageSharp {
                fluid(maxWidth: 410, maxHeight: 410, quality: 80) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            excerpt
          }
        }
      }
    }
  }
`;
