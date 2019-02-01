import styled from 'styled-components';

const FormFlex = styled.div`
  display: flex;
  justify-content: space-between;
  input:first-child {
    margin-right: 10px;
  }
  input:last-child {
    margin-left: 10px;
  }
  @media (max-width: 480px) {
    display: block;
    input:first-child {
      margin-right: 0px;
    }
    input:last-child {
      margin-left: 0px;
    }
  }
`;

export default FormFlex;
