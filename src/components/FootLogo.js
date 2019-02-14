import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const FootLogo = () => (
  <StaticQuery
    query={graphql`
      query FooterLogoQuery {
        file(relativePath: { regex: "img/footer-logo.png/" }) {
          name
          childImageSharp {
            fluid(maxWidth: 120, maxHeight: 118, quality: 65) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <AniLink fade to="/">
        <PreviewCompatibleImage imageInfo={data.file} />
      </AniLink>
    )}
  />
);

export default FootLogo;
