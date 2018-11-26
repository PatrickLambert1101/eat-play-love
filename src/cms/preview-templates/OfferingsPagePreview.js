import React from 'react';
import PropTypes from 'prop-types';
import { OfferingsPageTemplate } from '../../templates/offerings-page';

const OfferingsPagePreview = ({ entry }) => (
  <OfferingsPageTemplate title={entry.getIn(['data', 'title'])} />
);

OfferingsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  })
};

export default OfferingsPagePreview;
