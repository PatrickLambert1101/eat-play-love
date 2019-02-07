import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import ModalButton from '../components/ModalButton';
import GalleryImage from '../components/GalleryImage';
import Review from '../components/Review';
import Content, { HTMLContent } from '../components/Content';
import SingleSideButton from '../components/styles/SingleSideButton';
import PageContainer from '../components/styles/PageContainer';

export const RetreatsPostTemplate = ({
  title,
  image,
  content,
  gallery,
  review,
  author,
  contentComponent
}) => {
  const PageContent = contentComponent || Content;
  return (
    <div>
      <PageContainer>
        <h2>{title}</h2>
        <h5>
          Hearth &amp; Soul Eco Farm Stanford
          <br /> 5th-8th October
        </h5>
        <PreviewCompatibleImage imageInfo={image} />
        <PageContent content={content} className="body-text" />
        <ModalButton />
        <GalleryImage gallery={gallery} />
        <Review review={review} author={author} />
      </PageContainer>
      <SingleSideButton>
        <Link to={'/retreats'}>
          <h4>Back to retreats</h4>
        </Link>
      </SingleSideButton>
    </div>
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
              ...GatsbyImageSharpFluid_withWebp
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
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`;
