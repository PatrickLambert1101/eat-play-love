import React from 'react';
import GalleryStyle from './styles/GalleryStyle';
import PreviewCompatibleImage from './PreviewCompatibleImage';
var shortid = require('shortid');

class GalleryImage extends React.Component {
  render() {
    return (
      <GalleryStyle>
        {this.props.gallery.map(image => (
          <PreviewCompatibleImage
            key={shortid.generate()}
            imageInfo={image.galleryimage}
          />
        ))}
      </GalleryStyle>
    );
  }
}

export default GalleryImage;
