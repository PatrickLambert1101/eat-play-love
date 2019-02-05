import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import AltCard from '../components/styles/AltCard';
import AltCardWrap from '../components/styles/AltCardWrap';
import Button from '../components/Button';
import PageContainer from '../components/styles/PageContainer';
import ReadMore from '../components/styles/ReadMore';
var shortid = require('shortid');

export default class EventsPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: events } = data.events;

    return (
      <div>
        <PageContainer>
          <h1>Events</h1>
          {events.map(({ node: event }) => (
            <AltCardWrap key={shortid.generate()}>
              <Link to={event.fields.slug}>
                <PreviewCompatibleImage
                  key={event.frontmatter.image.id}
                  imageInfo={event.frontmatter.image}
                />
              </Link>
              <AltCard>
                <Link to={event.fields.slug}>
                  <h2>{event.frontmatter.title}</h2>
                </Link>
                <h4>{event.frontmatter.excerpt}</h4>
                <Link to={event.fields.slug}>
                  <ReadMore>Read More</ReadMore>
                </Link>
              </AltCard>
            </AltCardWrap>
          ))}
        </PageContainer>
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
