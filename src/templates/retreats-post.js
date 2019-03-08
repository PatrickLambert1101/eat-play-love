import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import TransitionLink from 'gatsby-plugin-transition-link';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import ModalButton from '../components/ModalButton';
import PageTitle from '../components/PageTitle';
import GalleryImage from '../components/GalleryImage';
import Review from '../components/Review';
import Content, { HTMLContent } from '../components/Content';
import ReadMore from '../components/ReadMore';
import PageContainer from '../components/styles/PageContainer';
import AnimateContent from '../components/AnimateContent';
import Layout from '../components/layout';

export const RetreatsPostTemplate = ({
  title,
  image,
  content,
  gallery,
  review,
  author,
  contentComponent
}) => {
  const galleryArr = gallery.map(gallery => gallery.galleryimage);
  const PageContent = contentComponent || Content;
  return (
    <Layout location={this.props.location.pathname}>
      <PageContainer>
        <AnimateContent>
          <PageTitle
            title={title}
            subtitle={'Hearth &amp; Soul Eco Farm Stanford 5th-8th October'}
          />
          <PreviewCompatibleImage imageInfo={image} />
          <PageContent content={content} className="body-text" />
          <ModalButton eventName={title} />
        </AnimateContent>
        <GalleryImage gallery={galleryArr} />
        <AnimateContent>
          <Review review={review} author={author} />
          <TransitionLink to={'/retreats'}>
            <ReadMore text={'Back to retreats'} />
          </TransitionLink>
        </AnimateContent>
      </PageContainer>
    </Layout>
  );
};

RetreatsPostTemplate.propTypes = {
  title: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  content: PropTypes.node.isRequired
};

const RetreatsPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <div>
      <RetreatsPostTemplate
        title={post.frontmatter.title}
        image={post.frontmatter.image}
        review={post.frontmatter.review}
        author={post.frontmatter.author}
        gallery={post.frontmatter.gallery}
        contentComponent={HTMLContent}
        content={post.html}
      />
    </div>
  );
};

RetreatsPost.propTypes = {
  contentComponent: PropTypes.func,
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default RetreatsPost;

export const pageQuery = graphql`
  query RetreatsPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 900, maxHeight: 450, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
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
