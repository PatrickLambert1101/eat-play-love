import React from 'react';
import PageContainer from '../../components/styles/PageContainer.js';
import ContactForm from '../../components/ContactForm.js';

export default class Index extends React.Component {
  render() {
    return (
      <PageContainer>
        <h1>Contact</h1>
        <ContactForm />
      </PageContainer>
    );
  }
}
