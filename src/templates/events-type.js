import React from 'react';
import { graphql } from 'gatsby';
import EventTypeSingle from '../components/EventTypeSingle';
import Review from '../components/Review';
import Footer from '../components/Footer';
import { TransitionState } from 'gatsby-plugin-transition-link';
import PageContainer from '../components/styles/PageContainer';
import PageTitle from '../components/PageTitle';
import Trans from '../components/Trans';

const EventsType = ({ data }) => {
  const { markdownRemark: post } = data;

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
              <PageTitle
                title={post.frontmatter.title}
                subtitle={post.frontmatter.leadtext}
              />
              <EventTypeSingle content={post.frontmatter.single} />
              <Review
                review={post.frontmatter.review}
                author={post.frontmatter.author}
              />
            </PageContainer>
            <Footer />
          </Trans>
        );
      }}
    </TransitionState>
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
