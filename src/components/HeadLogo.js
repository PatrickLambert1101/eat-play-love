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
            fluid(maxWidth: 530, maxHeight: 148, quality: 80) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => <PreviewCompatibleImage imageInfo={data.file} />}
  />
);

export default HeadLogo;
