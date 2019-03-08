import React from 'react';
import facebook from '../img/facebook.svg';
import instagram from '../img/instagram.svg';
import mail from '../img/mail.svg';
import FootLogo from './FootLogo.js';
import pinterest from '../img/pinterest.svg';
import styled from 'styled-components';
import { navigateTo } from 'gatsby-link';
import TransitionLink from 'gatsby-plugin-transition-link';
import AnimateContent from './AnimateContent';
import isEntryExit from './isEntryExit';

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

export default function Footer() {
  return (
    <FooterWrap>
      <AnimateContent>
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
          <TransitionLink {...isEntryExit} to={'/contact'}>
            <SocialLogo
              src={mail}
              alt="Eat play love events mail"
              aria-label="mail"
            />
          </TransitionLink>
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
      </AnimateContent>
    </FooterWrap>
  );
}
