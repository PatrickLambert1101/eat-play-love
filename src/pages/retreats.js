import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
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

export default class RetreatsPage extends React.Component {
  render() {
    const Content = styled.div`
      max-width: 900px;
      margin: auto;
      h1 {
        margin-bottom: 4rem;
      }
    `;
    const SideButton = styled.div`
      display: flex;
      justify-content: flex-end;
      a {
        background-color: #f9decf;
        padding: 15px 17px;
        font-size: 1.3em;
        h4 {
          color: #824706;
          margin: 0;
        }
      }
    `;

    const Card = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      h2 {
        margin-top: 0;
      }
      h4 {
        margin: 0;
      }
      @media (max-width: 480px) {
        align-items: center;
        margin-bottom: 15px;
        h2 {
          margin-top: 15px;
        }
      }
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
      @media (max-width: 900px) {
        flex-direction: column;
        text-align: center;
        h2 {
          text-align: center;
        }
        &:nth-child(2n + 1) {
          flex-direction: column;
        }
      }
    `;

    const { data } = this.props;
    console.log('data:', data);
    const { edges: retreats } = data.retreats;

    return (
      <div>
        <Content>
          <h1>Retreats</h1>
          {retreats.map(({ node: retreat }) => (
            <Item>
              <Link to={retreat.fields.slug}>
                <PreviewCompatibleImage
                  key={retreat.frontmatter.image.id}
                  imageInfo={retreat.frontmatter.image}
                />
              </Link>
              <Card>
                <Link to={retreat.fields.slug}>
                  <h2>{retreat.frontmatter.title}</h2>
                </Link>
                <h4>{retreat.frontmatter.excerpt}</h4>
                <Link to={retreat.fields.slug} className="read-more">
                  Read More
                </Link>
              </Card>
            </Item>
          ))}
        </Content>
        <SideButton>
          <Link to={'/contact'}>
            <h4>Contact us for more info</h4>
          </Link>
        </SideButton>
      </div>
    );
  }
}

RetreatsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query RetreatsQuery {
    retreats: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "retreats-post" } } }
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
                fluid(maxWidth: 410, maxHeight: 410, quality: 80) {
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
