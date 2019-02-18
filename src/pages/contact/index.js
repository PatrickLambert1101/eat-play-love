import React from 'react';
import PageContainer from '../../components/styles/PageContainer';
import ContactForm from '../../components/ContactForm';
import PageTitle from '../../components/PageTitle';
import Footer from '../../components/Footer';
import { TransitionState } from 'gatsby-plugin-transition-link';
import AnimateContent from '../../components/AnimateContent';
import Trans from '../../components/Trans';

export default class Index extends React.Component {
  render() {
    return (
      <TransitionState>
        {({ transitionStatus }) => {
          return (
            <Trans
              pose={
                ['entering', 'entered'].includes(transitionStatus)
                  ? 'visible'
                  : 'hidden'
              }
            >
              <PageContainer>
                <AnimateContent>
                  <PageTitle title={'Contact'} />
                </AnimateContent>
                <ContactForm />
              </PageContainer>
              <Footer />
            </Trans>
          );
        }}
      </TransitionState>
    );
  }
}
