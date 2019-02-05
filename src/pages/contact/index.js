import React from 'react';
import { navigateTo } from 'gatsby-link';
import PageContainer from '../../components/styles/PageContainer.js';
import Form from '../../components/styles/Form.js';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

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
        <Form
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
          <div className="flex">
            <input
              className="input"
              type={'text'}
              name={'name'}
              placeholder={'Name'}
              onChange={this.handleChange}
              id={'name'}
              required={true}
            />
            <input
              className="input"
              type={'email'}
              placeholder={'Email'}
              name={'email'}
              onChange={this.handleChange}
              id={'email'}
              required={true}
            />
          </div>
          <textarea
            className="textarea"
            name={'message'}
            placeholder={'Message'}
            onChange={this.handleChange}
            id={'message'}
            required={true}
          />
          <button type="submit">Send</button>
        </Form>
      </PageContainer>
    );
  }
}
