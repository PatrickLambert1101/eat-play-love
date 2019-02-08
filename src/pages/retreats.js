import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import ContentCardWrap from '../components/ContentCardWrap';
import Button from '../components/Button';
import PageContainer from '../components/styles/PageContainer';
import Footer from '../components/Footer';
import { HTMLContent } from '../components/Content';

export default class RetreatsPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: retreats } = data.retreats;
    const retreatsPageData = data.retreatsPageData.edges[0].node;

    return (
      <div>
        <PageContainer>
          <div className="lead">
            <h1>{retreatsPageData.frontmatter.title}</h1>
          </div>
          <HTMLContent content={retreatsPageData.html} />
          <ContentCardWrap content={retreats} />
        </PageContainer>
        <Link to={'/contact'}>
          <Button text={'Contact us for more info'} align={'flex-end'} />
        </Link>
        <Footer />
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
