import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';

const HeadLogo = () => (
  <StaticQuery
    query={graphql`
      query NavbarQuery {
        file(relativePath: { regex: "img/epl.png/" }) {
          name
          childImageSharp {
            fluid(maxWidth: 580, maxHeight: 160, quality: 80) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `}
    render={data => <PreviewCompatibleImage imageInfo={data.file} />}
  />
);

export default HeadLogo;
