import React from 'react';
import PageContainer from '../components/styles/PageContainer';
import AnimateContent from '../components/AnimateContent';

const NotFoundPage = () => (
  <PageContainer>
    <AnimateContent>
      <h1>Error 404</h1>
      <h4>This page doesnt exsist</h4>
    </AnimateContent>
  </PageContainer>
);

export default NotFoundPage;
