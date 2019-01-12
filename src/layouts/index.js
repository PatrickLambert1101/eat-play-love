import React from 'react';
import Helmet from 'react-helmet';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Transition from '../components/Transition';
import './all.sass';

const TemplateWrapper = ({ children, location }) => (
  <div>
    <Helmet title="Home | Gatsby + Netlify CMS" />
    <Navbar />
    <Transition location={location}>{children}</Transition>
    <Footer />
  </div>
);

export default TemplateWrapper;
