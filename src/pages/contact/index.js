import React from 'react';
import PageContainer from '../../components/styles/PageContainer';
import ContactForm from '../../components/ContactForm';
import PageTitle from '../../components/PageTitle';
import Layout from '../../components/layout';
import AnimateContent from '../../components/AnimateContent';

export default class Index extends React.Component {
  render() {
    return (
      <Layout location={this.props.location.pathname}>
        <PageContainer>
          <AnimateContent>
            <PageTitle title={'Contact'} />
          </AnimateContent>
          <ContactForm />
        </PageContainer>
      </Layout>
    );
  }
}
