import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Transition from './Transition';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import './font-face.css';
import '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';

const theme = {
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '97vw',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
  goldLight: '#daa56b',
  goldDark: '#965711',
  greyButton: '#595959',
  grey: '#979797',
  pink: '#f9decf'
};

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
  }

h1{
  font-size: 3.8rem;
  color: ${theme.goldLight};
  text-align: center;
  margin-bottom: 2rem;
  margin-top: 5px;
  font-weight: 100;
  font-family: 'RV', Arial, Helvetica, sans-serif;
}
h2
  {font-size: 2.2rem;
  font-weight: 100;
  color: ${theme.goldLight};
  font-family: ${theme.georgia};
  text-align: center;}

h3
 { font-size: 2rem;
  font-weight: 100;
  color: ${theme.goldLight};
  font-family: ${theme.georgia};
  text-align: center;}

h4
  {color: ${theme.goldLight};
  font-weight: 100;
  font-size: 24px;
  text-decoration: none;
  font-family: ${theme.georgia};
}
h5
{  color: ${theme.goldLight};
  font-weight: 100;
  font-size: 18px;
  margin-top: -20px;
  text-decoration: none;
  font-family: ${theme.georgia};
}
p
 { font-family: ${theme.georgia};
  font-size: 21px;
  line-height: 27px;
}
a
 { text-decoration: none;}

body
  {margin: 0;}
.navbar {
  margin-bottom: 3rem;
  @media (max-width: 900px) {
    margin-bottom: 1.5rem;
  }
}

.navbar-brand {
  justify-content: center;
  margin-bottom: 40px;
  margin-left: 15px;
  margin-top: 40px;
  display: flex;
  @media (max-width: 480px) {
    justify-content: space-between;
  }
  .navbar-item {
    width: 530px;
  }
  .navbar-item img {
    width: 100% !important;
    text-align: center;
    @media (max-width: 480px) {
      max-width: 300px;
    }
  }
}
.left-content {
  text-align: left;
}

.gatsby-image-wrapper {
  border-radius: 0;
}

.content {
  max-width: ${theme.containerWidth};
  margin: auto;
  text-align: center;
  @media (max-width: 500px) {
    margin-left: 15px;
    margin-right: 15px;
  }
}
.tag-link a {
  text-decoration: none;
  color: #131211;
  font-family: ${theme.georgia};
  font-size: 18px;
  &:hover {
    border-bottom: 1px solid ${theme.goldLight};
  }
}

.read-more {
  text-decoration: none;
  font-family: ${theme.georgia};
  font-size: 16px;
  color: ${theme.greyButton};
  text-align: center;
  margin-top: 20px;
  padding: 6px 10px;
  background-color: ${theme.pink};
  transition: all 0.2s ease-out;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0);
  &:hover {
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
    background-color: #ecc2aa;
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

.button {
  text-decoration: none;
  font-family: ${theme.georgia};
  font-size: 14px;
  color: ${theme.greyButton};
  padding: 6px 10px;
  background-color: ${theme.pink};
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

.home {
  @media (max-width: 500px) {
    margin-left: 15px;
    margin-right: 15px;
  }
  h2 {
    font-size: 2.6rem;
    font-family: 'RV', Arial, Helvetica, sans-serif;
  }
}

.lg-mg {
  margin-top: 50px;
}

.blurb {
  font-style: italic;
  color: #925a20;
  margin-top: 30px;
  text-align: left;
}

.navbar-start {
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: ${theme.containerWidth};
  margin-bottom: 30px;
  margin: auto;
  height: auto;
  opacity: 1;
  transition: all 0.7s cubic-bezier(0.5, 1, 0.22, 1);
  a {
    width: 120px;
    padding: 15px;
    text-align: center;
    font-size: 24px;
    letter-spacing: 1.7px;
    text-decoration: none;
    color: ${theme.grey};
    font-family: 'Ostrich', Arial, Helvetica, sans-serif;
  }
}

@media (max-width: 900px) {
  .navbar-start {
    padding-top: 30px;
    flex-direction: column;
    align-items: center;
    a {
      min-height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .toggle-closed .navbar-start {
    max-height: 1px;
    overflow: hidden;
    list-style: none;
    opacity: 0;
    margin: 0;
    padding: 0;
    transition: all 0.7s cubic-bezier(0.325, 1, 0.22, 1);
  }
}

.nav-btn {
  @media (min-width: 901px) {
    display: none;
  }
  @media (max-width: 480px) {
    margin-right: 15px;
    margin-top: 15px;
  }
  img {
    max-width: 55px;
  }
}
.ReactModal__Overlay {
  opacity: 0;
  transition: opacity 200ms ease-in-out;
}

.ReactModal__Overlay--after-open {
  opacity: 1;
}

.ReactModal__Overlay--before-close {
  opacity: 0;
}

.gallery-wrap {
  display: flex;
}

.banner-slide .slick-slide {
  height: 420px;
  @media (max-width: 480px) {
    height: auto;
  }
}

.instafeed .slick-slide > div {
  padding: 50px;
}`;

const TemplateWrapper = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <React.Fragment>
            <Helmet>
              <html lang="en" />
              <title>{data.site.siteMetadata.title}</title>
              <meta
                name="description"
                content={data.site.siteMetadata.description}
              />

              <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/img/apple-touch-icon.png"
              />
              <link
                rel="icon"
                type="image/png"
                href="/img/favicon-32x32.png"
                sizes="32x32"
              />
              <link
                rel="icon"
                type="image/png"
                href="/img/favicon-16x16.png"
                sizes="16x16"
              />

              <link
                rel="mask-icon"
                href="/img/safari-pinned-tab.svg"
                color="#ff4400"
              />
              <meta name="theme-color" content="#fff" />

              <meta property="og:type" content="business.business" />
              <meta
                property="og:title"
                content={data.site.siteMetadata.title}
              />
              <meta property="og:url" content="/" />
              <meta property="og:image" content="/img/og-image.jpg" />
            </Helmet>
            <Navbar />
            <Transition location={location}>{children}</Transition>
            <Footer />
          </React.Fragment>
        </ThemeProvider>
      </React.Fragment>
    )}
  />
);

export default TemplateWrapper;
