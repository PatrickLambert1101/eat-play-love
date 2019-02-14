import React from 'react';
import PageContainer from '../../components/styles/PageContainer.js';
import ContactForm from '../../components/ContactForm.js';
import Footer from '../../components/Footer';
import { TransitionState } from 'gatsby-plugin-transition-link';
import posed from 'react-pose';
const Trans = posed.div({
  hidden: {
    y: 50,
    opacity: 0,
    transition: {
      y: { type: 'spring', stiffness: 100, damping: 15 },
      default: { duration: 150 }
    }
  },
  visible: {
    y: 0,
    opacity: 1,
    delay: 300,
    transition: {
      y: { type: 'spring', stiffness: 100, damping: 15 },
      default: { duration: 150 }
    }
  }
});

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
                <div className="lead">
                  <h1>Contact</h1>
                </div>
                <ContactForm />
                <Footer />
              </PageContainer>
              <Footer />
            </Trans>
          );
        }}
      </TransitionState>
    );
  }
}
