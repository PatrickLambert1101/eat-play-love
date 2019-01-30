import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Slider from 'react-slick';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import Card from '../components/styles/Card';
import CardWrap from '../components/styles/CardWrap';
import BannerSlider from '../components/styles/BannerSlider';
// import InstaSlider from '../components/styles/InstaSlider';
var shortid = require('shortid');

export default class IndexPage extends React.Component {
  render() {
    // var settings = {
    //   dots: true,
    //   infinite: true,
    //   slidesToShow: 3,
    //   arrows: false,
    //   autoPlay: true,
    //   className: 'instafeed',
    //   speed: 500,
    //   slidesToScroll: 1
    // };
    var bannerSettingsMobile = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      arrows: false,
      autoPlay: true,
      className: 'mobile',
      speed: 500,
      slidesToScroll: 1
    };
    var bannerSettingsDesktop = {
      dots: false,
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
    // const { edges: instas } = data.instas;

    return (
      <div className="home">
        {home.map(({ node: house }) => (
          <div key={shortid.generate()}>
            <BannerSlider>
              <Slider {...bannerSettingsMobile}>
                {house.frontmatter.slider.map(({ sliderimage }) => (
                  <PreviewCompatibleImage
                    key={sliderimage.id}
                    imageInfo={sliderimage}
                  />
                ))}
              </Slider>
              <Slider {...bannerSettingsDesktop}>
                {house.frontmatter.slider.map(({ sliderimage }) => (
                  <PreviewCompatibleImage
                    key={sliderimage.id}
                    imageInfo={sliderimage}
                  />
                ))}
              </Slider>
            </BannerSlider>
            <CardWrap>
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
                  <Link
                    to={`/${card.title.toLowerCase()}`}
                    className="read-more"
                  >
                    Read More
                  </Link>
                </Card>
              ))}
            </CardWrap>
          </div>
        ))}
        <h2 className="lg-mg">Instagram</h2>
      </div>
    );
  }
}
// <InstaSlider>
//   <Slider {...settings}>
//     {instas.map(({ node: ig }) => (
//       <PreviewCompatibleImage
//         className="insta-image"
//         key={ig.id}
//         imageInfo={ig.localFile}
//       />
//     ))}
//   </Slider>
// </InstaSlider>

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query IndexQuery {
    # instas: allInstaNode(limit: 5) {
    #   edges {
    #     node {
    #       id
    #       likes
    #       comments
    #       original
    #       timestamp
    #       localFile {
    #         childImageSharp {
    #           fluid(maxWidth: 267, maxHeight: 267, quality: 50) {
    #             ...GatsbyImageSharpFluid_withWebp
    #           }
    #         }
    #       }
    #       thumbnails {
    #         src
    #         config_width
    #         config_height
    #       }
    #       dimensions {
    #         height
    #         width
    #       }
    #     }
    #   }
    # }
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
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            cards {
              image {
                id
                childImageSharp {
                  fluid(maxWidth: 1650, maxHeight: 750, quality: 65) {
                    ...GatsbyImageSharpFluid_withWebp
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
