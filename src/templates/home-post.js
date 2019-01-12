import React from 'react';
import PropTypes from 'prop-types';

const HomePost = () => {
  return (
    <div>
      <h1>test</h1>
    </div>
  );
};

HomePost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default HomePost;
