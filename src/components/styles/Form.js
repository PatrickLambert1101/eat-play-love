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
  button {
    text-decoration: none;
    font-family: ${props => props.theme.georgia};
    font-size: 14px;
    color: ${props => props.theme.greyButton};
    padding: 6px 10px;
    background-color: ${props => props.theme.pink};
    transition: all 0.2s ease-out;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0);
    &:hover {
      box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
      padding: 10px 16px;
    }
    &.large {
      font-weight: bold;
      font-family: 'Georgia', Arial, Helvetica, sans-serif;
      font-size: 28px;
      padding: 8px 22px;
      color: #ebe6e1;
      background-color: #824706;
      border: 1px solid #a93a3a;
    }
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
