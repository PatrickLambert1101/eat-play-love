import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';
import TransitionLink from 'gatsby-plugin-transition-link';

const FootLogo = () => (
  <StaticQuery
    query={graphql`
      query FooterLogoQuery {
        file(relativePath: { regex: "img/footer-logo.png/" }) {
          name
          childImageSharp {
            fluid(maxWidth: 180, maxHeight: 177, quality: 65) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <TransitionLink to="/">
        <PreviewCompatibleImage imageInfo={data.file} />
      </TransitionLink>
    )}
  />
);

export default FootLogo;
