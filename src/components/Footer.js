import React, { Component } from 'react';
import { Link } from 'gatsby';
import logo from '../img/footer-logo.png';
import facebook from '../img/facebook.svg';
import instagram from '../img/instagram.svg';
import mail from '../img/mail.svg';
import pinterest from '../img/pinterest.svg';
import styled from 'styled-components';
import { navigateTo } from 'gatsby-link';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

const FooterForm = styled.form`
  display: flex;
  align-items: stretch;
  margin-left: 20px;
  button {
    background-color: #aa9275;
    color: #ebe6e1;
    font-weight: bold;
    font-family: 'Georgia', Arial, Helvetica, sans-serif;
    font-size: 22px;
    padding: 5px 22px;
    border: 1px solid #a93a3a;
  }
  input {
    background-color: #f9decf;
    color: #824706;
    font-size: 22px;
    padding: 10px;
    border: 1px solid #be8989;
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
  }
`;
const FootTop = styled.div`
  margin-top: 6rem;
  background-color: red;
  background-color: #faf1c9;
  border-top: 1px solid #979797;
  padding: 25px;
  border-bottom: 1px solid #979797;
  & > div {
    margin: auto;
    display: flex;
    max-width: 1000px;
    justify-content: space-between;
    @media (max-width: 900px) {
      flex-direction: column;
      padding-bottom: 50px;
    }

    align-items: center;
    h2 {
      color: #824706;
    }
  }
`;
const FootBottom = styled.div`
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  margin: auto;
  max-width: 1000px;
  align-items: center;
  @media (max-width: 900px) {
    flex-direction: column;
    img {
      max-width: 180px;
    }
  }
`;
const Social = styled.div`
  display: flex;
  flex: 2;
  justify-content: space-around;
  width: 100%;
`;
const SocialLogo = styled.img`
  height: 80px;
  @media (max-width: 900px) {
    height: 50px;
  }
`;

const FootLogo = styled.div`
  flex: 1;
  img {
    width: 100%;
  }
  margin-bottom: 30px;
`;
export default class Footer extends React.Component {
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
      <footer>
        <FootTop>
          <div>
            <h2>Sign up for our newsletter</h2>
            <FooterForm
              name="contact"
              method="post"
              action="/contact/thanks/"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={this.handleSubmit}
            >
              <input type="hidden" name="form-name" value="contact" />
              <div hidden>
                <label>
                  Don’t fill this out:
                  <input name="bot-field" onChange={this.handleChange} />
                </label>
              </div>
              <input
                className="input"
                type={'email'}
                name={'email'}
                onChange={this.handleChange}
                id={'email'}
                placeholder={'Enter your email'}
                required={true}
              />

              <button type="submit">Send</button>
            </FooterForm>
          </div>
        </FootTop>
        <FootBottom>
          <FootLogo>
            <img src={logo} alt={'Footer logo'} />
          </FootLogo>
          <Social>
            <a
              target="_blank"
              href={'https://www.facebook.com/eatplayloveretreat/'}
            >
              <SocialLogo src={facebook} />
            </a>
            <a
              target="_blank"
              href={'https://www.instagram.com/eatplayloveretreat/'}
            >
              <SocialLogo src={instagram} />
            </a>
            <a target="_blank" href={'mailto:eatplayloveretreat@gmail.com'}>
              <SocialLogo src={mail} />
            </a>
            <a
              target="_blank"
              href={'https://za.pinterest.com/eatplayloveshop/'}
            >
              <SocialLogo src={pinterest} />
            </a>
          </Social>
        </FootBottom>
      </footer>
    );
  }
}
