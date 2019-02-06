import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import CardWrapper from '../components/CardWrapper';
import Review from '../components/Review';
import PageContainer from '../components/styles/PageContainer';
var shortid = require('shortid');

export default class EventsPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: events } = data.events;
    const { edges: eventsPageData } = data.eventsPageData;

    return (
      <div>
        {eventsPageData.map(page => (
          <div key={shortid.generate()}>
            <PageContainer>
              <div className="lead">
                <h1>{page.node.frontmatter.title}</h1>
                <p>{page.node.frontmatter.leadText}</p>
              </div>
            </PageContainer>
            <CardWrapper baseUrl={'events'} data={events} />
            <Review
              review={page.node.frontmatter.review}
              author={page.node.frontmatter.author}
            />
          </div>
        ))}
        ;
      </div>
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
          frontmatter {
            title
            leadText
            review
            author
          }
        }
      }
    }
    events: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "events-post" } } }
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
            excerpt
          }
        }
      }
    }
  }
`;
