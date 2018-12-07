import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import Slider from 'react-slick';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import styled from 'styled-components';
import Image from 'gatsby-image';

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
      slidesToShow: 3,
      arrows: false,
      autoPlay: true,
      className: 'instafeed',
      speed: 500,
      slidesToScroll: 1
    };
    var bannerSettings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      arrows: false,
      autoPlay: true,
      className: 'banner-slide',
      speed: 500,
      slidesToScroll: 1
    };
    const BannerSlider = styled.div`
      max-width: 1500px;
      margin: auto;
      padding: 0 20px;
      @media (max-width: 900px) {
        padding: 0;
      }
    `;
    const InstaSlider = styled.div`
      max-width: 1000px;
      margin: auto;
      padding: 0 20px;
      @media (max-width: 900px) {
        padding: 0;
      }
    `;

    const Card = styled.div`
      max-width: 1000px;
      text-align: center;
      margin: auto;
    `;

    // const theme = {
    //   goldLight: '#daa56b',
    //   goldDark: '#965711',
    //   greyButton: '#595959',
    //   grey: '#979797',
    //   pink: '#f9decf'
    // };

    const { data } = this.props;
    const { edges: home } = data.home;
    const { edges: instas } = data.instas;

    return (
      <Layout className="home">
        {home.map(({ node: house }) => (
          <div>
            <BannerSlider>
              <Slider {...bannerSettings}>
                {house.frontmatter.slider.map(({ sliderimage }) => (
                  <Image
                    key={sliderimage.id}
                    fixed={sliderimage.childImageSharp.fixed}
                  />
                ))}
              </Slider>
            </BannerSlider>
            {house.frontmatter.cards.map(card => (
              <Card key={card.title}>
                <Link to={`/${card.title.toLowerCase()}`}>
                  <h2>{card.title}</h2>
                </Link>
                <Link to={`/${card.title.toLowerCase()}`}>
                  <PreviewCompatibleImage
                    key={card.image.id}
                    imageInfo={card.image}
                  />{' '}
                </Link>

                <p key={card.text}>{card.text}</p>
              </Card>
            ))}
          </div>
        ))}
        <h2>Instagram</h2>
        <InstaSlider>
          <Slider {...settings}>
            {instas.map(({ node: ig }) => (
              <PreviewCompatibleImage
                className="insta-image"
                key={ig.id}
                imageInfo={ig.localFile}
              />
            ))}
          </Slider>
        </InstaSlider>
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
    home: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "home-post" } } }
    ) {
      edges {
        node {
          frontmatter {
            slider {
              sliderimage {
                id
                childImageSharp {
                  fixed(width: 1500, height: 500, quality: 80) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
            cards {
              image {
                id
                childImageSharp {
                  fluid(maxWidth: 900, maxHeight: 400, quality: 80) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              title
              text
            }
          }
        }
      }
    }
  }
`;
