import React from 'react';
import AnimateContent from '../components/AnimateContent';

export default function PageTitle(props) {
  return (
    <div>
      <AnimateContent>
        <h2>{props.title}</h2>
        <h5>{props.subtitle}</h5>
      </AnimateContent>
    </div>
  );
}
