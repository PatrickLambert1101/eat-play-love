import React from 'react';
import { navigateTo } from 'gatsby-link';
import styled, { css } from 'styled-components';
import PageContainer from '../../components/styles/PageContainer.js';
import FormFlex from '../../components/styles/FormFlex.js';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

const styles = css`
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
  &::placeholder {
    color: #824706;
    opacity: 1;
    font-weight: bold;
    font-family: 'Georgia', Arial, Helvetica, sans-serif;
  }
  &:-ms-input-placeholder {
    color: #824706;
    font-weight: bold;
    font-family: 'Georgia', Arial, Helvetica, sans-serif;
  }
  &::-ms-input-placeholder {
    color: #824706;
    font-weight: bold;
    font-family: 'Georgia', Arial, Helvetica, sans-serif;
  }
`;

const Input = styled.input`
  ${styles};
`;

const TextArea = styled.textarea`
  ${styles};
`;

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state
      })
    })
      .then(() => navigateTo(form.getAttribute('action')))
      .catch(error => alert(error));
  };

  render() {
    return (
      <PageContainer form={true}>
        <h1>Contact</h1>
        <form
          name="contact"
          method="post"
          action="/contact/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <div hidden>
            <input name="bot-field" onChange={this.handleChange} />
          </div>
          <FormFlex>
            <Input
              className="input"
              type={'text'}
              name={'name'}
              placeholder={'Name'}
              onChange={this.handleChange}
              id={'name'}
              required={true}
            />
            <Input
              className="input"
              type={'email'}
              placeholder={'Email'}
              name={'email'}
              onChange={this.handleChange}
              id={'email'}
              required={true}
            />
          </FormFlex>
          <TextArea
            className="textarea"
            name={'message'}
            placeholder={'Message'}
            onChange={this.handleChange}
            id={'message'}
            required={true}
          />
          <button className="button large is-link" type="submit">
            Send
          </button>
        </form>
      </PageContainer>
    );
  }
}
