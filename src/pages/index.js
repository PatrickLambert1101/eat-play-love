import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import { kebabCase } from 'lodash';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

import '../../static/fonts/OstrichSans-Medium.eot';
import '../../static/fonts/OstrichSans-Medium.svg';
import '../../static/fonts/OstrichSans-Medium.ttf';
import '../../static/fonts/OstrichSans-Medium.woff';
import '../../static/fonts/OstrichSans-Medium.woff2';
import '../../static/fonts/Georgia.eot';
import '../../static/fonts/Georgia.svg';
import '../../static/fonts/Georgia.ttf';
import '../../static/fonts/Georgia.woff';
import '../../static/fonts/Georgia.woff2';
import '../../static/fonts/RedVevet.eot';
import '../../static/fonts/RedVevet.svg';
import '../../static/fonts/RedVevet.ttf';
import '../../static/fonts/RedVevet.woff';
import '../../static/fonts/RedVevet.woff2';
import './font-face.css';

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Layout>
        <section className="content">
          <h2>Recent Posts</h2>
          {posts.map(({ node: post }) => (
            <div className="content blog-posts" key={post.id}>
              <Link className="has-text-primary" to={post.fields.slug}>
                <PreviewCompatibleImage imageInfo={post.frontmatter.image} />
              </Link>
              <ul>
                {post.frontmatter.tags.map((tag, i) => (
                  <li className="tag-link" key={tag + `tag`}>
                    <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    {i < post.frontmatter.tags.length - 1 &&
                    i != post.frontmatter.tags.length - 2
                      ? ','
                      : ' '}
                    {i === post.frontmatter.tags.length - 2 &&
                    post.frontmatter.tags.length > 1
                      ? 'and'
                      : ' '}
                  </li>
                ))}
              </ul>
              <Link className="no-under" to={post.fields.slug}>
                <h4>{post.frontmatter.title}</h4>
              </Link>
              <small>{post.frontmatter.date}</small>
              <p>
                {post.excerpt}
                <br />
                <br />
                <Link className="button button-primary" to={post.fields.slug}>
                  Read More
                </Link>
              </p>
            </div>
          ))}
          <h2>New finds</h2>
        </section>
      </Layout>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 2
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            image {
              childImageSharp {
                fluid(maxWidth: 1100, maxHeight: 400, quality: 80) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
            tags
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
