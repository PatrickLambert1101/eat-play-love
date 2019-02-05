import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import ModalButton from '../components/ModalButton';
import Content, { HTMLContent } from '../components/Content';
import GalleryImage from '../components/GalleryImage';
import SingleSideButton from '../components/styles/SingleSideButton';
import Blurb from '../components/styles/Blurb';

export const OfferingsPostTemplate = ({
  title,
  image,
  content,
  gallery,
  blurb,
  contentComponent
}) => {
  const PageContent = contentComponent || Content;
  return (
    <div>
      <div className="content">
        <h1>Join us</h1>
        <h2>{title}</h2>
        <h5>
          Hearth &amp; Soul Eco Farm Stanford
          <br /> 5th-8th October
        </h5>
        <PreviewCompatibleImage imageInfo={image} />
        <PageContent content={content} />
        <ModalButton />
        <Blurb>{blurb}</Blurb>
        <GalleryImage gallery={gallery} />
      </div>
      <SingleSideButton>
        <Link to={'/offerings'}>
          <h4>Back to offerings</h4>
        </Link>
      </SingleSideButton>
    </div>
  );
};

OfferingsPostTemplate.propTypes = {
  title: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  content: PropTypes.node.isRequired,
  blurb: PropTypes.string
};

const OfferingsPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <div>
      <OfferingsPostTemplate
        title={post.frontmatter.title}
        image={post.frontmatter.image}
        blurb={post.frontmatter.blurb}
        gallery={post.frontmatter.gallery}
        contentComponent={HTMLContent}
        content={post.html}
      />
    </div>
  );
};

OfferingsPost.propTypes = {
  contentComponent: PropTypes.func,
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default OfferingsPost;

export const pageQuery = graphql`
  query OfferingsPostByID($id: String!) {
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
        blurb
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
