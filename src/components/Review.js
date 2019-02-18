import React from 'react';
import PageContainer from '../components/styles/PageContainer';
import AnimateContent from '../components/AnimateContent';
import styled from 'styled-components';

const ReviewStyle = styled.div`
  color: ${props => props.theme.textBrown};
  font-style: italic;
  font-weight: 600;
  margin-bottom: 3em;
  margin-top: 3em;
  text-align: left;
  span {
    padding-left: 1.6em;
    font-size: 1em;
    margin-top: -5px;
    display: block;
    position: relative;
    &::before {
      position: absolute;
      content: '';
      left: 7px;
      top: 14px;
      margin-top: -6px;
      height: 2px;
      width: 15px;
      background-color: ${props => props.theme.textBrown};
    }
  }
`;

class Review extends React.Component {
  render() {
    return (
      <PageContainer>
        <AnimateContent>
          <ReviewStyle>
            <p>“{this.props.review}”</p>
            <span>{this.props.author}</span>
          </ReviewStyle>
        </AnimateContent>
      </PageContainer>
    );
  }
}

export default Review;
