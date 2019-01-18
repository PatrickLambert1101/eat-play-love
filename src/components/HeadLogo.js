import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';

const HeadLogo = () => (
  <StaticQuery
    query={graphql`
      query NavbarQuery {
        file(relativePath: { regex: "img/epl.png/" }) {
          childImageSharp {
            fluid(maxWidth: 480, maxHeight: 140, quality: 80) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => <PreviewCompatibleImage imageInfo={data.file} />}
  />
);

export default HeadLogo;
