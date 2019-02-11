import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import Navbar from '../components/Navbar';

import { ThemeProvider, createGlobalStyle } from 'styled-components';
import './font-face.css';

const theme = {
  red: '#FF0000',
  black: '#393939',
  lightgrey: '#E1E1E1',
  overlay: '#615f5fa6',
  offWhite: '#EDEDED',
  maxWidth: '94vw',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
  goldLight: '#c67927',
  goldDark: '#965711',
  brown: '#ebe6e1',
  lightBrown: '#824706',
  textBrown: '#925A20',
  qtextBrown: '#925A20',
  darkRed: '#a93a3a',
  greyButton: '#595959',
  grey: '#979797',
  georgia: 'Georgia, Arial, Helvetica, sans-serif',
  pink: '#f9decf',
  lightPink: '#ecc2aa',
  mobile: '800px'
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
{font-size: 3.5rem;
  font-weight: 100;
  color: ${theme.goldLight};
  font-family: ${theme.georgia};
  margin-top:1em;
  font-family: 'RV', Arial, Helvetica, sans-serif;
  text-align: center;}

h3
 { font-size: 2.6rem;
  font-weight: 100;
  color: ${theme.goldLight};
  font-family: ${theme.georgia};
  text-align: center;}

h4
  {color: ${theme.goldLight};
  font-weight: 100;
  font-size: 24px;
  line-height: 31px;
  margin-top: 10px;
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
p, li
 { font-family: ${theme.georgia};
  font-size: 18px;
  line-height: 27px;
}
a
 { text-decoration: none; color: inherit}

body
  {margin: 0;}
.navbar {
  @media (max-width: 900px) {
    margin-bottom: 1.5rem;
  }
}
.gatsby-resp-image-link{
  margin:15px -15px;
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
function titleCase(str) {
  var splitStr = str.toLowerCase().split(' ');
  for (var i = 0; i < splitStr.length; i++) {
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join(' ');
}

const TemplateWrapper = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
            description
            icon16
            icon32
          }
        }
      }
    `}
    render={function(data) {
      const title = data.site.siteMetadata.title;
      const page = titleCase(
        location.pathname
          .split('/')
          .filter(i => i)
          .join(' | ')
      );
      const pageTitle =
        location.pathname === '/' ? title + ' | Home' : title + ' | ' + page;
      return (
        <React.Fragment>
          <GlobalStyle />
          <ThemeProvider theme={theme}>
            <React.Fragment>
              <Helmet>
                <html lang="en" />
                <title>{pageTitle}</title>

                <meta
                  name="description"
                  content={page + ' | ' + data.site.siteMetadata.description}
                />
                <meta
                  property="og:title"
                  content={data.site.siteMetadata.title}
                />
                <meta property="og:url" content="/" />
              </Helmet>
              <Navbar />
              {children}
            </React.Fragment>
          </ThemeProvider>
        </React.Fragment>
      );
    }}
  />
);

export default TemplateWrapper;
