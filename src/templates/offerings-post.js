import React from 'react';
import PropTypes from 'prop-types';
// import { kebabCase } from 'lodash';
// import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import Content, { HTMLContent } from '../components/Content';

export const OfferingsPostTemplate = ({ title, image, content, blurb }) => {
  return (
    <section>
      <h1>{title}</h1>
      <PostContent content={content} />
      <PreviewCompatibleImage imageInfo={image} />
      <p>{blurb}</p>
    </section>
  );
};

const PostContent = Content;

OfferingsPostTemplate.propTypes = {
  title: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  content: PropTypes.node.isRequired,
  blurb: PropTypes.string
};

const OfferingsPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <OfferingsPostTemplate
        title={post.frontmatter.title}
        image={post.frontmatter.image}
        blurb={post.frontmatter.blurb}
        content={post.html}
      />
    </Layout>
  );
};

OfferingsPost.propTypes = {
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
            fluid(maxWidth: 400, maxHeight: 400, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        blurb
      }
    }
  }
`;
