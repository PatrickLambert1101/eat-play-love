import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import Content, { HTMLContent } from '../components/Content';

export const OfferingsPostTemplate = ({ title }) => {
  return (
    <section>
      <h1>{title}</h1>
    </section>
  );
};

OfferingsPostTemplate.propTypes = {
  title: PropTypes.string
};

const OfferingsPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      asdfasdfasdf
      <OfferingsPostTemplate title={post.frontmatter.title} />
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
      frontmatter {
        title
      }
    }
  }
`;
