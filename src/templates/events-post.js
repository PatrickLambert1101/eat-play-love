import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import SingleSideButton from '../components/SingleSideButton';
import GalleryImage from '../components/GalleryImage';
import ModalButton from '../components/ModalButton';
import Review from '../components/Review';
import PageContainer from '../components/styles/PageContainer';
import Footer from '../components/Footer';
import { HTMLContent } from '../components/Content';

export const EventsPostTemplate = ({
  title,
  leadText,
  gallery,
  review,
  author
}) => {
  const galleryArr = gallery.map(gallery => gallery.galleryimage);
  return (
    <div>
      <PageContainer>
        <div className="lead">
          <h1>{title}</h1>
        </div>
        <HTMLContent content={leadText} />
        <GalleryImage gallery={galleryArr} />
        <Review review={review} author={author} />
        <ModalButton />
      </PageContainer>
      <SingleSideButton to={'/events'} text={'Back to events'} />
      <Footer />
    </div>
  );
};

EventsPostTemplate.propTypes = {
  title: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
};

const EventsPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <div>
      <EventsPostTemplate
        title={post.frontmatter.title}
        leadText={post.html}
        review={post.frontmatter.review}
        author={post.frontmatter.author}
        gallery={post.frontmatter.gallery}
      />
    </div>
  );
};

EventsPost.propTypes = {
  contentComponent: PropTypes.func,
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default EventsPost;

export const pageQuery = graphql`
  query EventsPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        review
        author
        gallery {
          galleryimage {
            id
            childImageSharp {
              fluid(maxWidth: 400, maxHeight: 400, quality: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
