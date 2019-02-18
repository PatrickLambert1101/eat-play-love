import React, { Component } from 'react';

export default class AnimateContent extends Component {
  constructor(props) {
    super(props);

    this.wrapper = React.createRef();
  }
  componentDidMount() {
    if (typeof IntersectionObserver === 'undefined') return; // no intersection observer support so just bail out;

    const elements = this.wrapper.querySelectorAll(
      ':scope > p, :scope > h1,:scope > h2,:scope > h3,:scope > h4, :scope > h5, :scope > div'
    );

    const config = {
      threshold: 0.3
    };

    let observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
        } else {
          entry.target.style.opacity = 0.05;
        }
      });
    }, config);

    elements.forEach(element => {
      observer.observe(element);
      element.style.opacity = 0.03;
    });

    setTimeout(() => {
      elements.forEach(element => {
        element.style.transition = '.7s opacity ease-in, .25s transform ease';
      });
    }, 500);
  }

  render() {
    return <div ref={n => (this.wrapper = n)}>{this.props.children}</div>;
  }
}
