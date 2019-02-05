import React from 'react';
import PropTypes from 'prop-types';

const RetreatsPage = () => {
  return (
    <div>
      <h1>test</h1>
    </div>
  );
};

RetreatsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default RetreatsPage;
