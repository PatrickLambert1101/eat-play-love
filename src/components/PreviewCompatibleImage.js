import React from 'react';
import Img from 'gatsby-image';

const PreviewCompatibleImage = ({ imageInfo, imgStyle }) => {
  const { alt = '', childImageSharp } = imageInfo;

  if (!!childImageSharp) {
    return <Img imgStyle={imgStyle} fluid={childImageSharp.fluid} alt={alt} />;
  }
  return null;
};

export default PreviewCompatibleImage;
