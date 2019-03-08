import React from 'react';
import GalleryStyle from './styles/GalleryStyle';
import PreviewCompatibleImage from './PreviewCompatibleImage';
import AnimateContent from '../components/AnimateContent';
var shortid = require('shortid');

export default function GalleryImage(props) {
  return (
    <GalleryStyle>
      {props.gallery.map((image, i) => (
        <div key={shortid.generate()}>
          <AnimateContent>
            <PreviewCompatibleImage scale imageInfo={image} />
          </AnimateContent>
        </div>
      ))}
    </GalleryStyle>
  );
}
