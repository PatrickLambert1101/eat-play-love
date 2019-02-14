import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import CardWrapper from '../components/CardWrapper';
import Footer from '../components/Footer';
import { HTMLContent } from '../components/Content';
import { TransitionState } from 'gatsby-plugin-transition-link';
import posed from 'react-pose';
import PageContainer from '../components/styles/PageContainer';
var shortid = require('shortid');
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
export default class EventsPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: events } = data.events;
    const { edges: eventsPageData } = data.eventsPageData;

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
              {eventsPageData.map(page => (
                <div key={shortid.generate()}>
                  <PageContainer>
                    <div className="lead">
                      <h1>{page.node.frontmatter.title}</h1>
                    </div>
                    <HTMLContent
                      className="body-text"
                      content={page.node.html}
                    />
                  </PageContainer>
                  <CardWrapper baseUrl={'events-type'} data={events} />

                  <Footer />
                </div>
              ))}
            </Trans>
          );
        }}
      </TransitionState>
    );
  }
}

EventsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query EventsQuery {
    eventsPageData: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "events-page" } } }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            image {
              childImageSharp {
                fluid(maxWidth: 1680, maxHeight: 460, quality: 80) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            features {
              title
            }
          }
        }
      }
    }
    events: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "events-type" } } }
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
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
