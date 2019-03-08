import React from 'react';
import Img from 'gatsby-image';
import AnimateImage from './AnimateImage';
const PreviewCompatibleImage = ({ imageInfo, imgStyle, scale }) => {
  const { alt = '', childImageSharp } = imageInfo;

  if (!!childImageSharp) {
    if (scale) {
      return (
        <AnimateImage>
          <Img imgStyle={imgStyle} fluid={childImageSharp.fluid} alt={alt} />
        </AnimateImage>
      );
    }
    return <Img imgStyle={imgStyle} fluid={childImageSharp.fluid} alt={alt} />;
  }
  return null;
};

export default PreviewCompatibleImage;
