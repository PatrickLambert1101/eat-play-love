import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import AltCard from '../components/styles/AltCard';
import AltCardWrap from '../components/styles/AltCardWrap';
import SideButton from '../components/styles/SideButton';
import Content from '../components/styles/Content';

export default class EventsPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: events } = data.events;

    return (
      <div>
        <Content>
          <h1>Events</h1>
          {events.map(({ node: event }) => (
            <AltCardWrap key={event.id}>
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
                <Link to={event.fields.slug} className="read-more">
                  Read More
                </Link>
              </AltCard>
            </AltCardWrap>
          ))}
        </Content>
        <SideButton>
          <Link to={'/contact'}>
            <h4>Contact us for more info</h4>
          </Link>
        </SideButton>
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
