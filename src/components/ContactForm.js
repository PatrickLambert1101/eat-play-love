import React from 'react';
import Form from './styles/Form.js';
import Button from './Button.js';
import { navigateTo } from 'gatsby-link';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

class ContactForm extends React.Component {
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
        <div className={this.props.singleColumn ? 'single-column' : 'flex'}>
          <div className="group">
            <input
              className="input"
              type={'text'}
              name={'name'}
              placeholder={'Name'}
              onChange={this.handleChange}
              id={'name'}
              required={true}
            />
            <span className="highlight" />
            <span className="bar" />
            <label>Name</label>
          </div>
          <div className="group">
            <input
              className="input"
              type={'email'}
              placeholder={'Email'}
              name={'email'}
              onChange={this.handleChange}
              id={'email'}
              required={true}
            />
            <span className="highlight" />
            <span className="bar" />
            <label>Email</label>
          </div>
        </div>
        <div className="group">
          <textarea
            className="textarea"
            name={'message'}
            placeholder={'Message'}
            onChange={this.handleChange}
            id={'message'}
            required={true}
          />
          <span className="highlight" />
          <span className="bar" />
          <label>Message</label>
        </div>
        <Button
          text={'Send'}
          align={'center'}
          type="submit"
          brown
          fullWidth={this.props.singleColumn}
        />
      </Form>
    );
  }
}

export default ContactForm;
