import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

const HeadLogo = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query NavbarQuery {
        file(relativePath: { regex: "img/epl.png/" }) {
          childImageSharp {
            fluid(maxWidth: 200, maxHeight: 100, quality: 80) {
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
