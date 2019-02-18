import React from 'react';
import Form from './styles/Form.js';
import Btn from './styles/Btn.js';
import ReadMore from './ReadMore.js';
import { navigateTo } from 'gatsby-link';
import Select from 'react-select';
import styled from 'styled-components';
import AnimateContent from './AnimateContent';

const colourStyles = {
  control: styles => ({ ...styles }),
  option: (styles, { isFocused }) => {
    return {
      ...styles,
      backgroundColor: isFocused ? '#c67927' : '#fff',
      color: isFocused ? '#fff' : '#824706'
    };
  }
};
const SelectSingle = styled(Select)`
  outline: none;
  > div {
    position: relative;
    font-weight: normal;
    font-size: 22px;
    margin-bottom: 14px;
  }
`;
const options = [
  { value: 'retreats', label: 'Retreats' },
  { value: 'events', label: 'Events' }
];

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

function EventType(props) {
  return props.eventName ? (
    <div className="group">
      <input
        className="input"
        type={'text'}
        name={'Event Type'}
        defaultValue={props.eventName}
        id={props.eventName}
        required={true}
      />
      <span className="highlight" />
      <span className="bar" />
      <label>{'Event Type'}</label>
    </div>
  ) : null;
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
        singleColumn={this.props.singleColumn}
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
        <AnimateContent>
          <div className={this.props.singleColumn ? 'single-column' : 'flex'}>
            <div onChange={this.handleChange}>
              <EventType eventName={this.props.eventName} />
            </div>
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
            <SelectSingle
              styles={colourStyles}
              options={options}
              theme={theme => ({
                ...theme,
                borderRadius: 0,
                border: '1px solid #c67927',
                colors: {
                  ...theme.colors,
                  primary25: '#c67927',
                  primary75: '#c67927',
                  primary50: '#c67927',
                  primary: '#c67927',
                  neutral10: '#c67927',
                  neutral20: '#c67927',
                  neutral50: '#824706',
                  neutral60: '#824706',
                  neutral70: '#824706',
                  neutral80: '#824706',
                  neutral90: '#824706'
                }
              })}
            />
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
          <Btn type="submit">
            <ReadMore text={'Send'} align={'center'} />
          </Btn>
        </AnimateContent>
      </Form>
    );
  }
}

export default ContactForm;
