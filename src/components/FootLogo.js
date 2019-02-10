import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';

const FootLogo = () => (
  <StaticQuery
    query={graphql`
      query FooterLogoQuery {
        file(relativePath: { regex: "img/footer-logo.png/" }) {
          name
          childImageSharp {
            fluid(maxWidth: 400, maxHeight: 360, quality: 65) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <PreviewCompatibleImage imageInfo={data.file} />}
  />
);

export default FootLogo;
