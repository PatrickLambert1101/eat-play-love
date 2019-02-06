import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import ContentCard from '../components/ContentCardWrap';
import Button from '../components/Button';
import PageContainer from '../components/styles/PageContainer';
var shortid = require('shortid');

export default class RetreatsPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: retreats } = data.retreats;
    const { edges: retreatsPageData } = data.retreatsPageData;

    return (
      <div>
        <PageContainer>
          <h1>Retreats</h1>
          <p>
            {retreatsPageData.map(({ node: title }) => title.frontmatter.title)}
          </p>
          <ContentCardWrap content={retreats} />
        </PageContainer>
        <Button
          to={'/contact'}
          text={'Contact us for more info'}
          align={'flex-end'}
        />
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
    retreatsPageData: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "retreats-page" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            leadText
          }
        }
      }
    }
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
