import React from 'react';
import PageContainer from '../../components/styles/PageContainer.js';
import Footer from '../../components/Footer';
import AnimateContent from '../../components/AnimateContent';

export default () => (
  <div>
    <PageContainer>
      <AnimateContent>
        <h1>Thank you</h1>
        <h4>Your message has been sent</h4>
      </AnimateContent>
    </PageContainer>
    <Footer />
  </div>
);
