import styled from 'styled-components';

const GalleryStyle = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 40px auto;
  flex-wrap: wrap;
  list-style-type: none;

  @media (max-width: ${props => props.theme.mobile}) {
    padding: 0 15px;
  }

  & > div {
    .gatsby-image-wrapper {
      height: 290px;
      @media (max-width: ${props => props.theme.mobile}) {
        height: 200px;
      }
    }
    margin-top: 20px;
    @media (max-width: ${props => props.theme.mobile}) {
      margin-top: 10px;
    }
    &:nth-child(11n + 1) {
      padding-right: 20px;
      flex: 0 0 32%;
    }
    &:nth-child(11n + 2) {
      flex: 0 0 68%;
      @media (max-width: ${props => props.theme.mobile}) {
        padding-right: 10px;
      }
    }
    &:nth-child(11n + 3) {
      padding-right: 20px;
      flex: 0 0 50%;
      .gatsby-image-wrapper {
        height: 500px;
        @media (max-width: ${props => props.theme.mobile}) {
          height: 290px;
        }
      }
    }
    &:nth-child(11n + 4) {
      flex: 0 0 50%;
      .gatsby-image-wrapper {
        height: 500px;
        @media (max-width: ${props => props.theme.mobile}) {
          height: 290px;
        }
      }
      padding-right: 20px;
      @media (max-width: ${props => props.theme.mobile}) {
        padding-right: 10px;
      }
    }
    &:nth-child(11n + 5) {
      padding-right: 20px;
      flex: 0 0 68%;
    }
    &:nth-child(11n + 6) {
      flex: 0 0 32%;
      @media (max-width: ${props => props.theme.mobile}) {
        padding-right: 10px;
      }
    }
    &:nth-child(11n + 7) {
      flex: 0 0 32%;
      padding-right: 20px;
    }
    &:nth-child(11n + 8) {
      flex: 0 0 68%;
      @media (max-width: ${props => props.theme.mobile}) {
        padding-right: 10px;
      }
    }
    &:nth-child(11n + 9) {
      flex: 0 0 50%;
      padding-right: 20px;
      .gatsby-image-wrapper {
        height: 500px;
        @media (max-width: ${props => props.theme.mobile}) {
          height: 290px;
        }
      }
    }
    &:nth-child(11n + 10) {
      flex: 0 0 50%;
      .gatsby-image-wrapper {
        height: 500px;
        @media (max-width: ${props => props.theme.mobile}) {
          height: 290px;
        }
      }
    }
    &:nth-child(11n) {
      .gatsby-image-wrapper {
        height: 500px;
        @media (max-width: ${props => props.theme.mobile}) {
          height: 190px;
        }
      }
      flex: 0 0 100%;
    }
  }
`;

export default GalleryStyle;
