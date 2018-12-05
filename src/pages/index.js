import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
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
      max-width: 900px;
    `;
    const BannerSlider = styled.div`
      height: 100vh;
    `;

    const Card = styled.div`
      height: 100vh;
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
    // const { edges: instas } = data.instas;

    return (
      <Layout>
        <Content>
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
                  <PreviewCompatibleImage
                    key={card.image.id}
                    imageInfo={card.image}
                  />
                  <h3>{card.title}</h3>
                  <p key={card.text}>{card.text}</p>
                </Card>
              ))}
            </div>
          ))}
          <h2>Instagram</h2>
        </Content>
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
// <Slider {...settings}>
// {instas.map(({ node: ig }) => (
//   <PreviewCompatibleImage
//     className="insta-image"
//     key={ig.id}
//     imageInfo={ig.localFile}
//   />
// ))}
// </Slider>
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
    #           fluid(maxWidth: 400, maxHeight: 400, quality: 80) {
    #             ...GatsbyImageSharpFluid
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
                  fluid(maxWidth: 400, maxHeight: 400, quality: 80) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            cards {
              image {
                id
                childImageSharp {
                  fluid(maxWidth: 400, maxHeight: 400, quality: 80) {
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
