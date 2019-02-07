import styled from 'styled-components';

const Form = styled.form`
  input,
  textarea {
    background-color: #f9decf;
    color: #824706;
    font-size: 22px;
    padding: 12px;
    min-width: 250px;
    width: 100%;
    box-sizing: border-box;
    border-radius: 1px;
    margin-bottom: 14px;
    border: 0.5px solid #be8989;
  }
  .flex {
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
  }
`;

export default Form;
