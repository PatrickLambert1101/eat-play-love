import styled from 'styled-components';

const Card = styled.div`
  width: 47%;
  position: relative;
  text-align: center;
  margin: 0 auto 30px;
  h2 {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    margin: 0;
  }
`;

export default Card;
