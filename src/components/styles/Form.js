import styled, { keyframes } from 'styled-components';
const inputHighlighter = keyframes`
  from {
    background: #5264ae;
  }
  to {
    width: 50px;
    background: red;
  }
`;
const Form = styled.form`
  label {
    color: ${props => props.theme.lightBrown};
    font-weight: normal;
    font-size: 22px;

    position: absolute;
    pointer-events: none;
    left: 16px;
    top: 14px;
    transition: 0.2s ease all;
  }
  input:focus,
  textarea:focus {
    outline: none;
  }

  /* active state */
  textarea:focus ~ label,
  textarea:valid ~ label,
  input:focus ~ label,
  input:valid ~ label {
    top: -8px;
    left: 10px;
    background-color: #fff;
    padding: 0 15px;
    font-size: 16px;
    color: ${props => props.theme.goldLight};
  }
  .bar {
    position: relative;
    display: block;
  }
  .bar:before {
    content: '';
    height: 3px;
    width: 0;
    bottom: 14px;
    position: absolute;
    background: ${props => props.theme.lightBrown};
    transition: 0.2s ease all;
  }
  .bar:before {
    left: 0;
  }

  textarea:focus ~ .highlight,
  input:focus ~ .highlight {
    animation: ${inputHighlighter} 0.3s ease;
  }
  textarea:focus ~ .bar:before,
  textarea:focus ~ .bar:after,
  input:focus ~ .bar:before,
  input:focus ~ .bar:after {
    width: 100%;
  }
  input,
  textarea {
    ::-webkit-input-placeholder {
      visibility: hidden;
    }
    ::-moz-placeholder {
      visibility: hidden;
    }
    :-ms-input-placeholder {
      visibility: hidden;
    }
    :-moz-placeholder {
      visibility: hidden;
    }
    font-size: 22px;
    padding: 12px;
    min-width: 250px;
    width: 100%;
    box-sizing: border-box;
    border-radius: 1px;
    margin-bottom: 14px;
    border: 1px solid ${props => props.theme.goldLight};
  }
  textarea {
    height: 150px;
    padding-top: 16px;
    margin-bottom: 11px;
  }
  .group {
    width: 100%;
    position: relative;
  }
  .flex .group {
    &:first-child {
      margin-right: 10px;
    }
    &:last-child {
      margin-left: 10px;
    }
    @media (max-width: ${props => props.theme.mobile}) {
      display: block;
      &:first-child {
        margin-right: 0px;
      }
      &:last-child {
        margin-left: 0px;
      }
    }
  }
  .flex {
    justify-content: space-between;
    display: flex;
    @media (max-width: ${props => props.theme.mobile}) {
      flex-direction: column;
    }
  }
`;

export default Form;
