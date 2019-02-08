import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import CardWrapper from '../components/CardWrapper';
import Footer from '../components/Footer';
import { HTMLContent } from '../components/Content';

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
              </div>
              <HTMLContent className="body-text" content={page.node.html} />
            </PageContainer>

            <Review
              review={page.node.frontmatter.review}
              author={page.node.frontmatter.author}
            />
            <Footer />
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
          html
          frontmatter {
            title
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
          }
        }
      }
    }
  }
`;
