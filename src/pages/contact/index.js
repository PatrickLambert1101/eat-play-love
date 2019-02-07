import React from 'react';
import PageContainer from '../../components/styles/PageContainer.js';
import ContactForm from '../../components/ContactForm.js';
import Footer from '../../components/Footer';

export default class Index extends React.Component {
  render() {
    return (
      <PageContainer>
        <div className="lead">
          <h1>Contact</h1>
        </div>
        <ContactForm />
        <Footer />
      </PageContainer>
    );
  }
}
