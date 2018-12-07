import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import Slider from 'react-slick';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import styled from 'styled-components';

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

export default class OfferingsPage extends React.Component {
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
    var bannerSettings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      autoPlay: true,
      className: 'banner-slide',
      speed: 500,
      slidesToScroll: 1
    };
    const Content = styled.div`
      max-width: 1000px;
      margin: auto;
    `;

    const Item = styled.div`
      display: flex;
      justify-content: center;
      margin-bottom: 30px;
      & > * {
        flex: 1;
        padding: 0 20px;
      }
      h2 {
        text-align: left;
      }
      &:nth-child(2n + 1) {
        flex-direction: row-reverse;
      }
    `;

    const { data } = this.props;
    const { edges: offerings } = data.offerings;

    return (
      <Layout>
        <Content>
          <h1>Offerings</h1>
          {offerings.map(({ node: offering }) => (
            <Item>
              <Link to={offering.fields.slug}>
                <PreviewCompatibleImage
                  key={offering.frontmatter.image.id}
                  imageInfo={offering.frontmatter.image}
                />
              </Link>
              <div>
                <Link to={offering.fields.slug}>
                  <h2>{offering.frontmatter.title}</h2>
                </Link>
                <h5>{offering.frontmatter.excerpt}</h5>
              </div>
            </Item>
          ))}
        </Content>
      </Layout>
    );
  }
}

OfferingsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query OfferingsQuery {
    offerings: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "offerings-post" } } }
    ) {
      edges {
        node {
          html
          fields {
            slug
          }
          frontmatter {
            title
            image {
              childImageSharp {
                fluid(maxWidth: 400, maxHeight: 400, quality: 80) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            excerpt
          }
        }
      }
    }
  }
`;
