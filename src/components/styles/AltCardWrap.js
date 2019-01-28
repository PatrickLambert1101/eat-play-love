import styled from 'styled-components';

const AltCardWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  & > * {
    flex: 1;
    padding: 0 20px;
  }
  h2 {
    text-align: left;
  }
  &:nth-child(2n + 1) {
    flex-direction: row-reverse;
  }
  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
    h2 {
      text-align: center;
    }
    &:nth-child(2n + 1) {
      flex-direction: column;
    }
  }
`;

export default AltCardWrap;
