import React from 'react';
import { EventsPostTemplate } from '../../templates/events-post';

const EventsPostPreview = ({ entry, widgetFor }) => (
  <EventsPostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
);

export default EventsPostPreview;
