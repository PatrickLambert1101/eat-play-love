import React from 'react';
import facebook from '../img/facebook.svg';
import instagram from '../img/instagram.svg';
import mail from '../img/mail.svg';
import FootLogo from './FootLogo.js';
import pinterest from '../img/pinterest.svg';
import styled from 'styled-components';
import { navigateTo } from 'gatsby-link';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

const FooterWrap = styled.footer`
  background-color: #fdf6f2;
`;
const Social = styled.div`
  padding-top: 4rem;
  display: flex;
  justify-content: space-around;
  max-width: ${props => props.theme.maxWidth};
  margin: auto;
  margin-top: 4rem;
  padding-bottom: 60px;
  align-items: center;
  a {
    text-align: center;
    flex: 1;
  }
`;
const SocialLogo = styled.img`
  height: 25px;
  @media (max-width: ${props => props.theme.mobile}) {
    height: 20px;
  }
`;

const FooterLogo = styled.div`
  width: 180px;
  height: 118px;
  .gatsby-image-wrapper {
    width: 160px;
    flex: 1;
    margin: auto;
    img {
      object-fit: contain;
    }
  }

  margin-bottom: 30px;
  @media (max-width: ${props => props.theme.mobile}) {
    margin-bottom: 0;
  }
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
      <FooterWrap>
        <Social>
          <a
            rel="noreferrer noopener"
            target="_blank"
            href={'https://www.facebook.com/eatplayloveretreat/'}
          >
            <SocialLogo
              src={facebook}
              alt="Eat play love events facebook"
              aria-label="facebook"
            />
          </a>
          <a
            rel="noreferrer noopener"
            target="_blank"
            href={'https://www.instagram.com/eatplayloveretreat/'}
          >
            <SocialLogo
              src={instagram}
              alt="Eat play love events instagram"
              aria-label="instagram"
            />
          </a>
          <FooterLogo>
            <FootLogo />
          </FooterLogo>
          <AniLink to={'/contact'}>
            <SocialLogo
              src={mail}
              alt="Eat play love events mail"
              aria-label="mail"
            />
          </AniLink>
          <a
            rel="noreferrer noopener"
            target="_blank"
            href={'https://za.pinterest.com/eatplayloveshop/'}
          >
            <SocialLogo
              src={pinterest}
              alt="Eat play love events pinterest"
              aria-label="pinterest"
            />
          </a>
        </Social>
      </FooterWrap>
    );
  }
}
