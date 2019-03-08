import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Content, { HTMLContent } from '../components/Content';
import PageContainer from '../components/styles/PageContainer';
import ContactForm from '../components/ContactForm';
import Layout from '../components/layout';

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <Layout location={'/about'}>
      <PageContainer>
        <div className="lead">
          <h1> {title}</h1>
        </div>
        <PageContent className="body-text" content={content} />
        <h2>Contact us</h2>
        <ContactForm />
      </PageContainer>
    </Layout>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <div>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        aboutImage={post.frontmatter.aboutImage}
        content={post.html}
      />
    </div>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
