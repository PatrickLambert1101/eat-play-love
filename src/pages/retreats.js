import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import ContentCardWrap from '../components/ContentCardWrap';
import Button from '../components/Button';
import PageContainer from '../components/styles/PageContainer';

export default class RetreatsPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: retreats } = data.retreats;
    const retreatsPageData = data.retreatsPageData.edges[0].node.frontmatter;

    return (
      <div>
        <PageContainer>
          <h1>{retreatsPageData.title}</h1>
          <p className="lead">{retreatsPageData.leadText}</p>
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
            location
            date
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
