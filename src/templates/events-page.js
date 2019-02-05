import React from 'react';
import PropTypes from 'prop-types';

const EventsPage = () => {
  return (
    <div>
      <h1>test</h1>
    </div>
  );
};

EventsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default EventsPage;
