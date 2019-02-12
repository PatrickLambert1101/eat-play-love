import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';
const imgStyles = { objectFit: 'contain' };

const FootLogo = () => (
  <StaticQuery
    query={graphql`
      query FooterLogoQuery {
        file(relativePath: { regex: "img/footer-logo.png/" }) {
          name
          childImageSharp {
            fluid(maxWidth: 291, maxHeight: 262, quality: 65) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <PreviewCompatibleImage imgStyle={imgStyles} imageInfo={data.file} />
    )}
  />
);

export default FootLogo;
