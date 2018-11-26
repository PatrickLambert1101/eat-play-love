import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

export const OfferingsPageTemplate = ({ title }) => (
  <section className="section section--gradient">{title}</section>
);

OfferingsPageTemplate.propTypes = {
  title: PropTypes.string
};

const OfferingsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <OfferingsPageTemplate title={frontmatter.title} />
    </Layout>
  );
};

OfferingsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default OfferingsPage;

export const offeringsPageQuery = graphql`
  query OfferingsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`;
