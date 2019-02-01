import React from 'react';
import Gallery from 'react-photo-gallery';
import PreviewCompatibleImage from './PreviewCompatibleImage';
import GalleryStyle from './styles/GalleryStyle';

class GalleryImage extends React.Component {
  render() {
    const raw = this.props.gallery.map(
      image => image.galleryimage.childImageSharp.fluid
    );
    const allowed = ['src', 'srcSet', 'sizes'];
    const images = Object.keys(raw)
      .filter(key => allowed.includes(key))
      .reduce((obj, key) => {
        obj[key] = raw[key];
        return obj;
      }, {});
    console.log('TCL: render -> images', images);

    return <Gallery photos={images} />;
  }
}

export default GalleryImage;
