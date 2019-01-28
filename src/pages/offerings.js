import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import AltCard from '../components/styles/AltCard';
import AltCardWrap from '../components/styles/AltCardWrap';
import SideButton from '../components/styles/SideButton';
import Content from '../components/styles/Content';

export default class OfferingsPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: offerings } = data.offerings;

    return (
      <div>
        <Content>
          <h1>Offerings</h1>
          {offerings.map(({ node: offering }) => (
            <AltCardWrap key={offering.id}>
              <Link to={offering.fields.slug}>
                <PreviewCompatibleImage
                  key={offering.frontmatter.image.id}
                  imageInfo={offering.frontmatter.image}
                />
              </Link>
              <AltCard>
                <Link to={offering.fields.slug}>
                  <h2>{offering.frontmatter.title}</h2>
                </Link>
                <h4>{offering.frontmatter.excerpt}</h4>
                <Link to={offering.fields.slug} className="read-more">
                  Read More
                </Link>
              </AltCard>
            </AltCardWrap>
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
                fluid(maxWidth: 410, maxHeight: 410, quality: 80) {
                  ...GatsbyImageSharpFluid_withWebp
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
