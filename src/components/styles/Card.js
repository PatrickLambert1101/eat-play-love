import styled from 'styled-components';

const Card = styled.div`
  position: relative;
  text-align: center;
  flex-basis: 50%;
  margin-bottom: 40px;
  a::after {
    position: absolute;
    content: '';
    left: 0;
    top: 0;
    right: 0;
    height: 100%;
    background-color: ${props => props.theme.overlay};
    z-index: 1;
    transition: opacity 1s ease;
  }
  @media screen and (min-width: ${props => props.theme.mobile}) {
    &:nth-child(2n + 1) {
      padding-right: 20px;
      a::after {
        right: 20px;
      }
    }
    &:nth-child(2n) {
      padding-left: 20px;
      a::after {
        left: 20px;
      }
    }
  }
  a:hover {
    &::after {
      opacity: 0.6;
    }
    img {
      transition: all 0.9s ease-out !important;
      transform: scale(1.06);
    }
  }
  @media screen and (max-width: ${props => props.theme.mobile}) {
    margin-bottom: 15px;
    flex-basis: 100%;
  }
  a > div {
    position: relative;
  }
  h2 {
    position: absolute;
    width: 100%;
    color: #fff;
    top: 50%;
    z-index: 2;
    margin: 0;
    transform: translateY(-50%);
  }
`;

export default Card;
