import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import ContentCardWrap from '../components/ContentCardWrap';
import PageContainer from '../components/styles/PageContainer';
import Layout from '../components/layout';
import { HTMLContent } from '../components/Content';

export default class RetreatsPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: retreats } = data.retreats;
    const retreatsPageData = data.retreatsPageData.edges[0].node;

    return (
      <Layout location={this.props.location.pathname}>
        <PageContainer>
          <div className="lead">
            <h1>{retreatsPageData.frontmatter.title}</h1>
          </div>
          <HTMLContent className="body-text" content={retreatsPageData.html} />
          <ContentCardWrap content={retreats} />
        </PageContainer>
      </Layout>
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
          html
          frontmatter {
            title
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
                  ...GatsbyImageSharpFluid
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
