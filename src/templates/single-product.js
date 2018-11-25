import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

export const SingleProductTemplate = ({
  content,
  contentComponent,
  description,
  image,
  tags,
  title,
  helmet
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="content blog-posts blog-posts__single">
      {helmet || ''}

      <h1>{title}</h1>
      <ul>
        {tags && tags.length
          ? tags.map((tag, i) => (
              <li className="tag-link" key={tag + `tag`}>
                <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                {i < tags.length - 1 && i !== tags.length - 2 ? ',' : ' '}
                {i === tags.length - 2 && tags.length > 1 ? 'and' : ' '}
              </li>
            ))
          : null}
      </ul>
      <PreviewCompatibleImage imageInfo={image} />
    </section>
  );
};

SingleProductTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  image: PropTypes.object,
  title: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet)
};

const SingleProduct = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <SingleProductTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={<Helmet title={`${post.frontmatter.title} | Blog`} />}
        tags={post.frontmatter.tags}
        image={post.frontmatter.image}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

SingleProduct.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default SingleProduct;

export const pageQuery = graphql`
  query ProductById($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 1100, maxHeight: 400, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`;
