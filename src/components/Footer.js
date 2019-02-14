import React from 'react';
import facebook from '../img/facebook.svg';
import instagram from '../img/instagram.svg';
import mail from '../img/mail.svg';
import FootLogo from './FootLogo.js';
import pinterest from '../img/pinterest.svg';
import styled from 'styled-components';
import { navigateTo } from 'gatsby-link';
import { Link } from 'gatsby';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

const FooterWrap = styled.footer`
  padding-top: 4rem;
  display: flex;
  justify-content: space-around;
  margin: auto;
  max-width: 600px;
  margin-bottom: 60px;
  align-items: center;
  @media (max-width: ${props => props.theme.mobile}) {
    flex-direction: column;
    img {
      max-width: 100px;
    }
  }
`;
const Social = styled.div`
  display: flex;
  margin-top: 15px;
  justify-content: space-around;
  width: 100%;
`;
const SocialLogo = styled.img`
  height: 25px;
  @media (max-width: ${props => props.theme.mobile}) {
    height: 20px;
  }
`;
const SocialWrapper = styled.div`
  h2,
  h5 {
    text-align: center;
    margin: 0;
  }
  @media (max-width: ${props => props.theme.mobile}) {
    max-width: 300px;
  }
`;

const FooterLogo = styled.div`
  width: 120px;
  height: 118px;
  .gatsby-image-wrapper {
    width: 150px;
    @media (max-width: ${props => props.theme.mobile}) {
      width: 100px;
    }
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
        <FooterLogo>
          <FootLogo />
        </FooterLogo>
        <SocialWrapper>
          <h2>Follow us</h2>
          <h5>Get all the latest updates</h5>
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
            <Link to={'/contact'}>
              <SocialLogo
                src={mail}
                alt="Eat play love events mail"
                aria-label="mail"
              />
            </Link>
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
        </SocialWrapper>
      </FooterWrap>
    );
  }
}
