import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import CardWrapper from '../components/CardWrapper';
import Button from '../components/Button';
import PageContainer from '../components/styles/PageContainer';

export default class EventsPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: events } = data.events;
    const { edges: eventsPageData } = data.eventsPageData;
    const eventsCard = events.map(event => event.node.frontmatter);

    return (
      <div>
        <PageContainer>
          <h1>Events</h1>
          <p>
            {eventsPageData.map(({ node: title }) => title.frontmatter.title)}
          </p>
        </PageContainer>
        <CardWrapper data={eventsCard} />
        <Button
          to={'/contact'}
          text={'Contact us for more info'}
          align={'flex-start'}
          size={'large'}
        />
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
