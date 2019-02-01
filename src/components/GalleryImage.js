import React from 'react';
import Gallery from 'react-photo-gallery';
import GalleryStyle from './styles/GalleryStyle';
var shortid = require('shortid');

class GalleryImage extends React.Component {
  render() {
    const width = [4, 1, 3, 5, 2, 3];
    const height = [2, 4, 1, 5, 2, 3];
    const images = this.props.gallery.map((image, i) => ({
      src: image.galleryimage.childImageSharp.fluid.src,
      srcSet: image.galleryimage.childImageSharp.fluid.srcSet,
      sizes: image.galleryimage.childImageSharp.fluid.sizes,
      width: width[i],
      height: height[i],
      key: shortid.generate()
    }));

    console.log('TCL: render -> images', images);

    return (
      <GalleryStyle>
        <Gallery photos={images} />;
      </GalleryStyle>
    );
  }
}

export default GalleryImage;
