import React from 'react';
import { graphql } from 'gatsby';
import EventTypeSingle from '../components/EventTypeSingle';
import Review from '../components/Review';
import Footer from '../components/Footer';

import PageContainer from '../components/styles/PageContainer';
const EventsType = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <div>
      <PageContainer>
        <div className="lead">
          <h1>{post.frontmatter.title}</h1>
        </div>
        <h4 className="body-text">{post.frontmatter.leadtext}</h4>
        <EventTypeSingle content={post.frontmatter.single} />
        <Review
          review={post.frontmatter.review}
          author={post.frontmatter.author}
        />
      </PageContainer>
      <Footer />
    </div>
  );
};

export default EventsType;

export const pageQuery = graphql`
  query EventsTypeByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        leadtext
        image {
          childImageSharp {
            fluid(maxWidth: 410, maxHeight: 410, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        review
        author
        single {
          title
          subtitle
          image {
            childImageSharp {
              fluid(maxWidth: 410, maxHeight: 410, quality: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          text
        }
      }
    }
  }
`;
