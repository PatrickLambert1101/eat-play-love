import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const PreviewCompatibleImage = ({ imageInfo }) => {
  console.log(imageInfo);
  console.log(imageInfo.childImageSharp.fluid.src);
  const { alt = '', childImageSharp } = imageInfo;
  if (!!childImageSharp) {
    return <Img fluid={childImageSharp.fluid} alt={alt} />;
  }
  return null;
};

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object
  }).isRequired
};

export default PreviewCompatibleImage;
