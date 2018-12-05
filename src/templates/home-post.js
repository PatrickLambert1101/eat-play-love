import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';

const HomePost = () => {
  return (
    <Layout>
      <h1>test</h1>
    </Layout>
  );
};

HomePost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default HomePost;
