import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import ContentCardWrap from '../components/ContentCardWrap';
import PageContainer from '../components/styles/PageContainer';
import Footer from '../components/Footer';
import { HTMLContent } from '../components/Content';
import { TransitionState } from 'gatsby-plugin-transition-link';
import posed from 'react-pose';
const Trans = posed.div({
  hidden: {
    y: 30,
    opacity: 0,
    transition: {
      y: { type: 'spring', stiffness: 100, damping: 15 },
      default: { duration: 230 }
    }
  },
  visible: {
    y: 0,
    opacity: 1,
    delay: 200,
    transition: {
      y: { type: 'spring', stiffness: 100, damping: 15 },
      default: { duration: 230 }
    }
  }
});
export default class RetreatsPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: retreats } = data.retreats;
    const retreatsPageData = data.retreatsPageData.edges[0].node;

    return (
      <TransitionState>
        {({ transitionStatus }) => {
          return (
            <Trans
              pose={
                ['entering', 'entered'].includes(transitionStatus)
                  ? 'visible'
                  : 'hidden'
              }
            >
              <PageContainer>
                <div className="lead">
                  <h1>{retreatsPageData.frontmatter.title}</h1>
                </div>
                <HTMLContent
                  className="body-text"
                  content={retreatsPageData.html}
                />
                <ContentCardWrap content={retreats} />
              </PageContainer>
              <Footer />
            </Trans>
          );
        }}
      </TransitionState>
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
