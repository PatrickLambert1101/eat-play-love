import React, { Component } from 'react';
import flower from '../img/flower.svg';
import styled from 'styled-components';

const FeatureStyle = styled.div`
  background-image: url(${props => props.image.childImageSharp.fluid.src});
  background-size: cover;
  margin-top: 30px;
  margin-bottom: 30px;
  background-position: center;
  position: relative;
  h2 {
    color: #fff;
    text-align: center;
    position: relative;
    font-family: ${props => props.theme.georgia};
    z-index: 3;
    padding-top: 60px;
    position: relative;
  }
  &:after {
    position: absolute;
    content: '';
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: #b38e78c4;
    z-index: 1;
  }
  > div {
    max-width: ${props => props.theme.maxWidth};
    z-index: 3;
    position: relative;
    padding: 10px 15px 50px;
    display: flex;
    justify-content: center;
    @media (max-width: ${props => props.theme.mobile}) {
      flex-direction: column;
    }
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
        font-weight: bold;
        font-size: 30px;
        padding-left: 10px;
      }
    }
  }
`;
export default class Features extends Component {
  render() {
    return (
      <FeatureStyle image={this.props.image}>
        <h2>
          Need help in creating the event & experience of your dreams? <br />
          We do it all!
        </h2>
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
