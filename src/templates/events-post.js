import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import SingleSideButton from '../components/styles/SingleSideButton';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import GalleryImage from '../components/GalleryImage';
import ModalButton from '../components/ModalButton';
import Review from '../components/Review';
import PageContainer from '../components/styles/PageContainer';
import Content, { HTMLContent } from '../components/Content';

export const EventsPostTemplate = ({
  title,
  leadText,
  gallery,
  review,
  author,
  contentComponent
}) => {
  const PageContent = contentComponent || Content;
  return (
    <div>
      <PageContainer>
        <div className="lead">
          <h1>{title}</h1>
          <p>{leadText}</p>
        </div>
        <GalleryImage gallery={gallery} />
        <Review review={review} author={author} />

        <ModalButton />
      </PageContainer>
      <SingleSideButton>
        <Link to={'/events'}>
          <h4>Back to events</h4>
        </Link>
      </SingleSideButton>
    </div>
  );
};

EventsPostTemplate.propTypes = {
  title: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  content: PropTypes.node.isRequired
};

const EventsPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <div>
      <EventsPostTemplate
        title={post.frontmatter.title}
        leadText={post.frontmatter.leadText}
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
      frontmatter {
        title
        leadText
        review
        author
        gallery {
          galleryimage {
            id
            childImageSharp {
              fluid(maxWidth: 400, maxHeight: 400, quality: 80) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`;
