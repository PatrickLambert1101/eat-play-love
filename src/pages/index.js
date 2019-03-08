import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Slider from 'react-slick';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import CardWrapper from '../components/CardWrapper';
import Layout from '../components/layout';
import BannerSlider from '../components/styles/BannerSlider';
import InstaSlider from '../components/styles/InstaSlider';
import styled from 'styled-components';
import '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';
import AnimateContent from '../components/AnimateContent';

var shortid = require('shortid');

const Quote = styled.h4`
  font-style: italic;
  text-align: center;
`;

export default class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.page = React.createRef();
  }

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
          breakpoint: 800,
          settings: {
            slidesToShow: 3,
            dots: false
          }
        }
      ]
    };
    var bannerSettings = {
      infinite: true,
      slidesToShow: 1,
      arrows: false,
      autoPlay: true,
      speed: 500,
      slidesToScroll: 1
    };

    const { data } = this.props;
    const { edges: home } = data.home;
    const { edges: instas } = data.instas;
    const { edges: events } = data.events;
    return (
      <Layout location={this.props.location.pathname}>
        <div ref={n => (this.page = n)}>
          {home.map(({ node: house }) => (
            <div key={shortid.generate()}>
              <BannerSlider>
                <Slider {...bannerSettings}>
                  {house.frontmatter.slider.map(slide => (
                    <div key={shortid.generate()}>
                      <h2>{slide.title}</h2>
                      <PreviewCompatibleImage imageInfo={slide.sliderimage} />
                    </div>
                  ))}
                </Slider>
              </BannerSlider>
              <AnimateContent>
                <Quote>“{house.frontmatter.quote}”</Quote>
                <h2>Recent Events</h2>
              </AnimateContent>
              <CardWrapper baseUrl={'events'} data={events} />
            </div>
          ))}
          <AnimateContent>
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
          </AnimateContent>
        </div>
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
    instas: allInstaNode(limit: 9) {
      edges {
        node {
          id
          likes
          comments
          original
          timestamp
          localFile {
            childImageSharp {
              fluid(maxWidth: 180, maxHeight: 180, quality: 50) {
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
            quote
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
