import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import { kebabCase } from 'lodash';
import styled from 'styled-components';

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

    const BlogPostSingle = styled.div`
      margin: 10px auto 60px;
      h1 {
        margin-bottom: 0;
      }
      h4 {
        margin-bottom: 0px;
        margin-top: 10px;
      }
      small {
        margin-top: -20px;
        font-size: 10px;
        margin-bottom: 20px;
        display: inline-block;
      }
      ul {
        list-style: none;
        margin-bottom: 0;
        padding: 0;
        text-align: center;
      }
      li {
        display: inline-block;
        padding-left: 3px;
      }
      &__single li,
      a {
        color: ${props => props.theme.goldLight};
      }
    `;

    const ProductPostSingle = styled.div`
      width: 100%;
      margin: 30px;
    `;
    const ProductWrapper = styled.div`
      display: flex;
      justify-content: space-between;
    `;

    const theme = {
      goldLight: '#daa56b',
      goldDark: '#965711',
      greyButton: '#595959',
      grey: '#979797',
      pink: '#f9decf'
    };

    const { data } = this.props;
    const { edges: posts } = data.blogs;
    const { edges: products } = data.products;
    const { edges: instas } = data.instas;

    return (
      <Layout>
        <section className="page">
          <h2>Recent Posts</h2>
          {posts.map(({ node: post }) => (
            <BlogPostSingle className="content" key={post.id}>
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
            </BlogPostSingle>
          ))}
          <div className="content">
            <h2>New finds</h2>
            <ProductWrapper>
              {products.map(({ node: product }) => (
                <ProductPostSingle>
                  <Link key={product.fields.slug} to={product.fields.slug}>
                    <PreviewCompatibleImage
                      imageInfo={product.frontmatter.image}
                    />
                    <h4>{product.frontmatter.title}</h4>
                    <h4>{product.frontmatter.price}</h4>
                  </Link>
                </ProductPostSingle>
              ))}
            </ProductWrapper>
          </div>
          <div className="content">
            <h2>Instagram</h2>
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
