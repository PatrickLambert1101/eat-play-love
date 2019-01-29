import React from 'react';
import {
  TransitionGroup,
  Transition as ReactTransition
} from 'react-transition-group';
var shortid = require('shortid');

//This variable will be responsible for our animation duration
const timeout = 600;

//This object contains basic styles for animation, but you can extend them to whatever you like. Be creative!
const getTransitionStyles = {
  entering: {
    position: 'absolute',
    opacity: 0
  },
  entered: {
    transition: `opacity ${timeout}ms ease-in-out`,
    opacity: 1
  },
  exiting: {
    transition: `all ${timeout}ms ease-in-out`,
    opacity: 0
  }
};

class Transition extends React.PureComponent {
  render() {
    //Destructuring props to avoid garbage this.props... in return statement
    const { children, location } = this.props;

    return (
      //Using TransitionGroup and ReactTransition which are both
      //coming from  'react-transition-group' and are required for transitions to work
      <TransitionGroup key={shortid.generate()}>
        <ReactTransition
          //the key is necessary here because our ReactTransition needs to know when pages are entering/exiting the DOM
          key={shortid.generate()}
          //duration of transition
          timeout={{
            enter: timeout,
            exit: timeout
          }}
        >
          {//Application of the styles depending on the status of page(entering, exiting, entered) in the DOM
          status => (
            <div
              key={shortid.generate()}
              style={{
                ...getTransitionStyles[status]
              }}
            >
              {children}
            </div>
          )}
        </ReactTransition>
      </TransitionGroup>
    );
  }
}

export default Transition;
