import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Content, { HTMLContent } from '../components/Content';
import PageContainer from '../components/styles/PageContainer';
import ContactForm from '../components/ContactForm';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

export const AboutPageTemplate = ({
  title,
  content,
  aboutImage,
  contentComponent
}) => {
  const PageContent = contentComponent || Content;

  return (
    <PageContainer>
      <div className="lead">
        <h1> {title}</h1>
        <PageContent className="content" content={content} />
      </div>
      <PreviewCompatibleImage imageInfo={aboutImage} />
      <h2>Contact us</h2>
      <ContactForm />
    </PageContainer>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  aboutImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
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
        aboutImage {
          childImageSharp {
            fluid(maxWidth: 1650, maxHeight: 600, quality: 80) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
