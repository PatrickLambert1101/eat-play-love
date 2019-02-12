import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Slider from 'react-slick';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import CardWrapper from '../components/CardWrapper';
import BannerSlider from '../components/styles/BannerSlider';
import Footer from '../components/Footer';
import InstaSlider from '../components/styles/InstaSlider';
import InstaGallery from '../components/styles/InstaGallery';
import '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';
var shortid = require('shortid');

export default class IndexPage extends React.Component {
  render() {
    var settings = {
      infinite: true,
      slidesToShow: 5,
      arrows: false,
      autoPlay: true,
      className: 'instafeed',
      speed: 500,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            dots: false
          }
        }
      ]
    };
    var bannerSettingsMobile = {
      infinite: true,
      slidesToShow: 1,
      arrows: false,
      autoPlay: true,
      className: 'mobile',
      speed: 500,
      slidesToScroll: 1
    };
    var bannerSettingsDesktop = {
      infinite: true,
      slidesToShow: 1,
      arrows: false,
      autoPlay: true,
      className: 'desktop',
      speed: 500,
      slidesToScroll: 1
    };

    const { data } = this.props;
    const { edges: home } = data.home;
    const { edges: instas } = data.instas;
    const { edges: events } = data.events;

    return (
      <React.Fragment>
        {home.map(({ node: house }) => (
          <div key={shortid.generate()}>
            <BannerSlider>
              <Slider {...bannerSettingsMobile}>
                {house.frontmatter.slider.map(slide => (
                  <div key={shortid.generate()}>
                    <h2>{slide.title}</h2>
                    <PreviewCompatibleImage imageInfo={slide.sliderimage} />
                  </div>
                ))}
              </Slider>
              <Slider {...bannerSettingsDesktop}>
                {house.frontmatter.slider.map(slide => (
                  <div key={shortid.generate()}>
                    <h2>{slide.title}</h2>
                    <PreviewCompatibleImage imageInfo={slide.sliderimage} />
                  </div>
                ))}
              </Slider>
            </BannerSlider>
            <h2>Recent Events</h2>
            <CardWrapper baseUrl={'events'} data={events} />
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
        <InstaGallery>
          {instas.map(({ node: ig }) => (
            <PreviewCompatibleImage
              className="insta-image"
              key={ig.id}
              imageInfo={ig.localFile}
            />
          ))}
        </InstaGallery>
        <Footer />
      </React.Fragment>
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
    instas: allInstaNode(limit: 8) {
      edges {
        node {
          id
          likes
          comments
          original
          timestamp
          localFile {
            childImageSharp {
              fluid(maxWidth: 267, maxHeight: 267, quality: 50) {
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
    events: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "events-post" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            image {
              childImageSharp {
                fluid(maxWidth: 410, maxHeight: 380, quality: 80) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
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
                  fluid(maxWidth: 1650, maxHeight: 750, quality: 65) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              title
            }
          }
        }
      }
    }
  }
`;
