import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import TransitionLink from 'gatsby-plugin-transition-link';
import ReadMore from '../components/ReadMore';
import GalleryImage from '../components/GalleryImage';
import ModalButton from '../components/ModalButton';
import Review from '../components/Review';
import PageContainer from '../components/styles/PageContainer';
import Footer from '../components/Footer';
import { HTMLContent } from '../components/Content';
import { TransitionState } from 'gatsby-plugin-transition-link';
import posed from 'react-pose';
const Trans = posed.div({
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
});
export const EventsPostTemplate = ({
  title,
  leadText,
  gallery,
  review,
  author
}) => {
  const galleryArr = gallery.map(gallery => gallery.galleryimage);
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
              <div className="lead">
                <h1>{title}</h1>
              </div>
              <HTMLContent content={leadText} />
              <GalleryImage gallery={galleryArr} />
              <Review review={review} author={author} />
              <ModalButton />
            </PageContainer>
            <TransitionLink to={'/events'}>
              <ReadMore
                secondBtn
                to={'/events'}
                align={'flex-start'}
                text={'BACK TO EVENTS'}
              />
            </TransitionLink>
            <Footer />
          </Trans>
        );
      }}
    </TransitionState>
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
