import styled from 'styled-components';

const AltCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  h2 {
    margin-top: 0;
  }
  h4 {
    margin: 0;
  }
  @media (max-width: 480px) {
    align-items: center;
    margin-bottom: 15px;
    h2 {
      margin-top: 15px;
    }
  }
`;

export default AltCard;
