import React from 'react';
import Img from 'gatsby-image';

const PreviewCompatibleImage = ({ imageInfo }) => {
  const { alt = '', childImageSharp } = imageInfo;

  if (!!childImageSharp) {
    return <Img fluid={childImageSharp.fluid} alt={alt} />;
  }
  return null;
};

export default PreviewCompatibleImage;
