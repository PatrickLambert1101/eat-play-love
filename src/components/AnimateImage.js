import React, { Component } from 'react';
import styled from 'styled-components';
const ScaleImage = styled.div`
  /* position: relative;
  overflow: hidden; */
  img {
    transform: translate(-50%, -50%) scale(1.1);
    transition: transform 0.35s;
  }
`;

export default class AnimateImage extends Component {
  constructor(props) {
    super(props);

    this.wrapper = React.createRef();
  }
  componentDidMount() {
    if (typeof IntersectionObserver === 'undefined') return; // no intersection observer support so just bail out;

    const elements = this.wrapper.querySelectorAll(':scope > img');

    const config = {
      threshold: 0.3
    };

    let observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.transform = 'translate(-50%, -50%) scale(1.3)';
        } else {
          entry.target.style.transform = 'translate(-50%, -50%) scale(1)';
        }
      });
    }, config);

    elements.forEach(element => {
      observer.observe(element);
      element.style.transform = 'translate(-50%, -50%) scale(1.1)';
    });

    setTimeout(() => {
      elements.forEach(element => {
        element.style.transition = 'transform 0.35s';
      });
    }, 500);
  }

  render() {
    return (
      <ScaleImage ref={n => (this.wrapper = n)}>
        {this.props.children}
      </ScaleImage>
    );
  }
}
