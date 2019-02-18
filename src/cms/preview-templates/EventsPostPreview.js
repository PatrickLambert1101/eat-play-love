import React from 'react';
import { EventsPostTemplate } from '../../templates/events-post';

const EventsPostPreview = ({ entry, widgetFor }) => (
  <EventsPostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
    leadText={entry.getIn(['data', 'leadText'])}
    review={entry.getIn(['data', 'review'])}
    author={entry.getIn(['data', 'author'])}
  />
);

export default EventsPostPreview;
