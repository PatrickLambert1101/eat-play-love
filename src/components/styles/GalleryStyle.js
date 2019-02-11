import styled from 'styled-components';

const GalleryStyle = styled.div`
  display: flex;
  max-width: 1200px;
  margin: auto;
  flex-wrap: wrap;
  list-style-type: none;
  & > div {
    .gatsby-image-wrapper {
      height: 290px;
      @media (max-width: ${props => props.theme.mobile}) {
        height: 100px;
      }
    }
    margin-top: 20px;
    @media (max-width: ${props => props.theme.mobile}) {
      margin-top: 10px;
    }
    &:nth-child(11n + 1) {
      flex: 0 0 100%;
    }
    &:nth-child(11n + 2) {
      flex: 0 0 36.5625%;
      padding-right: 20px;
      @media (max-width: ${props => props.theme.mobile}) {
        padding-right: 10px;
      }
    }
    &:nth-child(11n + 3) {
      flex: 0 0 63.4375%;
    }
    &:nth-child(11n + 4) {
      .gatsby-image-wrapper {
        height: 500px;
        @media (max-width: ${props => props.theme.mobile}) {
          height: 190px;
        }
      }
      padding-right: 20px;
      @media (max-width: ${props => props.theme.mobile}) {
        padding-right: 10px;
      }
      flex: 0 0 68.95833333333333%;
    }
    &:nth-child(11n + 5) {
      .gatsby-image-wrapper {
        height: 500px;
        @media (max-width: ${props => props.theme.mobile}) {
          height: 190px;
        }
      }
      flex: 0 0 31.041666667%;
    }
    &:nth-child(11n + 6) {
      flex: 0 0 36.5625%;
      padding-right: 20px;
      @media (max-width: ${props => props.theme.mobile}) {
        padding-right: 10px;
      }
    }
    &:nth-child(11n + 7) {
      flex: 0 0 63.4375%;
    }
    &:nth-child(11n + 8) {
      flex: 0 0 61.5625%;
      padding-right: 20px;
      @media (max-width: ${props => props.theme.mobile}) {
        padding-right: 10px;
      }
    }
    &:nth-child(11n + 9) {
      flex: 0 0 38.4375%;
    }
    &:nth-child(11n + 10) {
      .gatsby-image-wrapper {
        height: 500px;
        @media (max-width: ${props => props.theme.mobile}) {
          height: 190px;
        }
      }
      flex: 0 0 29.375%;
      padding-right: 20px;
      @media (max-width: ${props => props.theme.mobile}) {
        padding-right: 10px;
      }
    }
    &:nth-child(11n) {
      .gatsby-image-wrapper {
        height: 500px;
        @media (max-width: ${props => props.theme.mobile}) {
          height: 190px;
        }
      }
      flex: 0 0 70.625%;
    }
  }
`;

export default GalleryStyle;
