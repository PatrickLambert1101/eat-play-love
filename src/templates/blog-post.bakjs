import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import Content, { HTMLContent } from '../components/Content';

export const BlogPostTemplate = ({
  content,
  contentComponent,
  tags,
  image,
  title,
  helmet
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section>
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

      <div className="blog-content">
        <PostContent content={content} />
      </div>
    </section>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  image: PropTypes.object,
  title: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet)
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        image={post.frontmatter.image}
        helmet={<Helmet title={`${post.frontmatter.title} | Blog`} />}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
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
