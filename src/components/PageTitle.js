import React, { Component } from 'react';
import AnimateContent from '../components/AnimateContent';

export default class PageTitle extends Component {
  render() {
    return (
      <div>
        <AnimateContent>
          <h2>{this.props.title}</h2>
          <h5>{this.props.subtitle}</h5>
        </AnimateContent>
      </div>
    );
  }
}
