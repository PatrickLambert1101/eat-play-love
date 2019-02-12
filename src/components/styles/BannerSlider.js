import styled from 'styled-components';

const BannerSlider = styled.div`
  margin: 0 auto 80px;
  width: 100%;

  @media (max-width: ${props => props.theme.mobile}) {
    padding: 0;
    .gatsby-image-wrapper {
      height: 420px;
    }
  }
  .slick-slide {
    max-height: 530px;
    height: 100%;
    position: relative;
    > div > div {
      display: block !important;
    }
    &::after {
      position: absolute;
      content: '';
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      background-color: ${props => props.theme.overlay};
      z-index: 1;
    }

    h2 {
      position: absolute;
      color: #fff;
      z-index: 2;
      margin: 0;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    @media (max-width: ${props => props.theme.mobile}) {
      height: auto;
    }
  }
`;

export default BannerSlider;
