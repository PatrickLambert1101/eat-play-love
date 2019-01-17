import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Slider from 'react-slick';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import styled from 'styled-components';

export default class IndexPage extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      arrows: false,
      centerMode: true,
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
      max-width: 900px;
      margin: auto;
      padding: 0 20px;
      .slick-slide .gatsby-image-wrapper {
        padding: 5px;
      }
      .slick-dots button::before {
        color: #daa56b;
      }
      .slick-dots .slick-active button::before {
        color: #965711;
      }
      @media (max-width: 900px) {
        padding: 0;
      }
    `;

    const Card = styled.div`
      max-width: 900px;
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
      <div className="home">
        {home.map(({ node: house }) => (
          <div>
            <BannerSlider>
              <Slider {...bannerSettings}>
                {house.frontmatter.slider.map(({ sliderimage }) => (
                  <PreviewCompatibleImage
                    key={sliderimage.id}
                    imageInfo={sliderimage}
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
                  />
                </Link>
                <p key={card.text}>{card.text}</p>
                <Link to={`/${card.title.toLowerCase()}`} className="read-more">
                  Read More
                </Link>
              </Card>
            ))}
          </div>
        ))}
        <h2 className="lg-mg">Instagram</h2>
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
      </div>
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
                  fluid(maxWidth: 1500, maxHeight: 420, quality: 80) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            cards {
              image {
                id
                childImageSharp {
                  fluid(maxWidth: 900, maxHeight: 428, quality: 80) {
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
