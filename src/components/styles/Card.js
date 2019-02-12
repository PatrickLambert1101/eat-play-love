import styled from 'styled-components';

const Card = styled.div`
  position: relative;
  text-align: center;
  flex-basis: 49%;
  margin-bottom: 2%;
  a::after {
    position: absolute;
    content: '';
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: ${props => props.theme.overlay};
    z-index: 1;
    transition: opacity 1s ease;
  }
  a:hover::after {
    opacity: 0.6;
  }
  @media screen and (max-width: ${props => props.theme.mobile}) {
    margin-bottom: 15px;
    flex-basis: 100%;
  }

  h2 {
    position: absolute;
    left: 50%;
    color: #fff;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    margin: 0;
  }
`;

export default Card;
