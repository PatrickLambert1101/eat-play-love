export default OfferingsPagePreview;


import React from 'react'
import PropTypes from 'prop-types'
import { OfferingsPageTemplate } from '../../templates/offerings-page'

const OfferingsPagePreview = ({ entry, widgetFor }) => (
  <OfferingsPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

OfferingsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default OfferingsPagePreview
