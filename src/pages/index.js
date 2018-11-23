import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import { kebabCase } from 'lodash';
import Slider from 'react-slick';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

import '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';

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
    var settings = {
      dots: true,
      infinite: true,
      centerMode: true,
      slidesToShow: 3,
      autoPlay: true,
      className: 'insta-slide',
      speed: 500,
      slidesToScroll: 1
    };
    const { data } = this.props;
    const { edges: posts } = data.blogs;
    const { edges: products } = data.products;
    const { edges: instas } = data.instas;

    return (
      <Layout>
        <section className="page">
          <h2>Recent Pjosts</h2>
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
                    i !== post.frontmatter.tags.length - 2
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
          <div className="content">
            <h2>New finds</h2>
            <div className="product-thumbs">
              {products.map(({ node: product }) => (
                <Link
                  className="no-under product-thumb"
                  key={product.fields.slug}
                  to={product.fields.slug}
                >
                  <Link className="has-text-primary" to={product.fields.slug}>
                    <PreviewCompatibleImage
                      imageInfo={product.frontmatter.image}
                    />
                  </Link>
                  <h4>{product.frontmatter.title}</h4>
                  <h4>{product.frontmatter.price}</h4>
                </Link>
              ))}
            </div>
          </div>
          <div className="content">
            <h2>Insta</h2>
            <div className="insta-feed">
              <Slider {...settings}>
                {instas.map(({ node: ig }) => (
                  <PreviewCompatibleImage
                    className="insta-image"
                    key={ig.id}
                    imageInfo={ig.localFile}
                  />
                ))}
              </Slider>
            </div>
          </div>
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
    instas: allInstaNode(limit: 5) {
      edges {
        node {
          id
          likes
          comments
          original
          timestamp
          localFile {
            childImageSharp {
              fluid(maxWidth: 400, maxHeight: 400, quality: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          thumbnails {
            src
            config_width
            config_height
          }
          dimensions {
            height
            width
          }
        }
      }
    }
    blogs: allMarkdownRemark(
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
    products: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 3
      filter: { frontmatter: { templateKey: { eq: "single-product" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            image {
              childImageSharp {
                fluid(maxWidth: 350, maxHeight: 350, quality: 80) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            tags
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
