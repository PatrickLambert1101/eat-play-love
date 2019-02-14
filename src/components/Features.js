import React, { Component } from 'react';
import flower from '../img/flower.svg';
import styled from 'styled-components';

const FeatureStyle = styled.div`
  background-image: url(${props => props.image.childImageSharp.fluid.src});
  background-size: cover;
  background-position: center;
  position: relative;
  &:after {
    position: absolute;
    content: '';
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: ${props => props.theme.overlay};
    z-index: 1;
  }
  > div {
    max-width: ${props => props.theme.maxWidth};
    z-index: 3;
    padding: 50px 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: auto;
    > div {
      flex: 0 0 33.333333%;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 120px;
      img {
        width: 25px;
      }
      p {
        color: #fff;
      }
    }
  }
`;
export default class Features extends Component {
  render() {
    return (
      <FeatureStyle image={this.props.image}>
        <div>
          {this.props.features.map(feature => (
            <div>
              <img src={flower} alt="Event bullet point" />
              <p>{feature.title}</p>
            </div>
          ))}
        </div>
      </FeatureStyle>
    );
  }
}
